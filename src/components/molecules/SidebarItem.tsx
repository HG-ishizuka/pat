import { Label } from "../atoms/Label";
import { Link } from 'react-router-dom';

type SidebarItemProps = {
    id: string;
    label: string;
    link: string;
    icon: string;
    isActive: boolean;
    onClick: () => void;
};

export const SidebarItem = ({id, label, link, isActive, onClick}: SidebarItemProps) => {
    return(
        <li onClick={onClick} className={`${isActive ? '' : ''}`}>
        <Link to={link} >
            <span >{label}</span>
            <Label htmlFor={id}>
                {label}
            </Label>
        </Link>
        </li>    
    );
};