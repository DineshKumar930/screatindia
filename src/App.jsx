import "./App.css";
import AddArticleForm from "./pages/AddArticleForm";
import ArticlePage from "./pages/ArticlePage";
import Home from "./pages/Home";
import Layout from "./components/layout/Laout";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-article" element={<Layout><AddArticleForm /></Layout>} />
       <Route path="/article/:id" element={<ArticlePage />} />  {/* ✅ add this */}
      </Routes>
    </Router>
  );
}

export default App;
