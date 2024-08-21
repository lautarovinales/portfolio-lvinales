import React from 'react';
import ProjectTag from './ProjectTag';
import '../styles/Projects.css';

function ProjectTags({ tags }) {
  return (
    <div className="tags-project">
      {tags.map((tag, index) => (
        <ProjectTag key={index} tag={tag} />
      ))}
    </div>
  );
}

export default ProjectTags;
