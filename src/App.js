import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Admin from './components/Admin/Admin';

function App() {
  return (
    
      <div className="App" style={{height: '100%'}}>
        <Router>
        <Routes>
          <Route path="/admin/*" element={<Admin/>} />
        </Routes>
        
        </Router>
      </div>
    

  );
}

export default App;
