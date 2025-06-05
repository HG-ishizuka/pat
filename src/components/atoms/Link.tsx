import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
    name: string;
    path: string;
    className?: string;
};

export const Link = ({ name, path, className }: LinkProps) => {
    return (
        <RouterLink to={path} className={className}>
            {name}
        </RouterLink>
    );
};
