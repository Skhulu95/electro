import React from 'react'
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'
import Shop from './components/pages/Shop'
import Cart from './components/pages/CartPage'
import Testimonies from './components/pages/Testimonies'
import CartProvider from './store/CartProvider'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <CartProvider>
      <Router>
        <Layout>
          <Switch>
            <Route path={'/AboutUs'} component={AboutUs}></Route>
            <Route path={'/ContactUs'} component={ContactUs}></Route>
            <Route path={'/Shop'} component={Shop}></Route>
            <Route path={'/Testimonies'} component={Testimonies}></Route>
            <Route path={'/Cart'} component={Cart}></Route>
            <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
      </CartProvider>
    </div>
  );
}

export default App;
