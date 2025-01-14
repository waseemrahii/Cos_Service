// AchievementCard.js
import React from 'react';

export default function AchievementCard({ year, title, description }) {
    return (
        <div className="col-12 gy-5 noBorder mb-4">
            <div className="achievement-box d-flex align-items-start">
                <div className="date text-center me-4 position-relative">
                    <div className="circle" style={{
                        background: '#ff6600',
                        color: '#fff',
                        borderRadius: '50%',
                        width: '120px',
                        height: '120px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '26px',
                        fontWeight: 'bold',
                        position: 'relative',
                        zIndex: '1',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    }}>
                        {year}
                    </div>
                    <div className="line" style={{
                        position: 'absolute',
                        width: '4px',
                        background: '#ddd',
                        height: 'calc(100% + 120px)',
                        top: '60px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: '0'
                    }}></div>
                </div>
                <div className="info ms-5" style={{ textAlign: 'left' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'left' }}>{title}</h4>
                    <p style={{ fontSize: '16px', lineHeight: '1.6', textAlign: 'left' }}>
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
