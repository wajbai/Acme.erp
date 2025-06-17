import React, { useState } from 'react';
import '../css/BlogPost.css';
import { FaCalendar } from "react-icons/fa";
import image1 from '../assets/img/blog/accounting.jpg';
import image2 from '../assets/img/blog/finance.jpg';
import image3 from '../assets/img/blog/finance01.jpg';
import { BiColor } from 'react-icons/bi';
import { FaArrowLeftLong } from "react-icons/fa6";
// import image4 from '../assets/img/bg/aboutus.jpg'; // Add your own image here

const blogPosts = [
  {
    image: image2,
    date: '19, 2024',
    title: 'The Importance of Financial Management Systems for Nonprofits...',
    category: 'FINANCE',
  },
  {
    image: image1,
    date: '15, 2024',
    title: 'Easy Ways to Manage Accounting for Non-profits, NGOs, and Religious Institutions',
    category: 'ACCOUNTING',
    link : '/accounting' // Link to the Accounting page
  },
  {
    image: image3,
    date: '16, 2024',
    title: 'Transform Your Finances with Acme.erp: A Simple Path to Success',
    category: 'FINANCE',
  }
// ,  {
//     image: image4,
//     date: '17, 2024',
//     title: 'How Cloud Accounting Helps Nonprofits Stay Transparent and Efficient',
//     category: 'FINANCE',
//   }
];

const BlogPost = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visiblePosts = blogPosts.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < blogPosts.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="blog-section container py-5">
     <div className="section-header d-flex justify-content-between align-items-center flex-wrap mb-4">
  <div className="section-text">
    <p className="recent-text mb-1">recent blog post</p>
    <h2 className="section-subtitle m-0">View Our Latest Blog Insights</h2>
  </div>    
  <div className="view-all-wrapper mt-3 mt-md-0">
    <button className="btn btn-outline-primary view-all-btn">VIEW ALL POSTS</button>
  </div>
</div>


      <div className="blog-slider d-flex align-items-center justify-content-center">
        <div className="arrow-btn2" onClick={handlePrev}><FaArrowLeftLong/></div>
        <div className="row flex-nowrap overflow-hidden">
          {visiblePosts.map((post, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="blog-card">
                <div className="image-placeholder">
                  <img src={post.image} alt="Blog" />
                </div>
                <div className="category-tag">{post.category}</div>
         <div className="blog-date">
  <FaCalendar style={{ color: "#004868" }} /> {post.date}
</div>  

                <h4 className="blog-title">{post.title}</h4>
                <a href="#" className="read-more">Read Details <span>&gt;</span></a>
              </div>
            </div>
          ))}
        </div>
        <div className="arrow-btn" onClick={handleNext}><FaArrowLeftLong/></div>
      </div>
    </div>
  );
};

export default BlogPost;
