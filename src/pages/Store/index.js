import React from 'react'
import { Link } from 'react-router-dom'
import Prod1 from '../../assets/prod1.jpg'
import Prod2 from '../../assets/Prod2.jpg'
import Prod3 from '../../assets/Prod3.jpg'

export default function loja() {
  return (
    <div className="container-fluid">
      <div className="text-center">
        <h2>Lojas</h2>
        <h4>Veja alguns produtos de lojas parceiras.</h4>
       </div>
      <div className="row">
        <div className="col-sm-4 col-xs-12">
          <div className="panel panel-default text-center">
            <div className="panel-heading">
              <h1>Sony</h1>
            </div>
            <div className="panel-body">
            <div className="panel-body">
              <img src={Prod1} alt="Produto 1" height="150px"/>
            </div>
            </div>
            <div className="panel-body">
              <p><strong>Controle Playstation 4</strong></p>
              <p><strong>Novo</strong></p>
              <p><strong>1 Ano de garantia</strong></p>
            </div>
            <div className="panel-footer">
              <h3>R$100</h3>
              <h4>Reais</h4>
              <Link to='/cadastro'>
              <button className="btn btn-lg">Acesse o site</button>
              </Link>
            </div>
          </div>      
        </div>     
        <div className="col-sm-4 col-xs-12">
          <div className="panel panel-default text-center">
          <div className="panel-heading">
              <h1>Nike</h1>
            </div>
            <div className="panel-body">
            <div className="panel-body">
              <img src={Prod2} alt="Produto 1" height="150px"/>
            </div>
            </div>
            <div className="panel-body">
              <p><strong>Relógio nike smart</strong></p>
              <p><strong>Novo</strong></p>
              <p><strong>1 Ano de garantia</strong></p>
            </div>
            <div className="panel-footer">
              <h3>R$200</h3>
              <h4>Reais</h4>
              <Link to='/cadastro'>
              <button className="btn btn-lg">Acesse o site</button>
              </Link>
            </div>
          </div>      
        </div>       
        <div className="col-sm-4 col-xs-12">
          <div className="panel panel-default text-center">
          <div className="panel-heading">
              <h1>Gigabyte</h1>
            </div>
            <div className="panel-body">
            <div className="panel-body">
              <img src={Prod3} alt="Produto 1" height="150px"/>
            </div>
            </div>
            <div className="panel-body">
              <p><strong>Placa de video geforce 4gb</strong></p>
              <p><strong>Nova</strong></p>
              <p><strong>1 Ano de garantia</strong></p>
            </div>
            <div className="panel-footer">
              <h3>R$1500</h3>
              <h4>Reais</h4>
              <Link to='/cadastro'>
              <button className="btn btn-lg">Acesse o site</button>
              </Link>
            </div>
          </div>      
        </div>    
      </div>
    </div>
  )
}