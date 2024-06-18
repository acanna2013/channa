import './Project.css';

// TODO: fix project layout and formatting

const ProjectTile = () => {
  return (
    <div className="project_grid">
      <div className="project_tile">
        <a href='https://github.com/acanna2013/cirrhosis_analysis?tab=readme-ov-file' target='_blank'>
          <img className="project_img" src='/cirrhosis.png' alt='cirrhosis decision tree'/>
        </a>
        <div className="project_content">
          <h3 className="project_title">cirrhosis analysis</h3>
          <p className="project_desc">
            multi-class classification model on symptoms of cirrhosis. 
            determine most significant symptoms.</p>
          <span className="project_skills">
            python
          </span>
          <span className="project_skills">
            scikit
          </span>
          <span className="project_skills">
            jupyter
          </span>
        </div>
      </div>
      <div className="project_tile">
        <a href='https://github.com/acanna2013/custom_linux_shell' target='_blank'>
          <img className="project_img" alt='shell' src='shell.png'/>
        </a>
        <div className="project_content">
            <h3 className="project_title">linux shell</h3>
            <p className="project_desc">
              wrote a custom linux shell, replicating how a typical shell functions. common commands 
              implemented plus nice-to-haves.</p>
            <div className="project_skills">
              c
            </div>
            <div className="project_skills">
              c++
            </div>
            <div className="project_skills">
              yacc
            </div>
        </div>
      </div>
      <div className="project_tile">
        <a href='https://github.com/acanna2013/employment_distribution' target='_blank'>
          <img className="project_img" alt='loans' src='employment.png'/>
        </a>
        <div className="project_content">
            <h3 className="project_title">loans analysis</h3>
            <p className="project_desc">
              analyzed the factors that contribute to employment discrimination. how they affect debt and paying back loans</p>
            <div className="project_skills">
              python
            </div>
            <div className="project_skills">
              matplotlib
            </div>
            <div className="project_skills">
              pandas
            </div>
        </div>
      </div>
      <div className="project_tile">
        <a href='https://github.com/acanna2013/soil_china' target='_blank'>
          <img className="project_img" alt='soil in china' src='soil_china.png'/>
        </a>
        <div className="project_content">
            <h3 className="project_title">china's soil</h3>
            <p className="project_desc">
              analysis of the condition on soils across all provinces in China. used chemical properties to classify into hard vs. soft soils.</p>
            <div className="project_skills">
              python
            </div>
            <div className="project_skills">
              sql
            </div>
            <div className="project_skills">
              plotly
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
