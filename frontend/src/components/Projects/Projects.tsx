import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="projects-title">My Work</h2>
      <div className="project-grid">
        <div className="project-card"><h3>Project 1</h3><p>A short description of this amazing project.</p></div>
        <div className="project-card"><h3>Project 2</h3><p>A short description of this amazing project.</p></div>
        <div className="project-card"><h3>Project 3</h3><p>A short description of this amazing project.</p></div>
      </div>
    </section>
  );
};
export default Projects;