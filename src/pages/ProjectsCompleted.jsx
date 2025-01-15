// import React, { useState } from "react";

// export default function ProjectsCompleted({ sidebarLinks, projectImages }) {
//   const [selectedCategory, setSelectedCategory] = useState("all");

//   const handleLinkClick = (categoryId) => {
//     setSelectedCategory(categoryId);
//   };

//   const filteredImages =
//     selectedCategory === "all"
//       ? projectImages
//       : projectImages.filter((image) => image.id === selectedCategory);

//   // Inline styles for the layout
//   const containerStyle = {
//     display: "flex",
//     padding: "20px",
//     gap: "40px",
//     backgroundColor: "#f9f9f9",
//     flexWrap: "wrap", // Ensures flex children wrap properly
//   };

//   const sidebarStyle = {
//     width: "20%",
//     padding: "10px 0",
//   };

//   const sidebarLinkStyle = {
//     textDecoration: "none",
//     color: "#333",
//     fontWeight: "600",
//     display: "block",
//     padding: "5px 10px",
//     transition: "color 0.3s ease, backgroundColor 0.3s ease",
//     cursor: "pointer",
//   };

//   const activeLinkStyle = {
//     color: "#E20613",
//   };

//   const portfolioImagesStyle = {
//     display: "grid",
//     gridTemplateColumns:
//       selectedCategory === "all"
//         ? "repeat(auto-fit, minmax(250px, 1fr))" // Grid view for all images
//         : "1fr", // Full-width layout when a specific category is selected
//     gap: "20px",
//     width: "75%",
//   };

//   const portfolioItemStyle = {
//     borderRadius: "8px",
//     overflow: "hidden",
//     transition: "transform 0.3s, boxShadow 0.3s",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", // Add some shadow for aesthetics
//     width: "100%", // Ensures the item takes the full width of the grid cell
//     height: selectedCategory === "all" ? "200px" : "auto", // Fixed height for grid view, auto for full size
//   };

//   const imageStyle = {
//     width: "100%",
//     height: "100%",
//     display: "block",
//     objectFit: selectedCategory === "all" ? "cover" : "contain", // Cover for grid, contain for full size
//   };

//   return (
//     <div style={containerStyle}>
//       <aside style={sidebarStyle}>
//         <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
//           {sidebarLinks.map((link) => (
//             <li key={link.id} style={{ margin: "8px 0" }}>
//               <a
//                 href="#"
//                 onClick={(e) => {
//                   e.preventDefault();
//                   handleLinkClick(link.id);
//                 }}
//                 style={{
//                   ...sidebarLinkStyle,
//                   ...(selectedCategory === link.id ? activeLinkStyle : {}),
//                 }}
//               >
//                 {link.text}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </aside>
//       <section style={portfolioImagesStyle}>
//         {filteredImages.map((image) => (
//           <div
//             key={image.image}
//             style={portfolioItemStyle}

//           >
//             <img
//               src={image.image}
//               alt={`Portfolio ${image.id}`}
//               style={imageStyle}
//             />
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }
import React, { useState } from "react";

export default function ProjectsCompleted({ sidebarLinks, projectImages }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleLinkClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const filteredImages =
    selectedCategory === "all"
      ? projectImages
      : projectImages.filter((category) => category.id === selectedCategory);

  const containerStyle = {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px",
    gap: "20px",
    backgroundColor: "#f9f9f9",
    flexWrap: "nowrap",
  };

  const sidebarStyle = {
    flex: "0 0 200px",
    padding: "10px 0",
  };

  const sidebarLinkStyle = {
    textDecoration: "none",
    color: "#333",
    fontWeight: "600",
    display: "block",
    padding: "5px 10px",
    transition: "color 0.3s ease, backgroundColor 0.3s ease",
    cursor: "pointer",
  };

  const activeLinkStyle = {
    color: "#E20613",
    fontWeight: "bold",
    backgroundColor: "#f0f0f0",
    borderRadius: "5px",
  };

  const portfolioImagesStyle = {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center",
  };

  const portfolioItemStyle = {
    position: "relative",
    width: "100%",
    aspectRatio: "16/9",
    borderRadius: "8px",
    overflow: "hidden",
    transition: "transform 0.3s, boxShadow 0.3s",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#fff",
  };

  const imageStyle = {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  };

  const fallbackStyle = {
    textAlign: "center",
    color: "#666",
    fontStyle: "italic",
    marginTop: "20px",
  };

  return (
    <div style={containerStyle}>
      <aside style={sidebarStyle}>
        <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
          {sidebarLinks.map((link) => (
            <li key={link.id} style={{ margin: "8px 0" }}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
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
        {filteredImages.length > 0 ? (
          filteredImages.map((imageData, index) => {
            if (imageData.images) {
              // If the category has multiple images
              return imageData.images.map((image, subIndex) => (
                <div key={`${index}-${subIndex}`} style={portfolioItemStyle}>
                  <img
                    src={image}
                    alt={`${imageData.id} ${subIndex}`}
                    style={imageStyle}
                  />
                </div>
              ));
            }
            // If the category has a single image
            return (
              <div key={index} style={portfolioItemStyle}>
                <img
                  src={imageData.image}
                  alt={`${imageData.id} ${index}`}
                  style={imageStyle}
                />
              </div>
            );
          })
        ) : (
          <p style={fallbackStyle}>No projects available in this category.</p>
        )}
      </section>
    </div>
  );
}
