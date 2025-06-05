import { sidebarData } from '../data/sidebarData';
import { useSidebar } from '../hooks/useSidebar';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const { openState, toggleGroup } = useSidebar();
    return (
        <div className={styles.wrapper}>
            {sidebarData.map((data, index) => (
                <div key={data.name}>
                    <div className={styles.sidebargroup} onClick={() => toggleGroup(index)}>
                        <div className={`${styles.toggleIcon} ${openState.has(index) ? styles.open : styles.closed}`}/>
                        {data.name}
                    </div>

                    <div className={`${styles.links} ${ openState.has(index) ? styles.linksOpen : ''}`}>
                        {data.links.map((link) => (
                            <div key={link.path} className={styles.link}>
                                {link.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
