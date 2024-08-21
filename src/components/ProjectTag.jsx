import React from 'react';
import '../styles/Projects.css';

function ProjectTag({ tag }) {
  return (
    <div className="tag-project">{tag}</div>
  );
}

export default ProjectTag;