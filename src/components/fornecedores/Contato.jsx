import React from 'react'

import { deletarContato } from '../../infra/contatos'

const Contato = ({contato , setAtualizar, atualizar}) => {

    const handleDeleteButton = () => {
        deletarContato(contato.id)
        setAtualizar(!atualizar)
    }

  return (
    <div key={contato.id}
        className='div-container'    
    >
        <div className='div-campo'>
            <small className='chave'>Nome</small>
            <h3 className='valor'>{contato.nome}</h3>
        </div>
        <div className='div-campo'>
            <small className='chave'> Telefone</small>
            <p className='valor'>{contato.telefone}</p>
        </div>
        <div className='div-campo'>
            <small className='chave'>E-mail</small>
            <p className='valor'>{contato.email}</p>
        </div>
    
      <div className='div-btn'>
        <button className='btn' onClick={handleDeleteButton}>excluir</button>
      </div>

    </div>
  )
}

export default Contato
