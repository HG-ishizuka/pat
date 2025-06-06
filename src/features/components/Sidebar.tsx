import { SidebarGroup } from '../../components/molecules/SidebarGroup';
import { sidebarData } from '../data/sidebarData';
import { useSidebar } from '../hooks/useSidebar';
import styles from './Sidebar.module.css';

// 仮置き
const companyName = "XXXXX株式会社";

const Sidebar = () => {
    // useSidebarフックで、現在開いているグループと、開閉を切り替える関数を取得
    const { openState, toggleGroup } = useSidebar();
    return (
        <div className={styles.wrapper}>
            <div className={styles.companyName}>
                {companyName}
            </div>
            {/* sidebarDataのグループリストをループして、SidebarGroupを表示 */}
            {sidebarData.map((group, index) => (
                // グループデータと開閉状態、切り替え操作をまとめて渡している。
                <SidebarGroup key={group.name} {...group} isOpen={openState.has(index)} onToggle={() => toggleGroup(index)}/>
            ))}
        </div>
    );
};
export default Sidebar;
