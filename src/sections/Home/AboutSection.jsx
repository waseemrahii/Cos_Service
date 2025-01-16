import React from "react";
import AboutContent from "../../components/AboutContent ";
export default function AboutSection() {
  // Static data based on your provided JSON
  const aboutData = {
    title: "Know Us Better",
    description:
      "Cosmic Construction Int’l (Private) Limited has come a long way to symbolize commitment,         distinction and professional excellence by meeting the stringent, demanding and extra ordinary work requirements of high engineering, importance involving civil,         electrical and mechanical works for the last 18 years. The ever-increasing efforts towards          attaining better and new business ventures have exposed the company to multitude of engineering disciplines.          Now it is company's prerogative to be working in infrastructure,     housing, design and environmental areas other than its strong standing in industrial projects for, chemicals,   road, highways and buildings. CCIPL boasts and claims to have a reputation of company delivering the projects           ahead of schedule.",
    image:
      "https://images.unsplash.com/photo-1694522362256-6c907336af43?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    yearsOfExperience: 18, // For example, 10+ years
  };

  return (
    <AboutContent
      title={`Over  ${aboutData.yearsOfExperience}+ Years of Industry Experience`}
      description={aboutData.description}
      image={aboutData.image}
    />
  );
}
