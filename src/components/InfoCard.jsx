import React from 'react';
import '../styles/About.css';

function InfoCard({ iconSrc, title, body }) {
  return (
    <div className="cont-wrap">
      <img src={iconSrc} alt="" />
      <div className="title-sub-title">
        <div className="cont-title">{title}</div>
        <div className="cont-body">{body}</div>
      </div>
    </div>
  );
}

export default InfoCard;
