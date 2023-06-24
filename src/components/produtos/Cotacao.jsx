import React from 'react'

const Cotacao = ({nomeForecedor, preco}) => {
  return (
    <div className='div-container' style={{width: "50%"}} >

        <div className='div-campo'>
            <small className='chave'>Nome</small>
            <h3 className='valor'>{nomeForecedor}</h3>
        </div>

        <div className='div-campo'>
            <small className='chave'>Preço</small>
            <h3 className='valor'>R${preco}</h3>
        </div>

        <div className='div-btn' >
            <button className='btn'> excluir</button>
        </div> 
    </div>
  )
}

export default Cotacao
