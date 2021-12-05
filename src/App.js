
import './App.css';
import { Par } from './Components/Parent.js';
import { MockFight } from './store/Pages/Mock_fight';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
 
  
 return (
  <div className="App">
    <Router>
    <Link to="/test_data">Home</Link>
    <Link to="/test_fight">Register</Link>
        <Routes>
          
          <Route path="/test_data" element={<Par />} />          
          <Route path="/test_fight" element={<MockFight enemy="Jester"/>} /> 
          
        </Routes>
     </Router>
  </div>
);
}

export default App;