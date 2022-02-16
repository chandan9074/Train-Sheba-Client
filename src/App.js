// import pakages
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import AuthProvider from './context/AuthProvider';
import Login from './Pages/Accountspage/Login/Login';
import Registration from './Pages/Accountspage/Registration/Registration';
import Dashboard from './Pages/Dashboardpage/Dashboard';
import Homepage from './Pages/Homepage/Homepage';
import PrivateRoute from './Pages/Private route/PrivateRoute';
import Passengers from './Pages/Ticketspage/Passengerspart/Passengers';
import Payment from './Pages/Ticketspage/Paymentpart/Payment';
import Ticket from './Pages/Ticketspage/Ticketspart/Ticket';
import TicketSuccess from './Pages/Ticketspage/TicketSuccesspart/TicketSuccess';
import Validation from './Pages/Ticketspage/Validationpart/Validation';
import AddReview from './Pages/Dashboardpage/AddReview/AddReview';
import AddTravelDestination from './Pages/Dashboardpage/AddTravelDestination/AddTravelDestination';
// import components

function App() {
  return (
    <div className="App">
      {/* crate router  */}
      <Router>
        <AuthProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />}>
            </Route>
            <Route exact path="/login" element={<Login />}>
            </Route>
            <Route exact path="/registration" element={<Registration />}>
            </Route>

            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} >
                <Route path="addreview" element={<AddReview />} />
                <Route path="addtraveldestination" element={<AddTravelDestination />} />
              </Route>
              <Route exact path="/tickets" element={<Ticket />} />
              <Route exact path="/passengers" element={<Passengers />} />
              <Route exact path="/payment" element={<Payment />} />
              <Route exact path="/validation" element={<Validation />} />
              <Route exact path="/ticketsuccess" element={<TicketSuccess />} />
            </Route>
            
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
