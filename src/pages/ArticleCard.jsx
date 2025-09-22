import "./ArticleCard.css";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="article-card">
      <div className="article-image">
        <img src={article.image} alt={article.title} />
      </div>
      <div className="article-content">
        <h3 className="article-title">{article.title}</h3>
        <p className="article-date">{formatDate(article.date)}</p>
        <p className="article-description">{article.description}</p>
        <Link to={`/article/${article.id}`} className="read-more">Read More</Link>
      </div>
    </div>
  )
}

export default ArticleCard