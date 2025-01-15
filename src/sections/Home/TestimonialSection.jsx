import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function TestimonialSection() {
  const testimonials = [
    {
      _id: "66d2b97cfd718f8a89ec530c",
      name: "DHA Quetta",
      role: "Business Analyst",
      message:
        "An exceptional team that truly grasps the requirements of their clients. Their quality of work is unmatched, and the collaboration process was smooth from start to finish. Communication was clear and timely, making the project an absolute success. Highly recommend their services to anyone seeking professionalism and excellence!",
      imageUrl:
        "https://content-cdn.zameen.com/IMG_20191213_132203_a32c2183e6.jpg",
      createdAt: "2024-08-31T06:34:36.827Z",
      __v: 0,
    },
    {
      _id: "66d2b97cfd718f8a89ec530c",
      name: "DHA Islamabad",
      role: "Project Manager",
      message:
        "Outstanding service that delivers beyond expectations. They deeply understand the needs of developers and provide exceptional results. The team's seamless communication and proactive approach ensured a hassle-free experience. I highly recommend them for anyone looking for top-quality work and reliable collaboration!",
      imageUrl: "https://content-cdn.zameen.com/DHA_Islamabad_3edf0d2161.jpg",
      createdAt: "2024-08-31T06:34:36.827Z",
      __v: 0,
    },

    {
      _id: "66d2b97cfd718f8a89ec530c",
      name: "Alice Johnson",
      role: "Marketing Specialist",
      message:
        "Working with this team was a great experience. Their expertise and professionalism helped us achieve our goals efficiently. The team brought creative ideas and a professional approach that significantly improved our marketing campaigns.",
      imageUrl:
        "https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg?auto=compress&cs=tinysrgb&w=600",
      createdAt: "2024-08-31T06:34:36.827Z",
      __v: 0,
    },
    {
      _id: "66d2b9defd718f8a89ec530e",
      name: "David Smith",
      role: "Software Developer",
      message:
        "A fantastic service that understands the needs of developers. I highly recommend them to anyone looking for quality work. Great collaboration and seamless communication throughout the project. Highly recommended!",
      imageUrl:
        "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2024-08-31T06:36:14.435Z",
      __v: 0,
    },
    {
      _id: "66d2bab8fd718f8a89ec5310",
      name: "Emma Williams",
      role: "Graphic Designer",
      message:
        "The creativity and dedication of this team are unmatched. I was thrilled with the final design, which exceeded all my expectations. Their design work exceeded my expectations, delivering outstanding visuals that perfectly matched my vision.",
      imageUrl:
        "https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&cs=tinysrgb&w=600",
      createdAt: "2024-08-31T06:39:52.688Z",
      __v: 0,
    },
    {
      _id: "66d2bb29fd718f8a89ec5312",
      name: "John Doe",
      role: "Project Manager",
      message:
        "Their attention to detail and project management skills ensured that everything was delivered on time and within budget. Exceptional project management, with everything delivered on time and within scope.",
      imageUrl:
        "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2024-08-31T06:41:45.543Z",
      __v: 0,
    },
    {
      _id: "66d2bb76fd718f8a89ec5314",
      name: "Sophia Brown",
      role: "Content Writer",
      message:
        "I enjoyed collaborating with the team. They respected my creative ideas and provided valuable feedback to enhance the final product. A wonderful team to work with! They valued my input and helped refine my ideas into great content.",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1682093352365-68d992a43388?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      createdAt: "2024-08-31T06:43:02.806Z",
      __v: 0,
    },
  ];

  return (
    <section
      className="testimonial-section"
      style={{ backgroundColor: "#F4F4F4", padding: "60px 0" }}
    >
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="header-text text-center mx-auto">
              <h5>Testimonials</h5>
              <h2>What clients say about us</h2>
            </div>
          </div>
        </div>
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          nav
          items={1} // Shows one item at a time
          autoplay
          autoplayTimeout={5000}
          smartSpeed={1000}
          dots={true}
        >
          {testimonials.map((testimonial) => (
            <div
              className="review-box"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
              key={testimonial._id} // Use testimonial ID as key
            >
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="img-box" style={{ height: "500px" }}>
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="rounded"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="review">
                    <i className="fas fa-quote-left fa-3x base-color margin-bottom-30" />
                    <p>{testimonial.message}</p>
                    <div className="d-block text-end">
                      <i className="fas fa-quote-right fa-3x base-color" />
                    </div>
                    <div className="d-block">
                      <h3>{testimonial.name}</h3>
                      <h5 className="title">{testimonial.role}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
