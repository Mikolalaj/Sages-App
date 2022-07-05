import 'react-hook-form';
import './RegisteredInput.scss';

export interface FormProps {
    useForm: any;
    name: string;
    autoFocus: boolean;
    inputType: string;
    label: string;
    defaultValue?: string;
    options: object;
    className?: string;
}

function RegisteredInput({ useForm, name, autoFocus, inputType, label, defaultValue, options, className, ...props }: FormProps) {
    return (
    <div className='input'>
    <p>{label}</p>
    <input
        className={useForm.formState.errors[name] && `${className} input-error`}
        autoFocus={autoFocus}
        type={inputType}
        defaultValue={defaultValue}
        {...useForm.register(name, options)}
        {...props}
    />
    {useForm.formState.errors[name] && <p className='input-error-text'>{useForm.formState.errors[name].message}</p>}
    </div>
    )
}

export default RegisteredInput