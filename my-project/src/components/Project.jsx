import './Project.css';

// TODO: fix project layout and formatting

const ProjectTile = ({ title, image, description, tags}) => {
  return (
    <div className="project_tile">
        <img className="project_img" src={image}/>
        <div className="project_content">
            <h3 className="project_title">{title}</h3>
            <p className="project_desc">{description}</p>
            <div className="project_skills">{tags.map((tag, index) => (<span key={index} className="project_tag">{tag}</span>))}
            </div>
        </div>
    </div>

  );
};

export default ProjectTile;
