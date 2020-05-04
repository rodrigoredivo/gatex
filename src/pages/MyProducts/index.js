import React from 'react'

import './styles.css';

export default function meusProduct() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card card-signin my-5">
            <div class="card-body">
              <h2 class="card-title text-center">Meus Produtos</h2>
              <form class="form-signin">
              <table class="table table-striped table-dark">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Tipo</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
              </form>
              <div className='jumbotronMyProducts text-center'>
                <p>Os produtos cadastrados na sua loja entram automaticamente na lista!<br />
                  caso falte algum, clique no botão atualizar<br />
                  para realizar uma nova requisição</p>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Atualizar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}