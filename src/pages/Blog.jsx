// pages/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import '../App.css';

// Static blog data
const blogs = [
  {
    "_id": "66c79287520285021693456c",
    "blogName": "Road Roller Machine",
    "slug": "road-roller-machine",
    "description": "Roads play a major role in the economic development of a nation...",
    "images": "https://images.unsplash.com/photo-1638310119738-455d9af85740?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "createdAt": "2024-08-22T19:33:27.334Z",
  },
  {
    "_id": "66c793875202850216934571",
    "blogName": "What are construction labor planning tools?",
    "slug": "what-are-construction-labor-planning-tools",
    "description": "Labor planning tools help companies schedule and track their employees...",
    "images": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "createdAt": "2024-08-22T19:37:43.511Z",
  },
  {
    "_id": "66c795e2e7a8b997b5c2a17f",
    "blogName": "What is Construction Project Management Software?",
    "slug": "what-is-construction-project-management-software",
    "description": "Construction project management is the process of planning, organizing...",
    "images": "https://plus.unsplash.com/premium_photo-1682882688309-54527c93dc97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "createdAt": "2024-08-22T19:47:46.175Z",
  },
  // Add more blog objects as needed
];

export default function Blog() {
  const getImageUrl = (imagePath) => {
    return imagePath || "https://via.placeholder.com/600x400"; // Provide a fallback image URL
  };

  return (
    <>
      <Banner />
      <section className="blog-page py-5">
        <div className="container">
          <div className="row">
            {blogs.map((blog) => (
              <div key={blog._id} className="col-lg-4 col-md-6 mb-4">
                <div className="blog-box box-sm shadow-sm" style={{ minHeight: '450px' }}>
                  <div className="img-box overflow-hidden rounded" style={{ height: '250px' }}>
                    <img
                      src={getImageUrl(blog.images)} // Safely access images
                      alt={blog.blogName || 'Blog Image'} // Safely access blogName
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover' 
                      }}
                    />
                    <div className="date position-absolute">
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { day: '2-digit' })}</span>
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short' })}</span>
                    </div>
                  </div>
                  <div className="text-box p-3">
                    <h4 className="title mb-2">{blog.blogName || 'Untitled Blog'}</h4>
                    <div className="d-flex justify-content-between align-items-center author-date">
                      <span><i className="fas fa-user"></i> Admin</span>
                      <Link to={`/blogdetails/${blog._id}`} className="read-more"
                    
                       >
                        Read more <i className="far fa-long-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt-3">
            <nav id="pagination">
              {/* Pagination logic will go here */}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}