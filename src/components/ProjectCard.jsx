import React from 'react';
import ProjectTags from './ProjectTags';
import '../styles/Projects.css';

function ProjectCard({ imageSrc, tags, title, repoLink }) {
  return (
    <div className="project-container">
      <img src={imageSrc} alt={title} />
      <div className="body-project">
        <ProjectTags tags={tags} />
        <div className="title-project">{title}</div>
        <div className="link-project"><a href={repoLink}>Repositorio</a></div>
      </div>
    </div>
  );
}

export default ProjectCard;
