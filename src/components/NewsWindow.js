import React from 'react';
import './NewsWindow.scss';
import Sentiment from './Sentiment';
import Tags from './Tags';
import Traffic from './Traffic'

const NewsWindow = ({ data }) => {
  const {
    DP,
    REACH,
    TRAFFIC,
    TI,
    URL,
    DOM,
    CNTR,
    AU,
    SENT,
    AB,
    KW,
    FAV
  } = data;

  const date = new Date(DP).toLocaleDateString('ru-RU');
  const authors = AU?.length ? AU.join(', ') : 'No authors';
  return (
    <div className="news-window">
      <div className="news-window__top">
        <div className="news-window__meta">
          <span>{date}</span>
          <span className="dot">•</span>
          <span>{Math.round(REACH / 1000)}K Reach</span>
          <span className="dot">•</span>
          <Traffic traffic={TRAFFIC} />
          </div>
        <Sentiment sentiment={SENT} />
      </div>

      <h2 className="news-window__title">
        <a href={URL} target="_blank" rel="noreferrer">{TI}</a>
      </h2>

      <div className="news-window__source">
        {FAV && <img src={FAV} alt="favicon" />}
        <a href={`https://${DOM}`} target="_blank" rel="noreferrer">{DOM}</a>
        <span className="dot">•</span>
        <span>{CNTR}</span>
        <span className="dot">•</span>
        <span>{authors}</span>
      </div>

      <div className="news-window__abstract">
        {AB}
      </div>

      <div className="news-window__tags">
        <Tags tags={KW} />
      </div>
    </div>
  );
};

export default NewsWindow;
