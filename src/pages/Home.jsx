import "./Home.css";
import ArticleList from "./ArticleList";
import Layout from "../components/layout/Laout";
import articlesData from "../data/articles.json";
import { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (articlesData.length === 0) {
        setArticles([]); // No articles in JSON
      } else {
        const sortedArticles = articlesData.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setArticles(sortedArticles);
      }
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      <div className="home">
        <div className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Discover <span className="highlight">Inspiring Stories</span> from Across India
              </h1>
              <p className="hero-description">
                ScreatIndia brings you the most compelling local success stories and popular content from every corner of our diverse nation. 
                Explore, be inspired, and share your own journey.
              </p>
              <div className="hero-actions">
                <a href="#latest-stories" className="btn btn-primary">Explore Stories</a>
                <a href="/admin/add-article" className="btn btn-secondary">Share Your Story</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="card-image"></div>
                <div className="card-content">
                  <h3>Business Innovations</h3>
                  <p>Local entrepreneurs making a global impact</p>
                </div>
              </div>
              <div className="floating-card card-2">
                <div className="card-image"></div>
                <div className="card-content">
                  <h3>Cultural Heritage</h3>
                  <p>Preserving and modernizing traditional arts</p>
                </div>
              </div>
              <div className="floating-card card-3">
                <div className="card-image"></div>
                <div className="card-content">
                  <h3>Social Change</h3>
                  <p>Grassroot initiatives transforming communities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <section id="latest-stories" className="articles-section">
            <div className="section-header">
              <h2 className="section-title">Latest Stories</h2>
              <p className="section-subtitle">Discover the most recent inspiring stories from across India</p>
            </div>

            {loading ? (
              <div className="loading-articles">
                <div className="loading-spinner"></div>
                <p>Loading inspiring stories...</p>
              </div>
            ) : (
              <ArticleList articles={articles} />
            )}
          </section>

          <section className="categories-section">
            <div className="section-header">
              <h2 className="section-title">Explore Categories</h2>
              <p className="section-subtitle">Find stories that interest you most</p>
            </div>
            <div className="categories-grid">
              <div className="category-card">
                <div className="category-icon">💼</div>
                <h3>Business</h3>
                <p>Entrepreneurship stories and business innovations</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🎨</div>
                <h3>Art & Culture</h3>
                <p>Traditional arts and cultural heritage</p>
              </div>
              <div className="category-card">
                <div className="category-icon">🌾</div>
                <h3>Agriculture</h3>
                <p>Farming innovations and rural success</p>
              </div>
              <div className="category-card">
                <div className="category-icon">👨‍👩‍👧‍👦</div>
                <h3>Social Initiatives</h3>
                <p>Community development and social change</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
