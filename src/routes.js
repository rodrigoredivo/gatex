import React from 'react'
import {BrowserRouter, Switch } from 'react-router-dom';

import Home from './pages/Home'
import Login from './pages/Login'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch/>
        <Home />
        <Login />
      <Switch />
    </BrowserRouter>
  );
}