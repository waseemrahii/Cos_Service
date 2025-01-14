import React from 'react';
import ProductBox from './ProductBox '
import '../../App.css'
export default function ProductList({ products }) {
    return (
        <div className="row g-4">
            {products.map((product) => (
                <ProductBox
                    key={product._id}
                    imgSrc={product.thumbnail}
                    title={product.productName}
                    price={product.price}
                    rating={product.reviews?.length || 0} // Adjust rating if available in data
                    id={product._id}
                    isNew={product.New === "Yes"}
                />
            ))}
        </div>
    );
}
