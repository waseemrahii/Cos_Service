import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css'

export default function ProductBox({ imgSrc, title = 'Untitled Product', price, rating, id, isNew }) {
    const imageUrl = imgSrc || 'https://via.placeholder.com/300';

    return (
        <div className="col-lg-4 col-md-6">
            <div
                className="product-box shadow-sm rounded position-relative"
                style={{
                    border: '1px solid #e5e5e5',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    backgroundColor: '#fff',
                }}
            >
                <div
                    className="img-box"
                    style={{
                        height: '220px',
                        textAlign: 'center',
                        padding: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f7f7f7',
                    }}
                >
                    <Link to={`/product/${id}`}>
                        <img
                            className="img-fluid"
                            src={imageUrl}
                            alt={title}
                            style={{
                                objectFit: 'contain',
                                maxWidth: '100%',
                                maxHeight: '200px',
                                width: 'auto',
                                height: 'auto',
                            }}
                        />
                    </Link>
                    {isNew && (
                        <span
                            className="badge badge-success position-absolute"
                            style={{
                                top: '10px',
                                left: '10px',
                                backgroundColor: 'green',
                                color: 'white',
                                padding: '5px 10px',
                                borderRadius: '5px',
                            }}
                        >
                            NEW
                        </span>
                    )}
                    <div
                        className="position-absolute"
                        style={{
                            top: '10px',
                            right: '10px',
                            display: 'flex',
                            gap: '5px',
                        }}
                    >
                        <i
                            className="fas fa-heart"
                            style={{
                                color: '#ff6600',
                                backgroundColor: '#fff',
                                padding: '5px',
                                borderRadius: '50%',
                                border: '1px solid #ff6600',
                            }}
                        />
                        <i
                            className="fas fa-eye"
                            style={{
                                color: '#E20613',
                                backgroundColor: '#fff',
                                padding: '5px',
                                borderRadius: '50%',
                                border: '1px solid #E20613',
                            }}
                        />
                    </div>
                </div>
                <div className="text-box p-3 text-center">
                    <Link
                        to={`/product/${id}`}
                        className="title"
                        style={{
                            fontWeight: 'bold',
                            color: '#333',
                            display: 'block',
                            marginBottom: '5px',
                            fontSize: '16px',
                        }}
                    >
                        {title}
                    </Link>
                    <p
                        className="price"
                        style={{
                            color: '#E20613',
                            fontSize: '20px',
                            marginBottom: '5px',
                        }}
                    >
                        ${price}
                    </p>
                    <div className="review">
                        {Array.from({ length: rating }, (_, i) => (
                            <i className="fas fa-star" key={i} style={{ color: '#E20613' }} />
                        ))}
                        {rating < 5 && <i className="fas fa-star-half-alt" style={{ color: '#E20613' }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}
