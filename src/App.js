import './App.css';
import Header from './components/header/Header';
import Home from '../src/pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';

function App() {
  return (
    <Router>
      <h1>Let's go from 2.00 hrs</h1>
      <div className="App">
        {/* header must be common all over the pages */}
        <Header />

        <Routes>
          {/* for the checkout page */}
          <Route exact path='/checkout' element={
            <>
              <Checkout />
            </>
          } />

          {/* For the Home page */}
          <Route exact path="/" element={
            <>
              <Home />
            </>
          } />

        </Routes>
      </div>
    </Router >
  );
}

export default App;
