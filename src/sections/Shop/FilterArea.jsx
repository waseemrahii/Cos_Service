import React, { useState } from 'react';

export default function FilterArea({ filterOptions, onFilterSubmit }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleSizeChange = (event) => {
        const value = event.target.value;
        setSelectedSizes(prev => 
            event.target.checked ? [...prev, value] : prev.filter(size => size !== value)
        );
    };

    const handleColorChange = (event) => {
        const value = event.target.value;
        setSelectedColors(prev => 
            event.target.checked ? [...prev, value] : prev.filter(color => color !== value)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onFilterSubmit({
            category: selectedCategory,
            sizes: selectedSizes,
            colors: selectedColors
        });
    };

    return (
        <div className="filter-area" style={filterAreaStyle}>
            <form onSubmit={handleSubmit}>
                <div className="filter-box" style={filterBoxStyle}>
                    <h4 style={headingStyle}>Categories</h4>
                    <ul className="links" style={linksStyle}>
                        {filterOptions.categories.map((category, index) => (
                            <li key={index} style={listItemStyle}>
                                <input
                                    type="radio"
                                    id={`category-${index}`}
                                    name="category"
                                    value={category._id}
                                    onChange={handleCategoryChange}
                                    style={radioInputStyle}
                                />
                                <label htmlFor={`category-${index}`} style={labelStyle}>{category.name}</label>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="filter-box" style={filterBoxStyle}>
                    <h4 style={headingStyle}>Size</h4>
                    <div className="check-box attribute-length" style={checkboxContainerStyle}>
                        {filterOptions.sizes.map((size, index) => (
                            <div key={index} style={checkboxWrapperStyle}>
                                <input
                                    type="checkbox"
                                    id={`size-${index}`}
                                    name="size"
                                    value={size._id}
                                    onChange={handleSizeChange}
                                    style={checkboxInputStyle}
                                />
                                <label htmlFor={`size-${index}`} style={labelStyle}>{size.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="filter-box" style={filterBoxStyle}>
                    <h4 style={headingStyle}>Color</h4>
                    <div className="check-box attribute-length" style={checkboxContainerStyle}>
                        {filterOptions.colors.map((color, index) => (
                            <div key={index} style={checkboxWrapperStyle}>
                                <input
                                    type="checkbox"
                                    id={`color-${index}`}
                                    name="color"
                                    value={color._id}
                                    onChange={handleColorChange}
                                    style={checkboxInputStyle}
                                />
                                <label htmlFor={`color-${index}`} style={labelStyle}>{color.name}</label>
                            </div>
                        ))}
                    </div>
                </div>
                <button type="submit" id="searchFormSubmit" className="btn-custom w-100" style={orangeSubmitButtonStyle}>
                    Submit
                </button>
            </form>
        </div>
    );
}

// Style definitions
const filterAreaStyle = {
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    marginBottom: '20px',
    maxWidth: '300px', // Ensure sidebar is not too wide
    marginLeft: 'auto',
    marginRight: 'auto',
};

const filterBoxStyle = {
    marginBottom: '20px',
};

const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    borderLeft: '3px solid #E20613',
    paddingLeft: '10px',
    color: '#333',
    textAlign: 'left', // Align heading text to the left
};

const linksStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    margin: '0',
};

const listItemStyle = {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '10px',
};

const radioInputStyle = {
    marginRight: '10px',
};

const checkboxInputStyle = {
    marginRight: '10px',
};

const checkboxWrapperStyle = {
    marginBottom: '8px',
    display: 'flex',
    alignItems: 'center',
};

const checkboxContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
};

const labelStyle = {
    marginLeft: '8px',
    fontSize: '16px',
    textAlign: 'left', // Align label text to the left
};

const orangeSubmitButtonStyle = {
    backgroundColor: '#E20613',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
};
