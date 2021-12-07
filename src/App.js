
import './App.css';
import { Par } from './Components/Parent.js';
import { MockFight } from './Pages/Mock_fight';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Inv } from './Pages/Inventory';
import { Shop } from './Pages/Shop';
function App() {


 return (
  <div className="App">
    <Router>
    <Link className="links" to="/test_data">Test Data</Link>
    <Link className="links" to="/test_fight">Test Fight</Link>
    <Link className="links" to="/inventory">Inventory</Link>
    <Link className="links" to="/shop">Shop</Link>
        <Routes>
          
          <Route path="/test_data" element={<Par />} />          
          <Route path="/test_fight" element={<MockFight />} /> 
          <Route path="/inventory" element={<Inv/>} />          
          <Route path="/shop" element={<Shop/>} />          
        </Routes>
     </Router>
  </div>
);
}

export default App;