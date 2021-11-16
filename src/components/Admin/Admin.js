// import './App.css';
import React  from "react";
import './Admin.css';
import {Router, Routes, Route, Link} from 'react-router-dom';
import ManageProjects from "./ManageProjects";
import CreateProject from "./CreateProjects";

export default class Admin extends React.Component{
  render() {
    return (
      <div className="wrapper flex-col" style={{height: '80vh'}}>
        <div className="title">
          <h1>Admin</h1>
        </div>
        <Routes>
          <Route path="create" element={<CreateProject/>} />
          <Route path="" element={<ManageProjects/>}/>
        </Routes>
      
        
        
        
        
      </div>
      
      
    )
  }
}
