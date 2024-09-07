'use client';

import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);
console.log('Amplify has been configured:', awsExports);

import React, { useState } from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import DashboardItem from './DashboardItem';
import UploadModal from './UploadModal';
import { Storage } from '@aws-amplify/storage';
import './Dashboard.css';

function Dashboard() {
  const [isUploadModalOpen, setUploadModalOpen] = useState(false);

  const handleUploadButtonClick = () => {
    setUploadModalOpen(true);
  };

  const handleCloseModal = () => {
    setUploadModalOpen(false);
  };

  return (
    <div className="dashboard-container">
      <TopBar isLoggedIn={true} />  {/* ダッシュボードではログアウトボタンを表示 */}
        <h2>ダッシュボード</h2>
          <SearchBar placeholder="アプリ内を検索..." />
          <div className="dashboard-items">
            <DashboardItem title="Wiki" icon="wiki-icon.png" disabled /*link="/wiki" *//>
            <DashboardItem title="議事録" icon="minutes-icon.png" link="/minutes" />
            <DashboardItem title="アップロード" icon="upload-icon.png" onClick={handleUploadButtonClick} />
            <DashboardItem title="設定" icon="settings-icon.png" disabled />
          </div>

          {isUploadModalOpen && <UploadModal onClose={handleCloseModal} />}
    </div>
  );
}

export default Dashboard;
