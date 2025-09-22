import "./ArticlePage.css";
import articlesData from "../data/articles.json";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArticlePage = () => {

  
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [copied, setCopied] = useState(false);
  const [readMore, setReadMore] = useState(false); // Added for mobile read more



  
  useEffect(() => {
    const foundArticle = articlesData.find(art => String(art.id) === id);
    setArticle(foundArticle);
  }, [id]);





  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(article.title);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareOnWhatsApp = () => {
    const text = encodeURIComponent(`${article.title} - ${window.location.href}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  if (!article) {
    return (
      <div className="container">
        <div className="article-not-found">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist.</p>
          <Link to="/" className="btn">Back to Home</Link>
        </div>
      </div>
    );
  }

  // Mobile content handling
  const mobileContent = article.content.split("\n");
  const displayedContent = readMore ? mobileContent : mobileContent.slice(0, 3);

  return (
    <div className="article-page">
      <div className="container">
        <Link to="/" className="back-link">← Back to Articles</Link>

        <article className="full-article">
          <header className="article-header">
            <div className="article-category">{article.category || "Technology"}</div>
            <h1>{article.title}</h1>
            <p className="article-meta">
              Published on {formatDate(article.date)} 
              <span className="read-time"> • {Math.ceil(article.content.split(" ").length / 200)} min read</span>
            </p>
            
            <div className="author-info">
              <img src={article.authorImage || `https://github.com/dineshkumar930}.png`} alt={article.author || "Author"} className="author-image" />
              <div className="author-details">
                <span className="author-name">{article.author || "Dinesh Roy"}</span>
                <span className="author-title">{article.authorTitle || "Chief Executive"}</span>
              </div>
            </div>
          </header>

          <div className="article-image-full">
            <img src={article.image} alt={article.title} />
            {article.imageCaption && <div className="image-caption">{article.imageCaption}</div>}
          </div>

          <div className="article-content-full">
            <p className="article-description-full">{article.description}</p>
            
            <div className="article-body">
              {displayedContent.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {mobileContent.length > 3 && (
                <button 
                  className="read-more-btn"
                  onClick={() => setReadMore(!readMore)}
                >
                  {readMore ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
            
            <div className="article-tags">
              {article.tags && article.tags.map((tag, index) => (
                <span key={index} className="tag">#{tag}</span>
              ))}
            </div>
            
            <div className="social-sharing">
              <h3>Share this article</h3>
              <div className="share-buttons">
                <button onClick={shareOnFacebook} className="share-btn facebook" aria-label="Share on Facebook">
                  <i className="fab fa-facebook-f"></i>
                </button>
                <button onClick={shareOnTwitter} className="share-btn twitter" aria-label="Share on Twitter">
                  <i className="fab fa-twitter"></i>
                </button>
                <button onClick={shareOnWhatsApp} className="share-btn whatsapp" aria-label="Share on WhatsApp">
                  <i className="fab fa-whatsapp"></i>
                </button>
                <button onClick={shareOnLinkedIn} className="share-btn linkedin" aria-label="Share on LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </button>
               
              </div>
            </div>
          </div>
        </article>
        
        <div className="newsletter-signup">
          <h3>Enjoying what you're reading?</h3>
          <p>Subscribe to our newsletter to receive more insightful articles directly in your inbox.</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
