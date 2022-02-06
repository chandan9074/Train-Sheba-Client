// import pakages
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import Homepage from './Pages/Homepage/Homepage';
import Ticket from './Pages/Ticketspage/Ticketspart/Ticket';
import Passengers from './Pages/Ticketspage/Passengerspart/Passengers';
import Payment from './Pages/Ticketspage/Paymentpart/Payment';
import Validation from './Pages/Ticketspage/Validationpart/Validation';
import TicketSuccess from './Pages/Ticketspage/TicketSuccesspart/TicketSuccess';

// import components

function App() {
  const stripePromise = loadStripe('pk_test_51KOK6DDwHICDWFJIgFNP5rlR59k5W0DyjfGtaA7V6GTsaaAQCu17l4nkokTFHej5a9U3QCq3PLc62jXO8lW1gHDZ00sVd6tSCV');
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
          <Route exact path="/payment" element={<Payment />}>
          </Route>
          
          <Route exact path="/validation" element={
            <Elements stripe={stripePromise}>
              <Validation />
            </Elements>
          }>
          </Route>
          <Route exact path="/ticketsuccess" element={<TicketSuccess />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
