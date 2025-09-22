import "./ArticleList.css";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ articles }) => {
  if (articles.length === 0) {
    return (
      <div className="no-articles">
        <h3>No articles found</h3>
        <p>Be the first to share a success story!</p>
      </div>
    )
  }

  return (
    <div className="article-list">
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export default ArticleList