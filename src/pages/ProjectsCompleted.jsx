import React, { useState } from 'react';

export default function ProjectsCompleted({ sidebarLinks, projectImages }) {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const handleLinkClick = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const filteredImages = selectedCategory === 'all'
        ? projectImages
        : projectImages.filter(image => image.id === selectedCategory);

    // Inline styles for the layout
    const containerStyle = {
        display: 'flex',
        padding: '20px',
        gap: '40px',
        backgroundColor: '#f9f9f9',
        flexWrap: 'wrap',  // Ensures flex children wrap properly
    };

    const sidebarStyle = {
        width: '20%',
        padding: '10px 0',
    };

    const sidebarLinkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontWeight: '600',
        display: 'block',
        padding: '5px 10px',
        transition: 'color 0.3s ease, backgroundColor 0.3s ease',
        cursor: 'pointer',
    };

    const activeLinkStyle = {
        color: '#E20613',
    };

    const portfolioImagesStyle = {
        display: 'grid',
        gridTemplateColumns: selectedCategory === 'all' 
            ? 'repeat(auto-fit, minmax(250px, 1fr))'  // Grid view for all images
            : '1fr',  // Full-width layout when a specific category is selected
        gap: '20px',
        width: '75%',
    };

    const portfolioItemStyle = {
        borderRadius: '8px',
        overflow: 'hidden',
        transition: 'transform 0.3s, boxShadow 0.3s',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',  // Add some shadow for aesthetics
        width: '100%',  // Ensures the item takes the full width of the grid cell
        height: selectedCategory === 'all' ? '200px' : 'auto',  // Fixed height for grid view, auto for full size
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        display: 'block',
        objectFit: selectedCategory === 'all' ? 'cover' : 'contain',  // Cover for grid, contain for full size
    };

    return (
        <div style={containerStyle}>
            <aside style={sidebarStyle}>
                <ul style={{ listStyle: 'none', padding: '0', margin: '0' }}>
                    {sidebarLinks.map(link => (
                        <li key={link.id} style={{ margin: '8px 0' }}>
                            <a
                                href="#"
                                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                                style={{
                                    ...sidebarLinkStyle,
                                    ...(selectedCategory === link.id ? activeLinkStyle : {}),
                                }}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>
            <section style={portfolioImagesStyle}>
                {filteredImages.map(image => (
                    <div key={image.image} style={portfolioItemStyle}>
                        <img src={image.image} alt={`Portfolio ${image.id}`} style={imageStyle} />
                    </div>
                ))}
            </section>
        </div>
    );
}



