import React from "react";
import './Tags.scss';

function Tags({ tags }) {
  return (
    <div className="tag-list">
      {tags.map((tag, index) => (
        <span key={index} className="tag">
          {tag.value} ({tag.count})
        </span>
      ))}
    </div>
  );
}

export default Tags;
