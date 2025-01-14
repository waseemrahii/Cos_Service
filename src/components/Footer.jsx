import React from 'react';
import FooterLogoAndBio from '../sections/Footer/FooterLogoAndBio ';
import FooterNewsletter from '../sections/Footer/FooterNewsletter ';
import FooterQuickLinks from '../sections/Footer/FooterQuickLinks';
import FooterServices from '../sections/Footer/FooterServices ';
import { FooterData } from '../utils/FooterData';
import Logo from '../assets/CosmicLogo.png'


export default function Footer() {
    return (
        <footer className="footer-section" id="subscribe">
            <div className="container">
                <div className="row gy-5 gy-lg-0">
                    <div className="col-lg-3 col-md-6">
                        <FooterLogoAndBio 
                            logo={Logo} 
                            bio={FooterData.companyBio} 
                            socialLinks={FooterData.socialLinks} 
                        />
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <FooterQuickLinks links={FooterData.quickLinks} />
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <FooterServices services={FooterData.services} />
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <FooterNewsletter 
                            heading={FooterData.newsletterData.heading}
                            description={FooterData.newsletterData.description}
                            placeholder={FooterData.newsletterData.placeholder}
                            buttonText={FooterData.newsletterData.buttonText}
                        />                    </div>
                </div>
            </div>
        </footer>
    );
}