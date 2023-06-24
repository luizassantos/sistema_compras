import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import './Navbar.css'
import { isAuthenticated, logout } from '../../infra/auth';

import { buscarUsuario } from '../../infra/usuarios';
import {getCurrentUser} from '../../infra/auth'

const Navbar = () => {

    const [usuarioAdmin, setUsuarioAdmin] = useState(false)
    const [usuarioGerente, setUsuarioGerente] = useState(false)

    const handleLogoutClick = () => {
        logout().then(() => {
            localStorage.removeItem('user');
        })
    }

    useEffect(() => {
        const usuarioLogado = getCurrentUser().email
        const getUsuario = async() => {
           const tipoUsuario = await buscarUsuario(usuarioLogado)

           if(tipoUsuario === "admin"){
               setUsuarioAdmin(true);
               setUsuarioGerente(false)
           } else if (tipoUsuario === "gerente"){
               setUsuarioGerente(true);
               setUsuarioAdmin(false);
           }
        }
         getUsuario()
         

    },[])
  
  return (
    <nav className='navbar-container' style={{backgroundColor:"green"}}>
      <ul className='navbar-ul' >
        <div className='navbar-div'>

            {(isAuthenticated() && usuarioAdmin) && (
                <>
                    <li className='pages-link'>
                        <Link className='pages-link' to="/fornecedores">FORNECEDORES</Link>
                    </li>
                </>
            )}
            {(isAuthenticated() && usuarioGerente) && (
                <>
                    <li className='pages-link'>
                        <Link className='pages-link' to="/fornecedores">FORNECEDORES</Link>
                    </li>
                    <li className='pages-link'>
                        <Link className='pages-link' to="/produtos">PRODUTOS</Link>
                    </li>
                </>
            )}

            </div>

            <li className='logo'>
                <Link to="/" className='logo' > Sistema de Compras </Link>
            </li>

            {isAuthenticated() ? (
                <div className='navbar-div'>
                <li className='li-sair'>
                    <a href="/login" onClick={handleLogoutClick}> Sair </a> 
                </li>
                </div>
            ) : (
            <div className='navbar-div'>
                <li className='li-item li-sair'>
                    <Link  to="/login">Login</Link>
                </li>
            </div>
            )}
      </ul>
    </nav>
  )
}

export default Navbar
