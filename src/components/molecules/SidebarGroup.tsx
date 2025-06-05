import { ToggleIcon } from '../atoms/ToggleIcon';
import { Link as SidebarLink } from '../atoms/Link';
import type { SidebarGroup as SidebarGroupType } from '../../features/types/SidebarGroup';
import styles from './SidebarGroup.module.css';

type SidebarGroupProps = SidebarGroupType & {
    isOpen: boolean;
    onToggle: () => void;
};

export const SidebarGroup = ({ name, links, isOpen, onToggle }: SidebarGroupProps) => {
    return (
        <div>
            <div className={styles.sidebargroup} onClick={onToggle}>
                <ToggleIcon className={`${styles.toggleIcon} ${isOpen ? styles.open : styles.closed}`}/>
                {name}
            </div>

            <div className={`${styles.links} ${isOpen ? styles.linksOpen : ''}`}>
                {links.map((link) => (
                    <SidebarLink key={link.path} name={link.name} path={link.path} className={styles.link}/>
                ))}
            </div>
        </div>
    );
};
