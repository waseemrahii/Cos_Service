// components/BlogCard.js

import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ blog }) {
  // Function to get the correct image URL
  const getImageUrl = (imagePath) => {
    return imagePath || 'https://via.placeholder.com/600x400'; // Provide a fallback image URL
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="blog-box box-sm shadow-sm" style={{ minHeight: '450px' }}>
        <div className="img-box overflow-hidden rounded" style={{ height: '250px' }}>
          <img
            src={getImageUrl(blog.images)} // Ensure correct image path is used
            alt={blog.blogName}
            className="img-fluid h-100 w-100 object-fit-cover"
          />
          <div className="date position-absolute" style={{ background: '#FF6600', color: '#fff', padding: '10px', textAlign: 'center', borderRadius: '5px' }}>
            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { day: '2-digit' })}</span>
            <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short' })}</span>
          </div>
        </div>
        <div className="text-box p-3 text-start">
          <h4 className="title mb-2">{blog.blogName}</h4>
          <p>{blog.description ? blog.description.substring(0, 100) : 'No description available'}...</p>
          <Link to={`/blogdetails/${blog._id}`} className="read-more" style={{ color: '#FF6600' }}>
            Read more <i className="far fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
