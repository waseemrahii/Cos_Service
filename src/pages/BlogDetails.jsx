import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import '../App.css'


export default function BlogDetails() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        // Fetching categories data
        const responseCategories = await axios.get('http://localhost:3000/api/v1/blogCat');
        if (responseCategories.data && Array.isArray(responseCategories.data)) {
          setCategories(responseCategories.data);
        } else {
          setCategories([]);
        }

        // Fetching specific blog based on blogId
        const response = await axios.get(`http://localhost:3000/api/v1/blog/${blogId}`);
        setBlog(response.data || null);
      } catch (error) {
        console.error('Error fetching blog details or categories:', error);
        setError('Failed to fetch blog details or categories');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [blogId]);

  // Using image URL directly from the API response
  const getImageUrl = (imagePath) => {
    return imagePath || 'https://via.placeholder.com/600x400';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Banner
        title="Blog Details"
        breadcrumb={[
          { label: 'Home', link: '/' },
          { label: 'Blog Details' },
        ]}
      />

      <section className="blog-page blog-details py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              {blog ? (
                <div className="blog-box">
                  <div className="img-box mb-4" style={{ height: '350px' }}>
                    <img
                      src={getImageUrl(blog.images)}
                      alt={blog.blogName}
                      className="img-fluid h-100 w-100 object-fit-cover rounded"
                    />
                    <div className="date position-absolute">
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { day: '2-digit' })}</span>
                      <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short' })}</span>
                    </div>
                  </div>
                  <div className="text-box text-start">
                    <div className="d-flex justify-content-between author-date mb-3">
                      <span><i className="fas fa-user"></i> Admin</span>
                      <span><i className="fas fa-clock"></i> {new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                    <h4 className="title mb-2">{blog.blogName}</h4>
                    <p className="mb-0">{blog.description}</p>
                  </div>
                </div>
              ) : (
                <p>Blog details not available.</p>
              )}
            </div>
            <div className="col-lg-4">
              <div className="side-bar">
                <div className="side-box mb-4">
                  <form action="/blog/search" method="get">
                    <h4>Search</h4>
                    <div className="input-group">
                      <input type="text" className="form-control" name="search" placeholder="search" />
                      <button type="submit"><i className="fal fa-search" aria-hidden="true"></i></button>
                    </div>
                  </form>
                </div>
                <div className="side-box">
                  <h4>Categories</h4>
                  <ul className="links list-unstyled">
                    {categories.map((category) => (
                      <li key={category._id}>
                        <Link to={`/blogcategory/${category._id}`}>
                          {category.categoryName} ({category.blogs.length})
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
