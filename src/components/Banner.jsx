import React from 'react';
import BannerSection from '../sections/Banner/BannerSection';
import HeaderText from '../sections/Banner/HeaderText';
import { BannerData } from '../utils/BannerData';

export default function Banner({ defaultPageName }) {
    const { getPageName, handleNavigation } = BannerData(defaultPageName);

    return (
        <BannerSection>
            <HeaderText 
                pageName={getPageName()}
                onNavigate={handleNavigation}
            />
        </BannerSection>
    );
}
