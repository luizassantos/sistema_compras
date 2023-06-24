import React from 'react'
import Cotacao from '../../components/produtos/Cotacao';

const Cotacoes = () => {
  return (
    <div>
      <h1>Cotações</h1>
      <Cotacao nomeForecedor={"Amazon"} preco={"200"}/>
    </div>
  )
}

export default Cotacoes;
