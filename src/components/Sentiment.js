import React from "react";
import './Sentiment.scss';

function Sentiment({ sentiment }) {
  const sentimentClass = sentiment.toLowerCase();
  
  return (
    <span className={`badge ${sentimentClass}`}>
      {sentiment}
    </span>
  );
}

export default Sentiment;
