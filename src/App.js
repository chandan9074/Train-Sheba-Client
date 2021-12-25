// import pakages
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Homepage from './Pages/Homepage/Homepage';
import Ticket from './Pages/Ticketspage/Ticketspart/Ticket';
import Passengers from './Pages/Ticketspage/Ticketspart/Passengers';

// import components

function App() {
  return (
    <div className="App">
      {/* crate router  */}
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />}>
          </Route>
          <Route exact path="/tickets" element={<Ticket />}>
          </Route>
          <Route exact path="/passengers" element={<Passengers />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
