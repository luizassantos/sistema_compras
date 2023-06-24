import React, { useContext, useEffect, useState } from "react";

import { Link, Navigate } from "react-router-dom";

import { getCurrentUser, isAuthenticated } from "../infra/auth";
import {UserContext} from '../context/UserContext'
import { loginAuth } from "../infra/auth";

import './styles.css'

const Login = () => {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const {setUser, user} = useContext(UserContext)

    useEffect(() => {
        getCurrentUser()
    },[user])

    const fazerLogin = () =>{
        loginAuth(userEmail,userPassword, setUser);
    }

    return(
        <div className="login-container">
            <h1 className="h1-title">Login</h1> 

            {isAuthenticated() ? (
                <Navigate to="/fornecedores" />
            ) : (
                <form onSubmit={(e) => {
                    e.preventDefault();
                    fazerLogin();
                    }}
                > 
                    <div className="input-container">
                        <label htmlFor="email-login" className="label-login">E-mail</label>
                        <input id="email-login" className="input-login"
                            type="text"
                            placeholder="Seu e-mail"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                    
                    <div className="input-container">
                        <label htmlFor="password-login" className="label-login">Senha</label>
                        <input id="password-login" className="input-login"
                            type="password" 
                            placeholder="Sua senha"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </div>
    
                    <div className="btn-login-container">
                        <input className="btn-login" type="submit" value={"Entrar"}/> 
    
                        <button className="btn-login" >
                            <Link style={{textDecoration:"none", color:'#fff'}} to={"/cadastro"} >Criar Conta</Link>
                        </button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default Login;