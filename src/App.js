import './App.css';
import Header from './components/header/Header';
import Home from '../src/pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import LoginPage from './components/login/LoginPage';
import { auth } from './firebase'
import { useStateValue } from './components/stateProvider/StateProvider';
import { useEffect, useState } from 'react';
import Payment from './components/payment/Payment';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Footer from './components/footer/Footer';

const promise = loadStripe('pk_test_51NGxszSDM9DrFdk9kCSgZLqiaEvG2143rpWqeqBSpzQYGJr23BO0kFjrKb1p77dLj9zsvtZl5iJDX6aCp5ApE8Zr00nt9Awv50')

function App() {

  const [{ }, dispatch] = useStateValue();
  const [searchQuery, setSearchQuery] = useState('');
  // console.log(user)

  useEffect(() => {

    // use are givin user access after signing
    auth.onAuthStateChanged(authUser => {
      console.log('The user is >>>> ', authUser.multiFactor.user.email)


      if (authUser) {
        dispatch({
          type: "SET_USER",
          // as a payload we are passing the authUser 
          user: authUser.multiFactor.user
        })
      }
      else {
        // the user is Logged out
        dispatch({
          type: "SET_USER",
          // as a payload we are passing null bcz user is logged out
          user: null
        })
      }

    })
  }, [])

  const getSearchQuery = (value) => {
    setSearchQuery(value);
  }

  return (
    <Router>

      {/* <h1 style={{ backg
        oundColor: 'red' }}>let's go from 6:20:00</h1> */}

      <div className="App">
        {/* header must be common all over the pages */}

        <Routes>
          {/* for the checkout page */}
          <Route exact path='/login' element={
            <>
              <LoginPage />
            </>
          } />

          {/* for the checkout page */}
          <Route exact path='/checkout' element={
            <>
              <Header />
              <Checkout />
            </>
          } />

          {/* for the payment page */}
          <Route exact path='/payment' element={
            <>
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>
          } />

          {/* For the Home page */}
          <Route exact path="/" element={
            <>
              <Header searchQuery={searchQuery} getSearchQuery={getSearchQuery} />
              <Home searchQuery={searchQuery} />
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
