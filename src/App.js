import './App.css';
import Header from './components/header/Header';
import Home from '../src/pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>1:38 part3 Checkout Page</h1>
        <Routes>

          {/* For the Home page */}
          <Route exact path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />

          {/* for the checkout page */}
          <Route exactpath='/checkout' element={
            <>
              <Header />
              <h1>I am A Checkout Page</h1>
            </>
          } />

        </Routes>
      </div>
    </Router >
  );
}

export default App;
