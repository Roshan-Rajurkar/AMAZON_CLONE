import './App.css';
import Header from './components/header/Header';
import Home from '../src/pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import LoginPage from './components/login/LoginPage';
import { auth } from './firebase'
import { useStateValue } from './components/stateProvider/StateProvider';
import { useEffect } from 'react';

function App() {

  const [{ user }, dispatch] = useStateValue();
  console.log(user)

  useEffect(() => {

    // use are givin user access after signing
    auth.onAuthStateChanged(authUser => {
      console.log("account sign In")
      console.log('The user is >>>> ', authUser)


      if (authUser) {
        // we are setting user if we have auth changed
        dispatch({
          type: "SET_USER",
          // as a payload we are pad ding the authUser 
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

  return (
    <Router>

      <h1 style={{ backgroundColor: 'red' }}>let's go from 4:43:00</h1>

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

          {/* For the Home page */}
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />

        </Routes>
      </div>
    </Router >
  );
}

export default App;
