import React from 'react';

function DashboardItem({ title, icon, disabled }) {
    return (
        <div className={`dashboard-item ${disabled ? 'disabled' : ''}`}>
            <img src={icon} alt={`${title} icon`} className="item-icon" />
            <h3 className="item-title">{title}</h3>
        </div>
    );
}

export default DashboardItem;
