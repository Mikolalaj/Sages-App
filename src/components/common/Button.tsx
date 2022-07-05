import './Button.scss'

export interface FormProps {
    theme: 'primary' | 'cancel';
    children: React.ReactNode;
    onClick: () => void;
}

function Button({ theme, children, onClick }: FormProps) {
    return (
        <div className={`button ${theme}`} onClick={onClick}>
            {children}
        </div>
    )
}

export default Button;