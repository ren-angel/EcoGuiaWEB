import React, { useState } from 'react';
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="container-login">
            <div className="container-eco">
                <img 
                    src='/img/img-fazer-login.svg' alt='imagem-login' className='imgum-telalogin' />

                <div className="container-cadastro">
                    <img src='/img/logo-telalogin.svg' alt='logo' className='logo-telalogin' />
                    <h2>Faça login!</h2>
                    
                    <>
                        <input type="text" id="input-email" className="cad-input" placeholder="seuemail@ecoguia.com" />
                        <input type="password" id="input-senha" className="cad-input-senha" placeholder="Senha" />
                        <Link className="link-esqueci-senha" to="/TelaEsqueciSenha">Esqueci a senha</Link>
                        <Link className="btn-confirmar" to="/Crud" onClick={ localStorage.setItem('logado', true) }>Entrar</Link>
                    </>
                </div>
            </div>
        </div>
    );
}

export default Login;
