function ProjectTile({ title, link, text, photo }) {
  return (
    <a href={link} className="project-tile">
      <img alt={title} src={photo} />
      <h2>{title}</h2>
      <p>{text}</p>
    </a>
  );
}

export default ProjectTile;