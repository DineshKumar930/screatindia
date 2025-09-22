import "./AddArticleForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddArticleForm = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    image: '',
    date: new Date().toISOString().split('T')[0],
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Generate a unique ID
    const newArticle = {
      ...formData,
      id: Date.now().toString()
    }
    
    // Get existing articles from localStorage
    const existingArticles = JSON.parse(localStorage.getItem('screatindia_articles') || '[]')
    
    // Add new article
    const updatedArticles = [newArticle, ...existingArticles]
    
    // Save back to localStorage
    localStorage.setItem('screatindia_articles', JSON.stringify(updatedArticles))
    
    // Redirect to home page
    navigate('/')
  }

  return (
    <div className="add-article-form-container">
      <h2 className="section-title">Share Your Story</h2>
      <form className="add-article-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Article Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Short Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="content">Article Content</label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="6"
            required
          ></textarea>
        </div>
        
        <div className="form-group">
          <label htmlFor="image">Image URL</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="date">Publish Date</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit" className="btn">Publish Article</button>
      </form>
    </div>
  )
}

export default AddArticleForm