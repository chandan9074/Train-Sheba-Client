// import pakages
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';

// import components

function App() {
  return (
    <div className="App">
      {/* crate router  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
