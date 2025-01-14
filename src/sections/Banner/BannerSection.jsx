import React from 'react';

export default function BannerSection({ children }) {
    return (
        <section
            className="banner-section"
            style={{
                background: 'url(https://construm.bugfinder.net/assets/uploads/logo/banner.jpg)',
                position: 'relative',  
                top: '-3px',           
            }}
        >
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
