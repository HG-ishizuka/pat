import { SidebarGroup } from '../../components/molecules/SidebarGroup';
import { sidebarData } from '../data/sidebarData';
import { useSidebar } from '../hooks/useSidebar';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const { openState, toggleGroup } = useSidebar();
    return (
        <div className={styles.wrapper}>
            {sidebarData.map((group, index) => (
                <SidebarGroup key={group.name} {...group} isOpen={openState.has(index)} onToggle={() => toggleGroup(index)}/>
            ))}
        </div>
    );
};
export default Sidebar;
