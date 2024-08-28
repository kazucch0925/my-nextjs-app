import React from 'react';
import SearchBar from './components/SearchBar';
import DashboardItem from './components/DashboardItem';

function Dashboard() {
    return (
        <div className="dashboard-container">
            <header className="header">
                <h1>DocuHub</h1>
                <button className="logout-button">ログアウト</button>
            </header>
            <h2>ダッシュボード</h2>
            <SearchBar />
            <div className="dashboard-items">
                <DashboardItem title="Wiki" icon="icon-path-here" />
                <DashboardItem title="議事録" icon="icon-path-here" />
                <DashboardItem title="アップロード" icon="icon-path-here" />
                <DashboardItem title="設定" icon="icon-path-here" disabled />
            </div>
        </div>
    );
}

export default Dashboard;
