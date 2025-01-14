import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import ServiceCard from '../components/ServiceCard';
import '../App.css'; // Ensure your CSS includes styles for grid layout

const staticServices = [
    {
        "_id": "66cc59a8ab122b1a0184964d",
        "serviceName": "Interior Design",
        "slug": "interior-design",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        "image": "https://plus.unsplash.com/premium_photo-1676968002767-1f6a09891350?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://media.istockphoto.com/id/1464671804/vector/cozy-sofa-and-floor-lamp-living-room-furniture-interior-design-pixel-perfect-editable-stroke.jpg?s=612x612&w=0&k=20&c=fX93V2LJTRWxUJ6NCSr99xIATFfez_pJTepThhj2NgA=",
        "categoryId": {
            "categoryName": "Interior Design"
        },
        "createdAt": "2024-08-26T10:32:08.628Z",
        "updatedAt": "2024-09-02T05:53:44.415Z",
        "__v": 0
    },
    {
        "_id": "66cc5bddab122b1a0184964f",
        "serviceName": "Architecture Design",
        "slug": "architecture-design",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        "image": "https://images.unsplash.com/photo-1658327954676-227ee3f0d9cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://cdn-icons-png.flaticon.com/512/8654/8654568.png",
        "categoryId": {
            "categoryName": "Architecture Design"
        },
        "createdAt": "2024-08-26T10:41:33.308Z",
        "updatedAt": "2024-09-02T05:57:08.335Z",
        "__v": 0
    },
    {
        "_id": "66cc5e11ab122b1a01849651",
        "serviceName": "Flooring & Roofing",
        "slug": "flooring-and-roofing",
        "description": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
        "image": "https://images.unsplash.com/photo-1560348909-11d792e4c51e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://png.pngtree.com/png-vector/20220627/ourmid/pngtree-simple-roof-icon-design-png-image_5464037.png",
        "categoryId": {
            "categoryName": "Flooring & Roofing"
        },
        "createdAt": "2024-08-26T10:50:57.726Z",
        "updatedAt": "2024-09-02T06:00:14.863Z",
        "__v": 0
    },
    {
        "_id": "66d555f21b636b71f99ea97a",
        "serviceName": "Building Renovation",
        "slug": "building-renovation",
        "description": "Building renovations can include the installation, repair or replacement of Building Systems, devices, equipment and materials or parts for the purpose of regular building maintenance.",
        "image": "https://images.unsplash.com/photo-1602517566318-a6e07d434f7b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgWvE2dSqR4G1iAw1XPJDeHs2_eG9tux0nMA&s",
        "categoryId": {
            "categoryName": "Building Renovation"
        },
        "createdAt": "2024-09-02T06:06:42.341Z",
        "updatedAt": "2024-09-02T06:06:42.341Z",
        "__v": 0
    },
    {
        "_id": "66d556cd1b636b71f99ea97e",
        "serviceName": "Building Construction",
        "slug": "building-construction",
        "description": "Building construction is the process of adding structure to real property via various techniques. The vast majority of building construction projects are small renovations, such as the addition of a room, or renovation of a bathroom.",
        "image": "https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "iconImage": "https://png.pngtree.com/png-vector/20190618/ourlarge/pngtree-buildingcityconstruction-abstract-flat-color-icon-template-png-image_1488993.jpg",
        "categoryId": {
            "categoryName": "Building Construction"
        },
        "createdAt": "2024-09-02T06:10:21.792Z",
        "updatedAt": "2024-09-02T06:10:21.792Z",
        "__v": 0
    }
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