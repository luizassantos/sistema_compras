import React, { useState } from "react";
import { cadastrarUsuario } from "../infra/auth";


const Cadastro = () => {
    
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfPassword, setUserConfPassword] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState("");

    async function createAccount(){
        if(userPassword === userConfPassword){
            console.log(tipoUsuario)
            cadastrarUsuario(userEmail,userPassword,tipoUsuario)
        } else {
            alert("As senhas devem ser iguais!")
        }
    } 


    return(
        <div className="login-container">
            <h1 className="h1-title">Cadastro</h1> 

            <form onSubmit={(e) => {
                e.preventDefault();
                createAccount();
                }}
            > 
                
                <div className="input-container">
                    <label htmlFor="email-cadastro" className="label-login">E-mail</label>
                    <input id="email-cadastro" className="input-login"
                        type="text"
                        placeholder="Seu e-mail" 
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}/>
                </div>
                
                <div className="input-container">
                    <label htmlFor="password-cadastro" className="label-login">Senha</label>
                    <input id="password-cadastro" className="input-login"
                        type="password" 
                        placeholder="Sua senha" 
                        value={userPassword}
                        onChange={(e) => setUserPassword(e.target.value)}/>
                </div>

                <div className="input-container">
                    <label htmlFor="confpassword-cadastro" className="label-login">Confirmar Senha</label>
                    <input id="confpassword-cadastro" className="input-login"
                        type="password"
                        placeholder="Sua senha" 
                        value={userConfPassword}
                        onChange={(e) => setUserConfPassword(e.target.value)}/>
                </div>  

                <div style={{display:'flex', height:"35px", alignItems:"center"}}>
                    <p style={{marginRight:'10px'}}>Você é:</p>
                    <select onChange={(e)=>setTipoUsuario(e.target.value)}>
                        <option value={""}>Selecione</option>
                        <option value={"admin"}>Adiministrador</option>
                        <option value={"gerente"}>Gerente de compras</option>
                    </select>
                </div>

                <div className="btn-login-container">
                    <input className="btn-login" type="submit" value={"Cadastrar"}/>
                </div>
            </form>
        </div>

    )
}

export default Cadastro;