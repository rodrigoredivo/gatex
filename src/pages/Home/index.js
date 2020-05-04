import React from 'react'
import Logo from '../../assets/logo.jpg'
import { Link }  from 'react-router-dom'

import './styles.css';

export default function Header() {
  return(
    <div className='header'>
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
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Sign in</button>
            </ul>
          </div>
        </div>
      </nav>
      <div className='jumbotron text-center'>
        <h1>Deseja Aumentar suas vendas?<br />
          Cadastre seu produto conosco!</h1>  
        <p>Nesse tempos de crise, estamos focados em trazer para <br />
          você varejistas as melhores formas de promover seus produtos.<br />
          Com segurança e praticidade, é claro!</p>  
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Saiba mais</button>
      </div>
      <div className='jumbotron text-center'>
        <h1>Que tal ver umas promoções?</h1>
        <p>É cliente e deseja comprar produtos de qualidade<br />
          com praticidade e segurança?<br />
          Dê uma olhada nas nossas promoções!</p>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Promoções</button>
      </div>
      <div>
        <div id='about' className='container-fluid'>
          <div className='row'>
            <div className='col-sm-8'>
              <h2>Quem Somos</h2><br />
              <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className='col-sm-4'>
              <span className='glyphicon glyphicon-signal logo'></span>
            </div>
          </div>
        </div>
        <div className='container-fluid bg-grey'>
          <div className='row'>
            <div className='col-sm-4'>
              <span className='glyphicon glyphicon-globe logo slideanim'></span>
            </div>
            <div className='col-sm-8'>
              <h2>Our Values</h2><br />
              <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
              <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="text-center">
          <h2>Planos</h2>
          <h4>Choose a payment plan that works for you</h4>
        </div>
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <div className="panel panel-default text-center">
              <div className="panel-heading">
                <h1>Basic</h1>
              </div>
              <div className="panel-body">
                <p><strong>Controla seu estoque</strong></p>
                <p><strong>15gb de produtos monitorados</strong></p>
                <p><strong>Prazo de 1 mês</strong></p>
                <p><strong>Suporte 1 mês</strong></p>
              </div>
              <div className="panel-footer">
                <h3>R$19</h3>
                <h4>Reais</h4>
                <button className="btn btn-lg">Cadastre-se</button>
              </div>
            </div>      
          </div>     
          <div className="col-sm-4 col-xs-12">
            <div className="panel panel-default text-center">
              <div className="panel-heading">
                <h1>Pro</h1>
              </div>
              <div className="panel-body">
                <p><strong>Controla seu estoque</strong></p>
                <p><strong>100gb de produtos monitorados</strong></p>
                <p><strong>Prazo de 6 meses</strong></p>
                <p><strong>Suporte 24 horas</strong></p>
              </div>
              <div className="panel-footer">
                <h3>R$129</h3>
                <h4>Reais</h4>
                <button className="btn btn-lg">Cadastre-se</button>
              </div>
            </div>      
          </div>       
          <div className="col-sm-4 col-xs-12">
            <div className="panel panel-default text-center">
              <div className="panel-heading">
                <h1>Premium</h1>
              </div>
              <div className="panel-body">
                <p><strong>Controla seu estoque</strong></p>
                <p><strong>200gb de produtos monitorados</strong></p>
                <p><strong>Prazo de 1 ano</strong></p>
                <p><strong>Suporte 24 horas</strong></p>
              </div>
              <div className="panel-footer">
                <h3>R$149</h3>
                <h4>Reais</h4>
                <button className="btn btn-lg">Cadastre-se</button>
              </div>
            </div>      
          </div>    
        </div>
      </div>
    <div>
      <footer className="footer">				
        <div className="container">
          <div className="row">
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                About us
              </div>	
              <p className="white-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 text of the printing.
              </p>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Latest themes
              </div>	
              <div className="footer-links">
                <a href="/">
                  Appointment
                </a>
                <a href="/">
                  Health center
                </a>
                <a href="/">
                  Quality
                </a>
                <a href="/">
                  Wallstreet
                </a>
              </div>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Quick Links
              </div>	
              <div className="footer-links">
                <a href="/">
                  Blog
                </a>
                <a href="/">
                  FAQ
                </a>
                <a href="/">
                  Terms & conditions
                </a>
                <a href="/">
                  Privacy policy
                </a>
              </div>
            </div>
            <div className="col-md-3 m-b-30">
              <div className="footer-title m-t-5 m-b-20 p-b-8">
                Support
              </div>	
              <div className="footer-links">
                <a href="/">
                  Affiliate
                </a>
                <a href="/">
                  Login
                </a>
                <a href="/">
                  All theme package
                </a>
                <a href="/">
                  Support forum
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        Copyright © 2020, All Rights Reserved
      </div>
    </div>
  </div>
  )
}