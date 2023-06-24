import React, { useEffect, useState, useContext } from 'react'

import {listarFornecedores, criarFornecedor} from '../../infra/fornecedores'
import Fornecedor from '../../components/fornecedores/Fornecedor'

import { FornecedorContext } from '../../context/FornecedorContext'
import { isAuthenticated } from '../../infra/auth'

const Fornecedores = () => {

    const fornecedorTemp = {
        nome: "",
        tipoProduto: "",
        endereco: "",
        contatos: []
    }

    const {atualizar, setAtualizar} = useContext(FornecedorContext)

    const [listaFornecedores, setListaFornecedores] = useState([])
    const [novoFornecedor, setNovoFornecedor] = useState(fornecedorTemp)

    useEffect(() => {
        const fetchData = async() =>{
            const resp = await listarFornecedores();
            console.log(resp)
            setListaFornecedores(resp);
        }
        console.log(listaFornecedores)
         
        fetchData()

    },[atualizar])

    const mostrarLista = () => {
        return(
            listaFornecedores.map((fornecedor)=>{
                return(
                    <Fornecedor empresa={fornecedor} />
                )
            })
        )
    }

    const updateFieldHandler = (key, value) => {
        setNovoFornecedor((prevItem) => {
            return {...prevItem, [key]: value};
        });
    };

    const adicionarProduto = () => {
        criarFornecedor(novoFornecedor)
        setAtualizar(!atualizar)
    }

  return (
    <div>
        <h1>Página Fornecedores</h1>

        {!isAuthenticated() ? (
            <div>
                <h2>Lista de fornecedores</h2>
                <p>
                    Para vizualizar a lista e/ou adicionar novos fornecedores <br/>
                    você precisa efetuar o login.
                </p>
            </div>
        ) : (
            <>
                <div>
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        adicionarProduto();
                        setNovoFornecedor(fornecedorTemp);

                    }}>
                        <input 
                            type='text'
                            placeholder='Nome do fornecedor'
                            value={novoFornecedor.nome}
                            onChange={(e)=>updateFieldHandler("nome", e.target.value)}
                        />
                        <input 
                            type='text'
                            placeholder='Tipo de produto fornecido'
                            value={novoFornecedor.tipoProduto}
                            onChange={(e)=>updateFieldHandler("tipoProduto", e.target.value)}
                        />
                        <input 
                            type='text'
                            placeholder='Endereço do fornecedor'
                            value={novoFornecedor.endereco}
                            onChange={(e)=>updateFieldHandler("endereco", e.target.value)}
                        />

                        <input type='submit' value={"Adicionar"}/>
                    </form>
                </div>

                <div>
                    <h2>Lista de Fornecedores</h2>
                    {mostrarLista()}
                </div>
            </>
       )}
    </div>
  )
}

export default Fornecedores
