import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css';

export default function Login() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h2 class="card-title text-center">Cadastro</h2>
              <form class="form-signin">
                <div class="form-label-group">
                  <input type="text" id="inputNome" class="form-control" placeholder="Nome" required autofocus/>
                  <label for="inputNome">Nome</label>
                </div>

                <div class="form-label-group">
                  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
                  <label for="inputEmail">Email</label>
                </div>

                <div class="form-label-group">
                  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
                  <label for="inputPassword">Senha</label>
                </div>

                <div class="form-label-group">
                  <input type="text" id="inputCpfCnpj" class="form-control" placeholder="Password" required/>
                  <label for="inputCpfCnpj">CPF/CNPJ</label>
                </div>

                <div class="custom-control custom-checkbox mb-3">
                  <input type="checkbox" class="custom-control-input" id="customCheck1"/>
                  <label class="custom-control-label" for="customCheck1">Remember password</label>
                </div>
                <Link to='/cadastro'>
                <button class="btn btn-lg btn-primary btn-block text-uppercase" type="button">Cadastre-se</button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}