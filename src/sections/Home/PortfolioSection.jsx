// // Portfolio.js
// import React, { useState } from 'react';

// // PortfolioData
// const PortfolioData = {
//     sidebarLinks: [
//         { id: 'all', text: 'All works', href: '#' },
//         { id: 'residential', text: 'Residential', href: '#' },
//         { id: 'commercial', text: 'Commercial', href: '#' },
//         { id: 'education', text: 'Education', href: '#' },
//         { id: 'office', text: 'Office', href: '#' },
//         { id: 'reconstruction', text: 'Reconstruction', href: '#' },
//         { id: 'hospital', text: 'Hospital', href: '#' },
//         { id: 'construction', text: 'Construction', href: '#' },
//         { id: 'reconstruccion', text: 'Reconstrucción', href: '#' },
//     ],
//     projectImages: [
//         { id: 'residential', image: 'https://plus.unsplash.com/premium_photo-1674676471622-feaf2130fc73?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//         { id: 'commercial', image: 'https://images.unsplash.com/photo-1645421560391-a76d0e77bf84?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//         { id: 'education', image: 'https://images.unsplash.com/photo-1649083048770-82e8ffd80431?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//         { id: 'office', image: 'https://images.unsplash.com/photo-1698824331198-e5ee4ceba86e?q=80&w=1396&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//         { id: 'reconstruction', image: 'https://images.unsplash.com/photo-1645931467048-7050c2d1a3e0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
//         { id: 'construction', image: 'https://construm.bugfinder.net/assets/uploads/portfolio/6360c21f0634f1667285535.jpg' },
//     ]
// };

// export default function Portfolio() {
//     const { sidebarLinks, projectImages } = PortfolioData;
//     const [selectedCategory, setSelectedCategory] = useState('all');

//     const handleLinkClick = (categoryId) => {
//         setSelectedCategory(categoryId);
//     };

//     const filteredImages = selectedCategory === 'all'
//         ? projectImages
//         : projectImages.filter(image => image.id === selectedCategory);

//     // Inline styles for the layout
//     const containerStyle = {
//         display: 'flex',
//         padding: '20px',
//         gap: '40px',
//         backgroundColor: '#f9f9f9',
//         flexWrap: 'wrap',  // Ensures flex children wrap properly
//     };

//     const sidebarStyle = {
//         width: '20%',
//         padding: '10px 0',
//         marginTop:"30px"
//     };

//     const sidebarLinkStyle = {
//         textDecoration: 'none',
//         color: '#333',
//         fontWeight: '600',
//         display: 'block',
//         padding: '5px 10px',
//         transition: 'color 0.3s ease, backgroundColor 0.3s ease',
//         cursor: 'pointer',
//     };

//     const activeLinkStyle = {
//         color: '#e20613',
//     };

//     const portfolioImagesStyle = {
//         display: 'grid',
//         gridTemplateColumns: selectedCategory === 'all' 
//             ? 'repeat(auto-fit, minmax(250px, 1fr))'  // Grid view for all images
//             : '1fr',  // Full-width layout when a specific category is selected
//         gap: '20px',
//         width: '75%',
//     };

//     const portfolioItemStyle = {
//         borderRadius: '8px',
//         overflow: 'hidden',
//         transition: 'transform 0.3s, boxShadow 0.3s',
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',  // Add some shadow for aesthetics
//         width: '100%',  // Ensures the item takes the full width of the grid cell
//         height: selectedCategory === 'all' ? '200px' : 'auto',  // Fixed height for grid view, auto for full size
//     };

//     const imageStyle = {
//         width: '100%',
//         height: '100%',
//         display: 'block',
//         objectFit: selectedCategory === 'all' ? 'cover' : 'contain',  // Cover for grid, contain for full size
//     };

//     return (
        
//             <div style={containerStyle}>
//                 <aside style={sidebarStyle}>
//                     <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
//                         {sidebarLinks.map(link => (
//                             <li key={link.id} style={{ margin: '8px 0' }}>
//                                 <a
//                                     href="#"
//                                     onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
//                                     style={{
//                                         ...sidebarLinkStyle,
//                                         ...(selectedCategory === link.id ? activeLinkStyle : {}),
//                                     }}
//                                 >
//                                     {link.text}
//                                 </a>
//                             </li>
//                         ))}
//                     </ul>
//                 </aside>
//                 <section style={portfolioImagesStyle}>
//                     {filteredImages.map(image => (
//                         <div key={image.image} style={portfolioItemStyle}>
//                             <img src={image.image} alt={`Portfolio ${image.id}`} style={imageStyle} />
//                         </div>
//                     ))}
//                 </section>
//             </div>
//     );
// }





// Portfolio.js
import React from "react";
import "../../App.css";
import ProjectsCompleted from "../../pages/ProjectsCompleted";
import { PortfolioData } from "../../utils/PortfolioData";
export default function Portfolio() {
  const { sidebarLinks, projectImages } = PortfolioData;

  return (
    <>
      <ProjectsCompleted
        sidebarLinks={sidebarLinks}
        projectImages={projectImages}
      />
    </>
  );
}
