import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { resourcesState } from '../atoms';
import Item, { ItemProps } from './Item';
import './Items.scss';

type Cost = {
    Wood?: number;
    Food?: number;
    Stone?: number;
    Gold?: number;
}

export default function Items () {
    const [resources] = useRecoilState(resourcesState);

    function canAfford(item: any): number {
        const cost: Cost = item.cost;
        let AffordCounts = []
        
        if (cost?.Wood) {
            AffordCounts.push(resources.wood / cost.Wood);
        }
        if (cost?.Food) {
            AffordCounts.push(resources.food / cost.Food);
        }
        if (cost?.Stone) {
            AffordCounts.push(resources.stone / cost.Stone);
        }
        if (cost?.Gold) {
            AffordCounts.push(resources.gold / cost.Gold);
        }

        const ifZero = Math.min(...AffordCounts) < 1;
        return ifZero ? 0 : Math.max(...AffordCounts);
    }

    const apiURL = 'http://aoe2.devops.sages.pl/api/v1/units';

    const [affordableItems, setAffordableItems] = useState<ItemProps[]>([]);

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                let allUnits = response.data.units;
                let affordedUnits = [];
                for (let i = 0; i < allUnits.length; i++) {
                    const item = allUnits[i];
                    if (canAfford(item) > 0) {
                        affordedUnits.push({
                            id: item.id,
                            name: item.name,
                            attack: item.attack,
                            armor: item.armor,
                            amount: Math.floor(canAfford(item))
                        })
                    }
                }
                setAffordableItems(affordedUnits);
            }
        )
    }, [resources]);

    return (
    <div className='items'>
        <h2>Liczba jednostek, które możesz kupić za posiadane surowce:</h2>
        <div className='listing'>
            {affordableItems.map(item => (
                <Item key={item.id} {...item}/>
            ))}
        </div>
    </div>
    );
}
