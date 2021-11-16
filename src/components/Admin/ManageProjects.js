import './Admin.css';
import {Link} from 'react-router-dom';

function ManageProjects() {
  return (
    
    <div className="flex-col" style={{flexGrow: 1}}>
    <div className="flex-row" style={{ justifyContent: 'space-between', alignItems: 'center'}}>
      <h3>Manage Projects</h3>
      <Link to="create">
        <button id="new-project-btn" className="button">New Project</button>
      </Link>
    </div>
    <div className="projects-container">
        <div className="project-tile">
            <div>
                Project Name
            </div> 
            <div>
                Rubric Names
            </div>
            <div>
                Assigned to
            </div>
        </div>
        <div className="project-tile">
            <div>
                Project Name
            </div> 
            <div>
                Rubric Names
            </div>
            <div>
                Assigned to
            </div>
        </div>
        <div className="project-tile">
            <div>
                Project Name
            </div> 
            <div>
                Rubric Names
            </div>
            <div>
                Assigned to
            </div>
        </div>
        <div className="project-tile">
            <div>
                Project Name
            </div> 
            <div>
                Rubric Names
            </div>
            <div>
                Assigned to
            </div>
        </div>
    </div>
  </div>
    

  );
}

export default ManageProjects;
