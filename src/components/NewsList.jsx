import React from "react";
import NewsCard from "./NewsCard";

function NewsList({ articles, loading }) {

  // 🔥 1. Loading state
  if (loading) {
    return (
      <div className="news-container">
        {[1,2,3,4,5,6].map((item) => (
          <div className="skeleton-card" key={item}></div>
        ))}
      </div>
    );
  }

  // 😢 2. No results
  if (articles.length === 0) {
    return <h2 style={{ textAlign: "center" }}>No news found 😢</h2>;
  }

  // ✅ 3. Normal data
  return (
    <div className="news-container">
      {articles.map((item, index) => (
        <NewsCard key={index} article={item} />
      ))}
    </div>
  );
}

export default NewsList;