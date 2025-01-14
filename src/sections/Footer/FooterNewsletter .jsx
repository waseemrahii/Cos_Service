import React from "react";

export default function FooterNewsletter({
  heading,
  description,
  placeholder,
  buttonText,
}) {
  return (
    <div className="footer-box text-center text-md-start">
      <h4>{heading}</h4>
      <p>{description}</p>
      <div className="news-letter">
        <input
          type="hidden"
          name="_token"
          value="Z6rUwrkJoTHF7VLq3yIKiw7L28wo9zyTnmj6me3H"
        />
        <input
          type="email"
          name="email"
          placeholder={placeholder}
          style={{
            width: "95%",
            padding: "8px",
            margin: "5px 0",
            borderRadius: "4px",
            color:"white !important"
          }}
          className="form-control custom-email"
        />
        <button
          className="btn-custom mt-3"
          type="submit"
          style={{
            width: "95%",
            padding: "8px",
            margin: "5px 0",
            borderRadius: "4px",
            backgroundColor: "#e20613",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}
