import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Lojas from './pages/Lojas'
import MyProducts from './pages/MyProducts'

import Header from './components/Header'
import Footer from './components/Footer'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch/>
        <Header />
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/lojas" component={Lojas} />
          <Route path="/myproducts" component={MyProducts} />
        <Footer />
      <Switch />
    </BrowserRouter>
  );
}