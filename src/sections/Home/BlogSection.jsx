import React, { useState, useEffect } from 'react';
import BlogCard from '../../components/BlogCard'; 
import '../../App.css';

const staticBlogs = [
  {
    "_id": "66c793875202850216934571",
    "blogName": "What are construction labor planning tools?",
    "slug": "what-are-construction-labor-planning-tools",
    "description": "Labor planning tools help companies schedule and track their employees. \n\nThis is especially important in construction given that workers tend to be spread out across numerous job sites. Projects also typically require specific skills, licensing, and other forms of human capital, necessitating very careful scheduling.\n\nWithout construction labor planning tools, this would be a logistical nightmare.\n\nThankfully, these tools have existed since the dawn of good construction management. They’ve improved considerably with the times, going from analog to digital, cloud-based platforms.\n\nIn this article, we’ll look at these prominent labor planning tools:",
    "images": "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9ufGVufDB8fDB8fHww",
    "categoryId": {
        "_id": "66c78fa1cfe35583390059a0",
        "categoryName": "Construction Planning"
    },
    "userId": "66c6d7529eb600a8a23bc9a4",
    "createdAt": "2024-08-22T19:37:43.511Z",
    "updatedAt": "2024-09-01T17:51:55.974Z",
    "__v": 0
},
  
 
    {
        "_id": "66c793875202850216934571",
        "blogName": "What are construction labor planning tools?",
        "slug": "what-are-construction-labor-planning-tools",
        "description": "Labor planning tools help companies schedule and track their employees. \n\nThis is especially important in construction given that workers tend to be spread out across numerous job sites. Projects also typically require specific skills, licensing, and other forms of human capital, necessitating very careful scheduling.\n\nWithout construction labor planning tools, this would be a logistical nightmare.\n\nThankfully, these tools have existed since the dawn of good construction management. They’ve improved considerably with the times, going from analog to digital, cloud-based platforms.\n\nIn this article, we’ll look at these prominent labor planning tools:",
        "images": "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "categoryId": {
            "_id": "66c78fa1cfe35583390059a0",
            "categoryName": "Construction Planning"
        },
        "userId": "66c6d7529eb600a8a23bc9a4",
        "createdAt": "2024-08-22T19:37:43.511Z",
        "updatedAt": "2024-09-01T17:51:55.974Z",
        "__v": 0
    },
    {
      "_id": "66c793875202850216934571",
      "blogName": "What are construction labor planning tools?",
      "slug": "what-are-construction-labor-planning-tools",
      "description": "Labor planning tools help companies schedule and track their employees. \n\nThis is especially important in construction given that workers tend to be spread out across numerous job sites. Projects also typically require specific skills, licensing, and other forms of human capital, necessitating very careful scheduling.\n\nWithout construction labor planning tools, this would be a logistical nightmare.\n\nThankfully, these tools have existed since the dawn of good construction management. They’ve improved considerably with the times, going from analog to digital, cloud-based platforms.\n\nIn this article, we’ll look at these prominent labor planning tools:",
      "images": "https://media.istockphoto.com/id/1456699734/photo/the-engineer-talks-to-the-contractor-to-supervise-and-plan-the-work.jpg?s=612x612&w=0&k=20&c=DCdd8ZpB6A2y6u4mHtvVO9XOfkpS-TqwFaJKq_4Eos4=",
      "categoryId": {
          "_id": "66c78fa1cfe35583390059a0",
          "categoryName": "Construction Planning"
      },
      "userId": "66c6d7529eb600a8a23bc9a4",
      "createdAt": "2024-08-22T19:37:43.511Z",
      "updatedAt": "2024-09-01T17:51:55.974Z",
      "__v": 0
  },
    
    // ... other static blog objects
];

export default function BlogSection() {
    const [blogs, setBlogs] = useState(staticBlogs);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .blog-section {
                    background: url(https://construm.bugfinder.net/assets/uploads/content/63ad6c25291271672309797.jpg);
                    background-size: cover;
                }
                .blog-box.box-sm.shadow-sm {
                    min-height: 500px !important;
                }
                .img-box.overflow-hidden.rounded {
                    height: 251px !important;
                }
            ` }} />
            <section className="blog-section">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-text text-center mx-auto">
                                    <h5>Recent Blogs</h5>
                                    <h2>Learn more from our latest blogs</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row g-4">
                            {blogs.slice(0, 3).map((blog) => ( 
                                <BlogCard key={blog._id} blog={blog} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
