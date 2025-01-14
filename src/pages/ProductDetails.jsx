import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Banner from '../components/Banner';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/product/${productId}`);
        console.log('Full API Response:', response.data);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching the product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      navigate('/signin');
      return;
    }

    const userId = localStorage.getItem('userId');
    console.log('User ID:', userId);

    const cartItem = {
      productId: product._id,
      productName: product.productName,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
      userId: userId,
      color: product.colorId?.colorName,
      category: product.categoryId?.categoryName,
      attributes: product.attributesId
        ? {
            id: product.attributesId._id,
            name: product.attributesId.attributeName,
          }
        : 'N/A',
    };

    console.log('Cart Item:', cartItem);
    let existingCart;
    try {
      existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    } catch (error) {
      console.error('Error parsing cart data from local storage:', error);
      existingCart = [];
    }

    console.log('Existing Cart:', existingCart);

    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    console.log('Updated Cart stored in local storage:', updatedCart);

    navigate('/cart');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!product) {
    return <p>Product not found!</p>;
  }

  const thumbnailUrl = product.thumbnail;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .product-details-section {
          padding: 60px 0;
        }
        .product-details-container {
          display: flex;
          gap: 20px; /* Space between image and content */
          flex-wrap: nowrap; /* Prevent wrapping */
        }
        .product-image-container {
          flex: 1 1 50%; /* Takes up 50% of the container */
          max-width: 50%; /* Restrict max width to 50% */
        }
        .product-info-container {
          flex: 1 1 50%; /* Takes up 50% of the container */
          max-width: 50%; /* Restrict max width to 50% */
          display: flex;
          flex-direction: column; /* Align content vertically */
          justify-content: flex-start; /* Align items to start (top) */
          align-items: flex-start; /* Align items to the left */
        }
        .product-info {
          width: 100%; /* Ensure the product info takes full width */
        }
        .product-info h3,
        .product-info h4,
        .product-info h5,
        .product-info p {
          text-align: left !important; /* Ensure text aligns left */
          margin: 10px 0;
        }
        .product-info .btn-custom {
          align-self: flex-start; /* Align button to the left */
        }
        .tags-container {
          display: flex; /* Use flexbox to manage alignment */
          gap: 10px; /* Space between tags */
          margin-top: 10px; /* Optional: Space from the above elements */
        }
        .tag {
          background-color: #f0f0f0; /* Optional: Tag background color */
          color: #333; /* Optional: Tag text color */
          padding: 5px 10px; /* Optional: Padding for tag */
          border-radius: 5px; /* Optional: Rounded corners */
          text-align: left; /* Align text inside tag to left */
        }
        @media (max-width: 768px) {
          .product-details-container {
            flex-direction: column; /* Stack items on smaller screens */
          }
          .product-image-container,
          .product-info-container {
            max-width: 100%; /* Allow full width on small screens */
            flex: 1 1 100%; /* Stack them vertically */
          }
        }
      ` }} />
      <Banner />
      <section className="product-details-section">
        <div className="container">
          <div className="product-details-container">
            <div className="product-image-container">
              <div id="mainCarousel" className="carousel mx-auto">
                <div
                  className="carousel__slide main-thumbnail"
                  data-src={thumbnailUrl}
                  data-fancybox="gallery"
                  data-caption={product.productName}
                >
                  <img src={thumbnailUrl} alt={product.productName} />
                </div>
                {product.images &&
                  product.images.map((image, index) => (
                    <div
                      className="carousel__slide"
                      key={`main-${index}`}
                      data-src={image}
                      data-fancybox="gallery"
                      data-caption={product.productName}
                    >
                      <img src={image} alt={product.productName} />
                    </div>
                  ))}
              </div>
              <div id="thumbCarousel" className="carousel max-w-xl mx-auto mb-5">
                <div className="carousel__slide">
                  <img className="panzoom__content" src={thumbnailUrl} alt={product.productName} />
                </div>
                {product.images &&
                  product.images.map((image, index) => (
                    <div className="carousel__slide" key={`thumb-${index}`}>
                      <img className="panzoom__content" src={image} alt={product.productName} />
                    </div>
                  ))}
              </div>
            </div>
            <div className="product-info-container">
              <div className="product-info">
                <h3 className="title">{product.productName}</h3>
                <div className="review mb-4">
                  <span>
                    {Array.from({ length: product.rating || 0 }, (_, i) => (
                      <i className="fas fa-star" key={i} style={{ color: '#FFD700' }} />
                    ))}
                    {product.rating < 5 && <i className="fas fa-star-half-alt" style={{ color: '#FFD700' }} />}
                  </span>
                </div>
                <div className="tags-container">
                  <span className="tag">{product.isAvailable === 'Yes' ? 'Available' : 'Out of Stock'}</span>
                  {product.New === 'Yes' && <span className="tag">New</span>}
                </div>
                <h4 className="price mt-4">Price: ${product.price}</h4>
                <p className="description my-4">{product.description}</p>
                <h5 className="mt-4">
                  Category: <span className="category-text">{product.categoryId?.categoryName}</span>
                </h5>
                <h5 className="mt-4">
                  SKU: <span className="category-text">{product.sku}</span>
                </h5>
                <h5 className="mt-4">
                  Color: <span className="category-text">{product.colorId?.colorName}</span>
                </h5>
                <h5 className="mt-4">
                  Attribute: <span className="category-text">{product.attributesId?.attributeName || 'N/A'}</span>
                </h5>
                <button
                  type="button"
                  className="btn-custom mt-4 add-to-cart cartCount"
                  id="addToCart"
                  onClick={handleAddToCart}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
