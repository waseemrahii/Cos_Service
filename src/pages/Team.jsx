import React, { useState } from 'react';
import Banner from '../components/Banner';
import TeamCard from '../components/TeamCard';

// Static data for the team
const teamData = [
    {
        "_id": "66c9bb5ac764cfd849398fbf",
        "name": "Matthew Miles",
        "designation": "Managing Director",
        "images": "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "expertise": "Planning",
        "experience": "14+ Years",
        "description": "Parker states that there are four different types of team players: The Contributor, The Collaborator, The Communicator and The Challenger. The characteristics of each team player have been highlighted below.",
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
    },
    {
        "_id": "66c9bb6dc764cfd849398fc1",
        "name": "Nolan Owen",
        "designation": "Managing Director",
        "images": "https://images.unsplash.com/photo-1529421308418-eab98863cee4?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "expertise": "Planning, Strategy",
        "experience": "14+ Years",
        "description": "A team member is an employee who works in a group or team, like those who work in restaurants, retail, and hospitality. Team members may work in guest services, with food, or with customers.",
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
    },
    {
        "_id": "66cb5aab38057bdf4eec3492",
        "name": "Henry Jhon",
        "designation": "General Director",
        "images": "https://images.unsplash.com/photo-1556817977-00e61f659427?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "expertise": "Planning, Strategy",
        "experience": "14+ Years",
        "description": "It is ambiguous compared to other languages that would pluralize team in that case. If you need to specify that the members don't belong to the same team, you might say one of the following the teams' members the members of the teams",
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
    },
    {
        "_id": "66cb5b3538057bdf4eec3494",
        "name": "Kane Jonas",
        "designation": "Business Manager",
        "images": "https://images.unsplash.com/photo-1543060829-a0029874b174?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "expertise": "Planning",
        "experience": "14+ Years",
        "description": "It is ambiguous compared to other languages that would pluralize team in that case. If you need to specify that the members don't belong to the same team, you might say one of the following the teams' members the members of the teams",
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
    },
    {
        "_id": "66cb5c0738057bdf4eec3498",
        "name": "Jack Doe",
        "designation": "Business Manager",
        "images": "https://images.unsplash.com/photo-1509960645955-d9d4a2fe08f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "expertise": "Planning",
        "experience": "14+ Years",
        "description": "It is ambiguous compared to other languages that would pluralize team in that case. If you need to specify that the members don't belong to the same team, you might say one of the following the teams' members the members of the teams",
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
    },
    {
        "_id": "66cb5e4038057bdf4eec349a",
        "name": "Troye Sivan",
        "designation": "Managing Director",
        "images": "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "expertise": "Planning",
        "experience": "14+ Years",
        "description": "It is ambiguous compared to other languages that would pluralize team in that case. If you need to specify that the members don't belong to the same team, you might say one of the following the teams' members the members of the teams",
        "facebook": "#",
        "twitter": "#",
        "linkedin": "#"
    }
];

export default function Team() {
    const [teamMember, setTeamMember] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCardClick = (member) => {
        setTeamMember(member);
        console.log('Team member selected:', member);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Banner />
            <div className="container">
                <h2 style={{ textAlign: 'left' }} className="mb-4">Meet our expert executive team</h2>
                <h5 style={{ textAlign: 'left' }}>We help customers build world-class construction projects since 2001</h5>
                <p style={{ textAlign: 'left' }}>The Cosmic Construction team is a group of dedicated professionals committed to excellence in every project. With a blend of experience and innovative thinking, they turn visions into reality, building structures that inspire and endure.</p>

                {/* Render team cards */}
                <div className="row g-4">
                    {teamData.map((team) => (
                        <div className="col-lg-4 col-md-6" key={team._id}>
                            <TeamCard
                                id={team._id}
                                image={team.images} // Use 'images' field
                                name={team.name}
                                designation={team.designation}
                                socialLinks={{
                                    facebook: team.facebook || '#',
                                    twitter: team.twitter || '#',
                                    linkedin: team.linkedin || '#',
                                }}
                                onClick={() => handleCardClick(team)} // Click handler to show modal
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for individual team member details */}
            <div className="modal fade" id="memberDetailsModal" tabIndex={-1} aria-labelledby="memberDetailsModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {teamMember && (
                                <div className="row g-4 align-items-start">
                                    <div className="col-lg-5 d-flex justify-content-center align-items-center">
                                        <img
                                            src={teamMember.images} // Use 'images' field
                                            alt={teamMember.name}
                                            className="img-fluid rounded member_image"
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '400px',
                                                objectFit: 'cover',
                                            }}
                                        />
                                    </div>
                                    <div className="col-lg-7">
                                        <h4>{teamMember.name}</h4>
                                        <h5>{teamMember.designation}</h5>
                                        <p>{teamMember.expertise}</p>
                                        <p><strong>Experience:</strong> {teamMember.experience}</p>
                                        <p>{teamMember.description}</p>
                                        <div className="social-links">
                                            {teamMember.facebook && <a href={teamMember.facebook} target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a>}
                                            {teamMember.twitter && <a href={teamMember.twitter} target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>}
                                            {teamMember.linkedin && <a href={teamMember.linkedin} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
