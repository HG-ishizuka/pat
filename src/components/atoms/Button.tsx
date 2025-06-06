type ButtonProps = {
    label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({label, ...props}: ButtonProps) => {
    return (
        <button {...props}>
            {label}
        </button>
    );
};