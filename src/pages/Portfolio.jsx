// Portfolio.js
import React from 'react';
import Banner from '../components/Banner';
import ProjectsCompleted from './ProjectsCompleted';
import { PortfolioData } from '../utils/PortfolioData';
import '../App.css'
export default function Portfolio() {
    const { sidebarLinks, projectImages } = PortfolioData;

    return (
        <>
            <Banner />
            <ProjectsCompleted sidebarLinks={sidebarLinks} projectImages={projectImages} />
        </>
    );
}
