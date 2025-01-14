import React, { useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import ServiceCard from '../../components/ServiceCard';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const options = {
    margin: 0,
    nav: true,
    navText: ["<", ">"],
    dots: false,
    responsive: {
        0: {
            items: 1, // Show 1 item at a time on very small screens
        },
        600: {
            items: 2, // Show 2 items at a time on small screens
        },
        1000: {
            items: 3, // Show 3 items at a time on large screens
        },
    },
    autoplay: false,
    autoplayHoverPause: true,
    loop: true,
};

const staticServices = [
    {
        "_id": "66cc59a8ab122b1a0184964d",
        "serviceName": "Interior Design",
        "slug": "interior-design",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "image": "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://media.istockphoto.com/id/1464671804/vector/cozy-sofa-and-floor-lamp-living-room-furniture-interior-design-pixel-perfect-editable-stroke.jpg?s=612x612&w=0&k=20&c=fX93V2LJTRWxUJ6NCSr99xIATFfez_pJTepThhj2NgA=",
    },
    {
        "_id": "66cc5bddab122b1a0184964f",
        "serviceName": "Architecture Design",
        "slug": "architecture-design",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "image": "https://images.unsplash.com/photo-1658327954676-227ee3f0d9cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/8654/8654568.png",
    },
    {
        "_id": "66cc5e11ab122b1a01849651",
        "serviceName": "Flooring & Roofing",
        "slug": "flooring-and-roofing",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
        "image": "https://images.unsplash.com/photo-1560348909-11d792e4c51e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://png.pngtree.com/png-vector/20220627/ourmid/pngtree-simple-roof-icon-design-png-image_5464037.png",
    },
    {
        "_id": "66d555f21b636b71f99ea97a",
        "serviceName": "Building Renovation",
        "slug": "building-renovation",
        "description": "Building renovations can include the installation, repair or replacement of Building Systems.",
        "image": "https://images.unsplash.com/photo-1602517566318-a6e07d434f7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWvE2dSqR4G1iAw1XPJDeHs2_eG9tux0nMA&s",
    },
    {
        "_id": "66d556cd1b636b71f99ea97e",
        "serviceName": "Building Construction",
        "slug": "building-construction",
        "description": "Building construction is the process of adding structure to real property via various techniques.",
        "image": "https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-buildingcityconstruction-abstract-flat-color-icon-template-png-image_1488993.jpg",
    },
];

export default function ServicesSection() {
    useEffect(() => {
        const navButtons = document.querySelectorAll('.owl-nav button');
        navButtons.forEach(button => button.classList.remove('disabled'));
    }, []);

    return (
        <section className="services-section py-16 bg-gray-100">
            <div className="container mx-auto">
                <div className="text-center mx-auto mb-10">
                    <h5 className="text-orange-500 text-sm uppercase mb-2">Our Services</h5>
                    <h2 className="text-gray-800 text-4xl font-bold">We Work With You To Achieve Your Goal</h2>
                </div>
                <OwlCarousel className="services owl-carousel owl-theme" {...options}>
                    {staticServices.map((service) => (
                        <ServiceCard key={service._id} service={service} />
                    ))}
                </OwlCarousel>
                <style>{`
                    .services-section .owl-nav {
                        display: flex !important;
                        justify-content: center !important;
                        margin-top: 20px;
                    }

                    .services-section .owl-nav button {
                        background: transparent;
                        border: 2px solid #ff6a28;
                        padding: 5px;
                        color: #ff6a28;
                        font-size: 20px;
                        border-radius: 8px;
                        cursor: pointer;
                        transition: background-color 0.3s, color 0.3s;
                        width: 40px;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin: 0 10px;
                    }

                    .services-section .owl-nav button:hover {
                        background-color: #ff6a28;
                        color: #fff;
                    }
                `}</style>
            </div>
        </section>
    );
}
