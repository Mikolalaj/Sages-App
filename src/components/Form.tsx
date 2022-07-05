import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { resourcesState } from '../atoms';
import RegisteredInput from "./common/RegisteredInput";
import Button from './common/Button';

import './Form.scss';

export default function Form () {
    const [resources, setResources] = useRecoilState(resourcesState);

    const {handleSubmit, ...restUseForm} = useForm();

    function submit(data: any) {
        setResources(data);
    }

    return (
    <div className='form'>
        <h2>Uzupełnij posiadane surowce</h2>
        <form onSubmit={handleSubmit(submit)}>
            <div className='inputs'>
                <RegisteredInput
                    useForm={restUseForm}
                    name="wood"
                    label="Drewno"
                    autoFocus={true}
                    inputType="number"
                    options={{ required: true }}
                />
                <RegisteredInput
                    useForm={restUseForm}
                    name="food"
                    label="Żywność"
                    autoFocus={true}
                    inputType="number"
                    options={{ required: true }}
                />
                <RegisteredInput
                    useForm={restUseForm}
                    name="stone"
                    label="Kamień"
                    autoFocus={true}
                    inputType="number"
                    options={{ required: true }}
                />
                <RegisteredInput
                    useForm={restUseForm}
                    name="gold"
                    label="Złoto"
                    autoFocus={true}
                    inputType="number"
                    options={{ required: true }}
                />
            </div>
            <Button theme='primary' onClick={handleSubmit(submit)}>OBLICZ</Button>
        </form>
    </div>
    );
}
