import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Banner from '../components/Banner';

export default function BlogCategory() {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/blogCat/${categoryId}`);
        setCategory(response.data);
      } catch (err) {
        setError('Failed to fetch category');
        console.error('Failed to fetch category', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, [categoryId]);

  const getImageUrl = (imagePath) => {
    return imagePath || 'https://via.placeholder.com/600x400';
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Banner
        title={category?.categoryName || 'Category'}
        breadcrumb={[{ label: 'Home', link: '/' }, { label: 'Category' }]}
      />
      <section className="blog-page py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              {category ? (
                <>
                  <div className="row mb-4">
                    <div className="col-lg-12">
                      <div className="category-header">
                        <h2>{category.categoryName}</h2>
                        <p>{category.description || 'No description available for this category.'}</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    {category.blogs && category.blogs.length > 0 ? (
                      category.blogs.map((blog) => (
                        <BlogPreview key={blog._id} blog={blog} />
                      ))
                    ) : (
                      <p>No blogs found in this category.</p>
                    )}
                  </div>
                </>
              ) : (
                <p>Category Not Found</p>
              )}
            </div>
            <div className="col-lg-4">
              <div className="side-bar">
                <div className="side-box">
                  <h4>Categories</h4>
                  <ul className="links list-unstyled">
                    {category?.blogs?.map((blog) => (
                      <li key={blog._id}>
                        <Link to={`/blogdetails/${blog._id}`}>
                          {blog.blogName}
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

function BlogPreview({ blog }) {
  const getImageUrl = (imagePath) => {
    return imagePath || 'https://via.placeholder.com/600x400';
  };

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="blog-box box-sm shadow-sm" style={{ minHeight: '450px' }}>
        <div className="img-box overflow-hidden rounded" style={{ height: '250px' }}>
          <img
            src={getImageUrl(blog.images)}
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
