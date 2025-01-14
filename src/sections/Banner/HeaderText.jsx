import React from 'react';

export default function HeaderText({ pageName, onNavigate }) {
    return (
        <div className="header-text text-center">
            <h2>{pageName}</h2>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                    <li onClick={() => onNavigate('/')} className="breadcrumb-item">Home</li>
                    <li className="breadcrumb-item active" aria-current="page">{pageName}</li>
                </ol>
            </nav>
        </div>
    );
}
