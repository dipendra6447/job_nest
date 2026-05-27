import React from 'react';
import './BlogSection.css';

const blogs = [
  {
    id: 1,
    category: 'Career Tips',
    categoryColor: '#2454FF',
    readTime: '5 min read',
    title: '10 Resume Mistakes That Are Costing You Interviews in 2024',
    excerpt: 'Discover the most common resume mistakes job seekers make and learn how to fix them to dramatically increase your interview rate.',
    author: 'Sarah Johnson',
    authorRole: 'Career Coach',
    authorEmoji: '👩‍💼',
    date: 'May 18, 2024',
    featured: true,
  },
  {
    id: 2,
    category: 'Industry Insights',
    categoryColor: '#7B3EFF',
    readTime: '7 min read',
    title: 'Tech Job Market in 2024: What You Need to Know',
    excerpt: "The tech job market is evolving rapidly. Here's a comprehensive look at which roles are in demand and what skills companies are paying premiums for.",
    author: 'Marcus Lee',
    authorRole: 'Tech Analyst',
    authorEmoji: '👨‍💻',
    date: 'May 15, 2024',
    featured: false,
  },
  {
    id: 3,
    category: 'Salary Guide',
    categoryColor: '#14B87A',
    readTime: '6 min read',
    title: 'How to Negotiate Your Salary: Scripts That Actually Work',
    excerpt: 'Salary negotiation is a skill. Learn proven frameworks, exact scripts, and timing strategies that result in 15-30% higher compensation offers.',
    author: 'Emma Rodriguez',
    authorRole: 'HR Director',
    authorEmoji: '👩‍🔬',
    date: 'May 12, 2024',
    featured: false,
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="blog-section section-padding" id="blog" aria-label="Career tips and blog">
      <div className="container">
        {/* Header */}
        <div className="d-flex align-items-end justify-content-between flex-wrap gap-3 mb-5">
          <div>
            <div className="section-label">
              <i className="bi bi-journal-text"></i> Career Tips
            </div>
            <h2 className="section-heading mb-2">
              Expert <span className="gradient-text">Advice & Insights</span>
            </h2>
            <p className="section-subtext" style={{ margin: 0 }}>
              Stay ahead with the latest career strategies and industry insights
            </p>
          </div>
          <a href="#" className="btn-outline-custom" id="view-all-blog-btn">
            All Articles <i className="bi bi-arrow-right ms-2"></i>
          </a>
        </div>

        {/* Blog Grid */}
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article className={`blog-card ${blog.featured ? 'blog-card--featured' : ''}`} key={blog.id} id={`blog-${blog.id}`}>
              {/* Top bar */}
              <div className="blog-card-top">
                <span
                  className="blog-category"
                  style={{ background: `${blog.categoryColor}15`, color: blog.categoryColor }}
                >
                  {blog.category}
                </span>
                <span className="blog-read-time">
                  <i className="bi bi-clock me-1"></i>
                  {blog.readTime}
                </span>
              </div>

              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-excerpt">{blog.excerpt}</p>

              {/* Footer */}
              <div className="blog-card-footer">
                <div className="blog-author">
                  <span className="blog-author-avatar">{blog.authorEmoji}</span>
                  <div>
                    <p className="blog-author-name">{blog.author}</p>
                    <p className="blog-author-role">{blog.authorRole}</p>
                  </div>
                </div>
                <div className="blog-meta">
                  <span className="blog-date">{blog.date}</span>
                  <a href="#" className="blog-read-link" id={`blog-read-${blog.id}`}>
                    Read <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
