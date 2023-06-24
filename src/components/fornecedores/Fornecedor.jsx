import React, {useContext} from 'react'

import { deletarFornecedor } from '../../infra/fornecedores'
import { deletarContatosDoFornecedor } from '../../infra/contatos'

import { FornecedorContext } from '../../context/FornecedorContext'

import './styles.css'

const Fornecedor = ({ empresa }) => {

    const {atualizar, setAtualizar} = useContext(FornecedorContext)

    const handleDeleteButton = () => {
        deletarFornecedor(empresa.id)
        deletarContatosDoFornecedor(empresa.id)

        setAtualizar(!atualizar)
    }

  return (
    <div key={empresa.id}
        className='div-container'>
            <div className='div-campo'>
                <small className='chave'>Nome</small>
                <h3 className='valor'>{empresa.nome}</h3>
            </div>
            <div className='div-campo'>
                <small className='chave'>Tipo de produtos</small>
                <p className='valor'>{empresa.tipoProduto}</p>
            </div>
            <div className="div-campo">
                <small className='chave'>Endereço</small>
                <p className='valor'>{empresa.endereco}</p>
            </div>
            <div className='div-btn'>
                <button className='btn' onClick={handleDeleteButton}>excluir</button>
                <a className='btn-a' href={`/fornecedores/${empresa.id}/contatos`}>Ver contatos</a>
            </div>
    </div>
  )
}

export default Fornecedor
