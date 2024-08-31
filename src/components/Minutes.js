'use client';

import React, { useState } from 'react';
import TopBar from './TopBar';
import SearchBar from './SearchBar';
import MinutesTable from './MinutesTable';
import Preview from './Preview';
import UploadModal from './UploadModal';
import Button from './Button.js';
import './Minutes.css';

export default function Minutes() {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="minutes-page-container">
            <TopBar isLoggedIn={true} />
            <h2>議事録一覧</h2>
            <div className="content">
                <div className="left-section">
                <div className="search-upload-container">
                    <SearchBar placeholder="議事録を検索..." />
                    <Button
                        onClick={handleOpenModal}
                        className="upload-button"
                        iconSrc={"/icons/upload-white-icon.png"}
                        altText={"Upload-icon"}
                    >
                        アップロード...
                    </Button>
                </div>
                    <MinutesTable />
                </div>
                <div className="right-section">
                    <Preview />
                </div>
            </div>
            {isModalOpen && <UploadModal onClose={handleCloseModal} />}
        </div>
    );
}
