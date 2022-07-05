import { atom } from 'recoil';

type Resources = {
    wood: number;
    food: number;
    stone: number;
    gold: number;
}

const resourcesState = atom<Resources>({
    key: 'resourcesState',
    default: {
        wood: 0,
        food: 0,
        stone: 0,
        gold: 0
    }
});


export { resourcesState };