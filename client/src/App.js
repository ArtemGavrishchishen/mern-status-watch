import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import routes from './configs/routes';

import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WatchesPage from './pages/WatchesPage';
import DeliveryPage from './pages/DeliveryPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <AppHeader />

      <Switch>
        <Route exact path={routes.MAIN} component={HomePage} />
        <Route exact path={routes.CONTACT} component={ContactPage} />
        <Route exact path={routes.ABOUT} component={AboutPage} />
        <Route exact path={routes.WATCHES} component={WatchesPage} />
        <Route exact path={routes.DELIVERY} component={DeliveryPage} />
        <Route exact path={routes.CART} component={CartPage} />

        <Redirect to="/" />
      </Switch>

      <AppFooter />
    </>
  );
}

export default App;
