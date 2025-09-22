import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <Link to={`/article/${article.id}`} className="article-card-link">
      <div className="article-card">
        <div className="article-image" style={{ backgroundImage: `url(${article.image})` }}>
          <div className="article-badge">{article.category || 'Story'}</div>
          <div className="article-title-overlay">
            <h3>{article.title}</h3>
          </div>
        </div>
        
        <div className="article-content">
          <div className="article-meta">
            <span className="article-date">{formatDate(article.date)}</span>
            <span className="article-read-time">• {article.readTime || '5 min read'}</span>
          </div>
          
          <p className="article-description">{article.description}</p>
          
          <div className="article-footer">
            
            <div className="read-more">Read More →</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;