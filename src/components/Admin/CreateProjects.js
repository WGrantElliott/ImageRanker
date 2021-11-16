import './Admin.css';
import {Link} from 'react-router-dom';

function CreateProject() {
  return (
    
    <div className="flex-col" style={{flexGrow: 1}}>
        <div className="flex-row" style={{ justifyContent: 'space-between', alignItems: 'center'}}>
            <h3>Create New Project</h3>
            <button className="button" style={{marginRight: '3vw'}}> Custom Rubric</button>
        </div>
        <div className="flex-row create-container" style={{flex: 100, justifyContent:"space-between"}}>
            <div className="options-wrapper flex-col">
                <div className="multiselect-tile">Images 1</div>
                <div className="multiselect-tile">Images 2</div>
                <div className="multiselect-tile">Images 3</div>
                <div className="multiselect-tile">Images 4</div>
            </div>
            <div className="options-wrapper flex-col">
                <div className="multiselect-tile">Rubric 1</div>
                <div className="multiselect-tile">Rubric 2</div>
                <div className="multiselect-tile">Rubric 3</div>
                <div className="multiselect-tile">Rubric 4</div>

            </div>
        </div>
        <div className="flex-row" style={{justifyContent:"flex-end", padding: '2rem 0', marginRight: '3vw'}}> 
            <Link to="/admin">
            <button className="button"> Create</button>

            </Link>
        </div>
        
  </div>
    

  );
}

export default CreateProject;
