import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css';

export default function Header() {
  return(
    <div className='header'>
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
                <Link to='/cadastro'>
                <button className="btn btn-lg">Cadastre-se</button>
                </Link>
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
                <Link to='/cadastro'>
                <button className="btn btn-lg">Cadastre-se</button>
                </Link>
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
                <Link to='/cadastro'>
                <button className="btn btn-lg">Cadastre-se</button>
                </Link>
              </div>
            </div>      
          </div>    
        </div>
      </div>
    </div>
  )
}