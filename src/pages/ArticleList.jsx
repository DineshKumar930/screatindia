import "./ArticleList.css";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="loading-state">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
        </div>
        <h3>Loading Inspiring Stories</h3>
        <p>Fetching the latest success stories for you</p>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="no-articles">
        <div className="empty-state-icon">📝</div>
        <h3>No articles yet</h3>
        <p>Be the first to share an inspiring success story!</p>
        <button className="cta-button">Share Your Story</button>
      </div>
    )
  }

  return (
    <div className="article-list">
      
      <div className="articles-grid">
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  )
}

export default ArticleList