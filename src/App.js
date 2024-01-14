import './output.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Checkout from './routes/Checkout';
import Payments from './routes/Payments';
import OrderConfirmation from './routes/OrderConfirmation';

function App() {
  localStorage.removeItem("customerName"); 
  localStorage.removeItem("customerNumber"); 
  localStorage.removeItem("total"); 
  localStorage.removeItem("promo"); 
  return (
    <div className='w-screen h-screen font-halvetica bg-white overflow-auto'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/checkout'
            element=<Checkout />
          />
          <Route
            path='/payments'
            element=<Payments />
          />
          <Route
            path='/orderconfirmation/:method'
            element=<OrderConfirmation />
          />

          <Route
            path='*'
            element=<Navigate to='/checkout' />
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;