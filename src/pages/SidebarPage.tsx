import Sidebar  from '../features/components/Sidebar';

export default function SidebarPage() {
    return (
    <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>
            <h1>メインコンテンツエリア</h1>
        </main>
    </div>
    );
}
