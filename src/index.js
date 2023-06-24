import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserProvider } from './context/UserContext';
import { FornecedorProvider } from './context/FornecedorContext';

import Login from './acesso/Login';
import Cadastro from './acesso/Cadastro';
import Fornecedores from './pages/fornecedores/Fornecedores';
import Produtos from './pages/produtos/Produtos';
import Contatos from './pages/contatos/Contatos';

import Cotacoes from './pages/cotacoes/Cotacoes';
import NaoEncontrada from './pages/notFound/NaoEncontrada';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "fornecedores",
        element: 
          <FornecedorProvider> 
            <Fornecedores /> 
          </FornecedorProvider>
      },
      {
        path: "fornecedores/:id/contatos",
        element: <Contatos />
      },
      {
        path: "produtos",
        element: <Produtos />
      },
      {
        path: "cotacoes",
        element: <Cotacoes />
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path:'*',
    element: <NaoEncontrada />
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </UserProvider>
  </React.StrictMode>
);