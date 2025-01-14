import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import TeamCard from '../../components/TeamCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function TeamSection() {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            once: true, // Animation only happens once
            offset: 200, // Offset from the element
        });
    }, []);

    // Hardcoded team members with images
    const teamMembers = [
        {
            _id: '1',
            images: 'https://static.vecteezy.com/system/resources/previews/003/492/119/non_2x/woman-working-on-laptop-in-the-office-looking-at-the-screen-and-typing-image-free-photo.jpg',
            name: 'Jane Smith',
            designation: 'CTO',
            facebook: 'https://facebook.com/janesmith',
            twitter: 'https://twitter.com/janesmith',
            linkedin: 'https://linkedin.com/in/janesmith'
        },
     
        {
            _id: '2',
            images: 'https://images.unsplash.com/photo-1509960645955-d9d4a2fe08f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Jane Smith',
            designation: 'CTO',
            facebook: 'https://facebook.com/janesmith',
            twitter: 'https://twitter.com/janesmith',
            linkedin: 'https://linkedin.com/in/janesmith'
        },
        {
            _id: '3',
            images: 'https://images.unsplash.com/photo-1543060829-a0029874b174?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Michael Brown',
            designation: 'COO',
            facebook: 'https://facebook.com/michaelbrown',
            twitter: 'https://twitter.com/michaelbrown',
            linkedin: 'https://linkedin.com/in/michaelbrown'
        }
    ];

    // Use slice to display only the first 3 team members
    const displayedMembers = teamMembers.slice(0, 3);

    // Slick carousel settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        variableWidth: false, // Keep slides of consistent width
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className="team-section">
            <div className="container" data-aos="fade-up"> {/* Add AOS attribute to the container */}
                <div className="row">
                    <div className="col-12">
                        <div className="header-text text-center mx-auto">
                            <h5>Our Team</h5>
                            <h2>Meet our expert executive team</h2>
                        </div>
                    </div>
                </div>
                <Slider {...settings}>
                    {displayedMembers.map((member) => (
                        <div key={member._id} className="px-2"> {/* Use padding for proper spacing */}
                            <div className="col"> {/* Retain grid layout with col classes */}
                                <div data-aos="fade-up"> {/* Apply AOS for each card */}
                                    <TeamCard
                                        id={member._id}
                                        image={member.images}
                                        name={member.name}
                                        designation={member.designation}
                                        socialLinks={{
                                            facebook: member.facebook || '#',
                                            twitter: member.twitter || '#',
                                            linkedin: member.linkedin || '#',
                                        }}
                                        onClick={() => console.log(`Clicked on ${member.name}`)}
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

// Define PropTypes to validate the data structure
TeamSection.propTypes = {
    teamMembers: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            images: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            designation: PropTypes.string.isRequired,
            facebook: PropTypes.string,
            twitter: PropTypes.string,
            linkedin: PropTypes.string,
        })
    ).isRequired,
};
