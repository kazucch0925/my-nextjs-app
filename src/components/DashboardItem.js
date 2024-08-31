import React from 'react';
import './DashboardItem.css';
import Link from 'next/link';

function DashboardItem({ title, icon, disabled, link, onClick }) {
    const handleClick = (e) => {
        if (!disabled && onClick) {
            e.preventDefault(); // デフォルトのリンク動作をキャンセル
            onClick(); // onClickハンドラーを実行
        }
    };

    return (
        <>
            {link ? (
                <Link href={disabled ? '#' : link} passHref>
                    <div className={`dashboard-item ${disabled ? 'disabled' : ''}`} onClick={handleClick}>
                        <img src={`/icons/${icon}`} alt={`${title} icon`} className="item-icon" />
                        <h3 className="item-title">{title}</h3>
                    </div>
                </Link>
            ) : (
                <div className={`dashboard-item ${disabled ? 'disabled' : ''}`} onClick={handleClick}>
                    <img src={`/icons/${icon}`} alt={`${title} icon`} className="item-icon" />
                    <h3 className="item-title">{title}</h3>
                </div>
            )}
        </>
    );
}

export default DashboardItem;
