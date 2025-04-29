import React from "react";
import './Traffic.scss';

function Traffic({ traffic }) {
  return (
    <div className="traffic-list"> Top Traffic: 
        {traffic.map((item, index) => (
          <span key={index}>
            {item.value}: {(item.count * 100).toFixed(1) + '%' + " "} 
          </span>
        ))}
    </div>
  );
}

export default Traffic;
