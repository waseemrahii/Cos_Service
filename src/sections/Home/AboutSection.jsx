import React from 'react';
import AboutContent from '../../components/AboutContent '
export default function AboutSection() {
    // Static data based on your provided JSON
    const aboutData = {
        title: "Know Us Better",
        description: "\"Know Us Better\" is an invitation to delve deeper into the heart of who we are as an organisation. It's an opportunity for you to explore our values, our mission, and the principles that drive us forward. This section is designed to give you a closer look at our journey, the people behind our success, and the unique approach we take to delivering excellence. Whether you're a prospective client, a potential partner, or simply curious, we welcome you to discover what makes us stand out and how we aim to make a meaningful impact in our industry and beyond.",
        image: "https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        yearsOfExperience: 10 // For example, 10+ years
    };

    return (
        <AboutContent 
            title={`We Have ${aboutData.yearsOfExperience}+ Years of Experience in This Industry`}
            description={aboutData.description}
            image={aboutData.image}
        />
    );
}
