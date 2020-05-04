import React from 'react'
import Logo from '../assets/logo.jpg'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <nav className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#myNavbar'>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>
          <span className='icon-bar'></span>                        
          </button>
          <Link className='navbar-brand' to='/'><img src={Logo} alt="logo"/> </Link>
        </div>
        <div className='collapse navbar-collapse' id='myNavbar'>
          <ul className='nav navbar-nav navbar-right'>
            <li><Link to='/'>Inicio</Link></li>
            <li><Link to='/categoria'>Categoria</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/lojas'>Lojas</Link></li>
            <Link to='/login'>
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in</button>
            </Link >
          </ul>
        </div>
      </div>
    </nav>
  )
}