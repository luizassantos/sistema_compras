import React from 'react'
import '../fornecedores/styles.css'

const Produto = ({nome}) => {
  return (
    <div className='div-container' style={{width: "30%"}} >
        <div className='div-campo'>
            <small className='chave'>Nome</small>
            <h3 className='valor'>{nome}</h3>
        </div>

        <div className='div-btn' >
            <button className='btn' >excluir</button>
            <a className='btn-a' href={"/cotacoes"}>Ver cotações</a>
        </div>        
    </div>
  )
}

export default Produto
