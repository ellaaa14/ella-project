import React, { useState } from 'react';
import Navbar from './Navbar';
import './Blog.css'; // Assuming you'll create this CSS file

const Blog = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: "Day 1: Journey to the Past – Rizal Park and Intramuros",
      date: "April 7, 2025",
      summary: "Exploring Rizal Park and the historic walled city of Intramuros.",
      content: "Our first day starts with a visit to Rizal Park, where we learned about the life and heroism of Dr. José Rizal. We saw the famous Rizal Monument and walked around the peaceful park. After that, we headed to Intramuros, the old walled city of Manila. We explored its beautiful old churches, forts, and streets that tell stories from long ago. It was a fun way to discover the roots of our Filipino history.",
      images: [
        "/day1/day1 (1).jpeg",
        "/day1/day1 (2).jpeg",
        "/day1/day1 (3).jpeg",
        "/day1/day1 (4).jpeg",  
        "/day1/day1 (5).jpeg",
        "/day1/day1 (6).jpeg"
      ]
    },
    {
      id: 2,
      title: "Day 2: Nature and Creativity – Exploring Subic Bay and Local Arts",
      date: "April 8, 2025",
      summary: "Visiting Subic Bay and experiencing Filipino arts and crafts.",
      content: "On our second day, we traveled to Subic Bay, a place known for its beautiful nature and clean surroundings. We enjoyed the fresh air, visited fun spots like beaches and animal parks, and learned about how Subic was once a naval base. After that, we discovered the world of Filipino arts and crafts—seeing local artworks, trying creative activities, and understanding how art tells stories about our culture. It was a day of fun, learning, and inspiration!",
      images: [
        "/day2/day2 (1).jpeg",
        "/day2/day2 (2).jpeg",
        "/day2/day2 (3).jpeg",
        "/day2/day2 (4).jpeg",
        "/day2/day2 (5).jpeg",
        "/day2/day2 (6).jpeg"
      ]
    },
    {
      id: 3,
      title: "Day 3: Stories of Nature and Nation – Museum of Natural History & Museo ni Quezon",
      date: "April 9, 2025",
      summary: "Exploring natural history and learning about President Quezon.",
      content: "On our third day, we explored two amazing museums. First, we visited the Museum of Natural History, where we saw exciting exhibits about animals, plants, and how nature works in the Philippines. Then we headed to the Museo ni Quezon, where we learned about the life and legacy of President Manuel L. Quezon, one of the country's great leaders. This day was all about discovering the wonders of nature and the important people who helped shape our nation.",
      images: [
        "/day3/day3 (1).jpeg",
        "/day3/day3 (2).jpeg",
        "/day3/day3 (3).jpeg",
        "/day3/day3 (4).jpeg",
        "/day3/day3 (5).jpeg",
        "/day3/day3 (6).jpeg"
      ]
    },
    {
      id: 4,
      title: "Day 4: Discovering the Value of Money – Bangko Sentral ng Pilipinas Museum",
      date: "April 10, 2025",
      summary: "Learning about Philippine currency and economic history.",
      content: "On our fourth day, we visited the Bangko Sentral ng Pilipinas Museum, where we learned about the history of money in the Philippines. We saw old coins and bills, learned how money is made, and understood the role of the Central Bank in keeping our economy strong. This tour helped us see how money connects to our history, culture, and everyday life in the country.",
      images: [
        "/day4/day4 (1).jpeg",
        "/day4/day4 (2).jpeg",
        "/day4/day4 (3).jpeg",
        "/day4/day4 (4).jpeg"
      ]
    },
    {
      id: 5,
      title: "Day 5: Riding Through the City – Exploring LRTA Line 2",
      date: "April 11, 2025",
      summary: "Experiencing Metro Manila's public transportation system.",
      content: "On our fifth day, we experienced riding the LRT Line 2, one of Metro Manila's main train lines. As we traveled, we learned about the importance of public transportation in helping people move around the city. We visited selected stations, observed how the system works, and saw how trains help reduce traffic and pollution. It was a fun and educational trip that showed how trains keep the city moving.",
      images: [
        "/day5/day5 (1).jpeg",
        "/day5/day5 (2).jpeg",
        "/day5/day5 (3).jpeg",
        "/day5/day5 (4).jpeg",
        "/day5/day5 (5).jpeg",
        "/day5/day5 (6).jpeg"
      ]
    },
    {
      id: 6,
      title: "Day 6: Culture and Discipline – Chinese Bell Church and the Philippine Military Academy",
      date: "April 12, 2025",
      summary: "Visiting cultural and military institutions in the Philippines.",
      content: "On our sixth day, we explored two very different but special places. First, we visited the Chinese Bell Church, where we saw beautiful Chinese architecture and learned about the traditions of the Filipino-Chinese community. Then, we went to the Philippine Military Academy (PMA), where future soldiers and leaders of the country are trained. We learned about discipline, patriotism, and the important role of the military in keeping the country safe.",
      images: [
        "/day6/day6 (1).jpeg",
        "/day6/day6 (2).jpeg",
        "/day6/day6 (3).jpeg",
        "/day6/day6 (4).jpeg",
        "/day6/day6 (5).jpeg",
        "/day6/day6 (6).jpeg"
      ]
    },
    {
      id: 7,
      title: "Day 7: A Cool End – Burnham Park in Baguio",
      date: "April 13, 2025",
      summary: "Relaxing in the summer capital of the Philippines.",
      content: "On our final day, we headed to Burnham Park in Baguio, a place known for its cool climate and beautiful nature. We took a relaxing boat ride on Burnham Lake, enjoyed a walk around the park, and experienced the fresh air and stunning views of the surrounding mountains. It was a peaceful way to wrap up our tour, enjoying the natural beauty of the Philippines' summer capital.",
      images: [
        "/day7/day7 (1).jpeg",
        "/day7/day7 (2).jpeg",
        "/day7/day7 (3).jpeg",
        "/day7/day7 (4).jpeg",
        "/day7/day7 (5).jpeg",
        "/day7/day7 (6).jpeg"
      ]
    }
  ];

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setSelectedBlog(null);
  };

  return (
    <section className="blog-section">
      <Navbar />

      <div className="blog-container">
        {selectedBlog ? (
          <div className="blog-post">
            <button className="back-button" onClick={handleBack}>← Back to Blogs</button>
            <h1>{selectedBlog.title}</h1>
            <p className="blog-date">{selectedBlog.date}</p>
            <div className="blog-content">
              <p>{selectedBlog.content}</p>
              <div className="blog-image-gallery">
                {selectedBlog.images.map((image, index) => (
                  <div className="blog-image-item" key={index}>
                    <img src={image} alt={`Blog image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="section-title">Educational Tour Blog</h1>
            <div className="blog-cards">
              {blogPosts.map(blog => (
                <div 
                  key={blog.id} 
                  className="blog-card"
                  onClick={() => handleBlogClick(blog)}
                >
                  <div className="blog-card-image-container">
                    <img src={blog.images[0]} alt={blog.title} />
                  </div>
                  <div className="blog-card-content">
                    <h2>{blog.title}</h2>
                    <p className="blog-date">{blog.date}</p>
                    <p>{blog.summary}</p>
                    <button className="read-more">Read More</button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Blog;
