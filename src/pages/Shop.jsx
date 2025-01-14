import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner';
import ProductList from '../sections/Shop/ProductList';
import TopSearch from '../sections/Shop/TopSearch ';
import FilterArea from '../sections/Shop/FilterArea';
import '../App.css';

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        categories: [],
        sizes: [],
        colors: []
    });
    const [loading, setLoading] = useState(true);

    // Static data
    const staticData = {
        products: [
            {
                "_id": "66c77d15967548a338abf0e6",
                "productName": "Hacksaw",
                "slug": "hacksaw",
                "price": 120,
                "thumbnail": "https://images.unsplash.com/photo-1622768503544-c2880f70f89c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                "description": "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal.Most hacksaws are hand saws with a C-shaped walking frame that holds a blade under tension. Such hacksaws have a handle, usually a pistol grip, with pins for attaching a narrow disposable blade. The frames may also be adjustable to accommodate blades of different sizes.",
                "isAvailable": "Yes",
                "sku": "E128564",
                "reviews": [],
                "New": "Yes",
                "categoryId": {
                    "_id": "66c6eca0f998f342e949ea5f",
                    "categoryName": "Building & Construction"
                },
                "colorId": {
                    "_id": "66c6e5fa04dc98c53d961a7c",
                    "colorName": "Red"
                },
                "attributesId": null,
                "createdAt": "2024-08-22T18:01:57.254Z",
                "updatedAt": "2024-09-01T15:58:16.035Z",
                "__v": 0
            },
            {
                "_id": "66c77d15967548a338abf0e6",
                "productName": "Hacksaw",
                "slug": "hacksaw",
                "price": 120,
                "thumbnail": "https://images.unsplash.com/photo-1622768503544-c2880f70f89c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                "description": "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal.Most hacksaws are hand saws with a C-shaped walking frame that holds a blade under tension. Such hacksaws have a handle, usually a pistol grip, with pins for attaching a narrow disposable blade. The frames may also be adjustable to accommodate blades of different sizes.",
                "isAvailable": "Yes",
                "sku": "E128564",
                "reviews": [],
                "New": "Yes",
                "categoryId": {
                    "_id": "66c6eca0f998f342e949ea5f",
                    "categoryName": "Building & Construction"
                },
                "colorId": {
                    "_id": "66c6e5fa04dc98c53d961a7c",
                    "colorName": "Red"
                },
                "attributesId": null,
                "createdAt": "2024-08-22T18:01:57.254Z",
                "updatedAt": "2024-09-01T15:58:16.035Z",
                "__v": 0
            },
            {
                "_id": "66c77d15967548a338abf0e6",
                "productName": "Hacksaw",
                "slug": "hacksaw",
                "price": 120,
                "thumbnail": "https://images.unsplash.com/photo-1622768503544-c2880f70f89c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                "description": "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal.Most hacksaws are hand saws with a C-shaped walking frame that holds a blade under tension. Such hacksaws have a handle, usually a pistol grip, with pins for attaching a narrow disposable blade. The frames may also be adjustable to accommodate blades of different sizes.",
                "isAvailable": "Yes",
                "sku": "E128564",
                "reviews": [],
                "New": "Yes",
                "categoryId": {
                    "_id": "66c6eca0f998f342e949ea5f",
                    "categoryName": "Building & Construction"
                },
                "colorId": {
                    "_id": "66c6e5fa04dc98c53d961a7c",
                    "colorName": "Red"
                },
                "attributesId": null,
                "createdAt": "2024-08-22T18:01:57.254Z",
                "updatedAt": "2024-09-01T15:58:16.035Z",
                "__v": 0
            },
            {
                "_id": "66c77d15967548a338abf0e6",
                "productName": "Hacksaw",
                "slug": "hacksaw",
                "price": 120,
                "thumbnail": "https://plus.unsplash.com/premium_photo-1721460167399-3fc0f325156f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                "description": "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal.Most hacksaws are hand saws with a C-shaped walking frame that holds a blade under tension. Such hacksaws have a handle, usually a pistol grip, with pins for attaching a narrow disposable blade. The frames may also be adjustable to accommodate blades of different sizes.",
                "isAvailable": "Yes",
                "sku": "E128564",
                "reviews": [],
                "New": "Yes",
                "categoryId": {
                    "_id": "66c6eca0f998f342e949ea5f",
                    "categoryName": "Building & Construction"
                },
                "colorId": {
                    "_id": "66c6e5fa04dc98c53d961a7c",
                    "colorName": "Red"
                },
                "attributesId": null,
                "createdAt": "2024-08-22T18:01:57.254Z",
                "updatedAt": "2024-09-01T15:58:16.035Z",
                "__v": 0
            },
            {
                "_id": "66c77d15967548a338abf0e6",
                "productName": "Hacksaw",
                "slug": "hacksaw",
                "price": 120,
                "thumbnail": "https://images.unsplash.com/photo-1535551393484-1a1907f51759?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                "description": "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal.Most hacksaws are hand saws with a C-shaped walking frame that holds a blade under tension. Such hacksaws have a handle, usually a pistol grip, with pins for attaching a narrow disposable blade. The frames may also be adjustable to accommodate blades of different sizes.",
                "isAvailable": "Yes",
                "sku": "E128564",
                "reviews": [],
                "New": "Yes",
                "categoryId": {
                    "_id": "66c6eca0f998f342e949ea5f",
                    "categoryName": "Building & Construction"
                },
                "colorId": {
                    "_id": "66c6e5fa04dc98c53d961a7c",
                    "colorName": "Red"
                },
                "attributesId": null,
                "createdAt": "2024-08-22T18:01:57.254Z",
                "updatedAt": "2024-09-01T15:58:16.035Z",
                "__v": 0
            },
            {
                "_id": "66c77d15967548a338abf0e6",
                "productName": "Hacksaw",
                "slug": "hacksaw",
                "price": 120,
                "thumbnail": "https://images.unsplash.com/photo-1622768503544-c2880f70f89c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

                "description": "A hacksaw is a fine-toothed saw, originally and mainly made for cutting metal.Most hacksaws are hand saws with a C-shaped walking frame that holds a blade under tension. Such hacksaws have a handle, usually a pistol grip, with pins for attaching a narrow disposable blade. The frames may also be adjustable to accommodate blades of different sizes.",
                "isAvailable": "Yes",
                "sku": "E128564",
                "reviews": [],
                "New": "Yes",
                "categoryId": {
                    "_id": "66c6eca0f998f342e949ea5f",
                    "categoryName": "Building & Construction"
                },
                "colorId": {
                    "_id": "66c6e5fa04dc98c53d961a7c",
                    "colorName": "Red"
                },
                "attributesId": null,
                "createdAt": "2024-08-22T18:01:57.254Z",
                "updatedAt": "2024-09-01T15:58:16.035Z",
                "__v": 0
            },
      
            // Add other products here...
        ],
        categories: [
            { _id: '66c6eca0f998f342e949ea5f', categoryName: 'Building & Construction' },
            // Add other categories here...
        ],
        attributes: [
            { _id: '66c76b5991ae541694763227', attributeName: 'Small' },
            // Add other attributes here...
        ],
        colors: [
            { _id: '66c6e5fa04dc98c53d961a7c', colorName: 'Red' },
            { _id: '66c6e5ed04dc98c53d961a79', colorName: 'Black' },
            // Add other colors here...
        ]
    };

    useEffect(() => {
        // Simulate a data fetch
        const fetchData = () => {
            setProducts(staticData.products);
            setFilterOptions({
                categories: staticData.categories.map(category => ({ _id: category._id, name: category.categoryName })),
                sizes: staticData.attributes.map(attribute => ({ _id: attribute._id, name: attribute.attributeName })),
                colors: staticData.colors.map(color => ({ _id: color._id, name: color.colorName }))
            });
            setLoading(false);
        };

        fetchData();
    }, []);

    const handleFilterSubmit = (filters) => {
        // Apply filters on static data
        const filteredProducts = staticData.products.filter(product => {
            let match = true;
            if (filters.category && product.categoryId._id !== filters.category) {
                match = false;
            }
            if (filters.sizes && filters.sizes.length > 0 && !filters.sizes.includes(product.attributesId?._id)) {
                match = false;
            }
            if (filters.colors && filters.colors.length > 0 && product.colorId._id !== filters.colors) {
                match = false;
            }
            return match;
        });
        setProducts(filteredProducts);
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Banner />
            <div id="addToCart">
                <section className="shop-section">
                    <div className="container">
                        <TopSearch />
                        <div className="row g-4">
                            <div className="col-lg-9">
                                <ProductList products={products} />
                            </div>
                            <div className="col-lg-3">
                                <FilterArea filterOptions={filterOptions} onFilterSubmit={handleFilterSubmit} />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
