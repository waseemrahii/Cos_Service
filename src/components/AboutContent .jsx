import React from "react";

export default function AboutContent({ title, description, image }) {
  return (
    <section
      className="about-section"
      style={{
        padding: "60px 0",
        backgroundColor: "#F4F4F4",
      }}
    >
      <div className="">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div
              className="img-box"
              data-aos="fade-right"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
              style={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "500px", // Adjusted height for a better fit
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Optional: add shadow for better visual depth
              }}
            >
              <img
                src={image}
                alt={title}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div
              className="text-box"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
              style={{ paddingLeft: "20px" }}
            >
              <h5>About Us</h5>
              <h2 className="mb-4">{title}</h2>
              <p className="lead" style={{ textAlign: "justify" }}>
                {description}
              </p>
              <button
                className="btn-custom"
                style={{ marginTop: "20px", padding: "10px 20px" }}
              >
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
