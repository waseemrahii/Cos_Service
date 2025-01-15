import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import '../App.css'; // Ensure your CSS includes styles for grid layout

const staticServices = [
    {
      _id: "66cc59a8ab122b1a0184964d",
      serviceName: "Interior Design",
      slug: "interior-design",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
      image:
        "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconImage:
        "https://media.istockphoto.com/id/1464671804/vector/cozy-sofa-and-floor-lamp-living-room-furniture-interior-design-pixel-perfect-editable-stroke.jpg?s=612x612&w=0&k=20&c=fX93V2LJTRWxUJ6NCSr99xIATFfez_pJTepThhj2NgA=",
      categoryId: {
        categoryName: "Interior Design",
      },
    },
    {
      _id: "66cc5bddab122b1a0184964f",
      serviceName: "Architecture Design",
      slug: "architecture-design",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
      image:
        "https://images.unsplash.com/photo-1658327954676-227ee3f0d9cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconImage: "https://cdn-icons-png.flaticon.com/512/8654/8654568.png",
      categoryId: {
        categoryName: "Architecture Design",
      },
    },
    {
      _id: "66cc5e11ab122b1a01849651",
      serviceName: "Flooring & Roofing",
      slug: "flooring-and-roofing",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...",
      image:
        "https://images.unsplash.com/photo-1560348909-11d792e4c51e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconImage:
        "https://png.pngtree.com/png-vector/20220627/ourmid/pngtree-simple-roof-icon-design-png-image_5464037.png",
      categoryId: {
        categoryName: "Flooring & Roofing",
      },
    },
    {
      _id: "66d555f21b636b71f99ea97a",
      serviceName: "Building Renovation",
      slug: "building-renovation",
      description:
        "Building renovations can include the installation, repair or replacement of Building Systems, devices...",
      image:
        "https://images.unsplash.com/photo-1602517566318-a6e07d434f7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWvE2dSqR4G1iAw1XPJDeHs2_eG9tux0nMA&s",
      categoryId: {
        categoryName: "Building Renovation",
      },
    },
    {
      _id: "66d556cd1b636b71f99ea97e",
      serviceName: "Building Construction",
      slug: "building-construction",
      description:
        "Building construction is the process of adding structure to real property via various techniques...",
      image:
        "https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      iconImage:
        "https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-buildingcityconstruction-abstract-flat-color-icon-template-png-image_1488993.jpg",
      categoryId: {
        categoryName: "Building Construction",
      },
    },
    {
        _id: "66d56d351b636b71f99ea982",
        "serviceName": "Construction",
        "slug": "construction",
        "description": "Comprehensive construction services, including planning, execution, and maintenance for various projects.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161fd9600?crop=entropy&q=80&w=1374&h=800&fit=crop",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/3104/3104828.png",
        "categoryId": { "categoryName": "Construction" },
        "createdAt": "2024-09-02T06:20:21.792Z",
        "updatedAt": "2024-09-02T06:20:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56d721b636b71f99ea983",
        "serviceName": "Real Estate",
        "slug": "real-estate",
        "description": "Expert real estate solutions for residential, commercial, and industrial properties.",
        "image": "https://images.unsplash.com/photo-1600585154340-be6161fd9600?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/847/847969.png",
        "categoryId": { "categoryName": "Real Estate" },
        "createdAt": "2024-09-02T06:25:21.792Z",
        "updatedAt": "2024-09-02T06:25:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56da21b636b71f99ea984",
        "serviceName": "Project Management Services",
        "slug": "project-management-services",
        "description": "Efficient project management solutions tailored to your construction needs.",
        "image": "https://images.unsplash.com/photo-1506765515384-028b60a970df?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/4470/4470745.png",
        "categoryId": { "categoryName": "Project Management Services" },
        "createdAt": "2024-09-02T06:30:21.792Z",
        "updatedAt": "2024-09-02T06:30:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56dd21b636b71f99ea985",
        "serviceName": "Commercial & Residential Construction",
        "slug": "commercial-residential-construction",
        "description": "Top-notch construction services for commercial and residential properties.",
        "image": "https://images.unsplash.com/photo-1591183694655-21e6af4e899a?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/3076/3076627.png",
        "categoryId": { "categoryName": "Commercial & Residential Construction" },
        "createdAt": "2024-09-02T06:35:21.792Z",
        "updatedAt": "2024-09-02T06:35:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56e021b636b71f99ea986",
        "serviceName": "Engineering Services",
        "slug": "engineering-services",
        "description": "Professional engineering services for structural, mechanical, and electrical systems.",
        "image": "https://images.unsplash.com/photo-1517080598410-1baabafd6e09?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/1246/1246271.png",
        "categoryId": { "categoryName": "Engineering Services" },
        "createdAt": "2024-09-02T06:40:21.792Z",
        "updatedAt": "2024-09-02T06:40:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56e321b636b71f99ea987",
        "serviceName": "Procurement Services",
        "slug": "procurement-services",
        "description": "Efficient procurement solutions for sourcing construction materials and equipment.",
        "image": "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/3084/3084603.png",
        "categoryId": { "categoryName": "Procurement Services" },
        "createdAt": "2024-09-02T06:45:21.792Z",
        "updatedAt": "2024-09-02T06:45:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56e621b636b71f99ea988",
        "serviceName": "Civil Construction Services",
        "slug": "civil-construction-services",
        "description": "Reliable civil construction services for infrastructure development, roads, bridges, and more.",
        "image": "https://images.unsplash.com/photo-1563201108-11a25cbe7634?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/4071/4071124.png",
        "categoryId": { "categoryName": "Civil Construction Services" },
        "createdAt": "2024-09-02T06:50:21.792Z",
        "updatedAt": "2024-09-02T06:50:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56e921b636b71f99ea989",
        "serviceName": "Mechanical Fabrication Services",
        "slug": "mechanical-fabrication-services",
        "description": "Specialized mechanical fabrication services for construction and industrial projects.",
        "image": "https://images.unsplash.com/photo-1516015670159-d717d9974707?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/1736/1736762.png",
        "categoryId": { "categoryName": "Mechanical Fabrication Services" },
        "createdAt": "2024-09-02T06:55:21.792Z",
        "updatedAt": "2024-09-02T06:55:21.792Z",
        "__v": 0
      },
      {
        "_id": "66d56f021b636b71f99ea990",
        "serviceName": "Mechanical Erection Services",
        "slug": "mechanical-erection-services",
        "description": "Professional mechanical erection services for industrial and commercial projects.",
        "image": "https://images.unsplash.com/photo-1517185204-d6c0f12d3881?crop=entropy&q=80&w=1470",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/1280/1280844.png",
        "categoryId": { "categoryName": "Mechanical Erection Services" },
        "createdAt": "2024-09-02T07:00:21.792Z",
        "updatedAt": "2024-09-02T07:00:21.792Z",
        "__v": 0
      },
  ];

export default function Services() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Instead of fetching data, set static data
        try {
            setServices(staticServices);
        } catch (error) {
            setError('Error setting services');
            console.error('Error setting services:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <Banner />
            <section className="services-section">
                <div className="container">
                    <div className="services-grid">
                        {services.length > 0 ? (
                            services.map((service) => (
                                <ServiceCard key={service._id} service={service} />
                            ))
                        ) : (
                            <p>No services available at the moment.</p>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}