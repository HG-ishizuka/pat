type LabelProps = {
    children: React.ReactNode;
    htmlFor: string;
};

export const Label = ({children, htmlFor}: LabelProps ) => {
    return (
        <label htmlFor={htmlFor}>
            {children}
        </label>
    );
}