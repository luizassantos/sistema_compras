import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'

import { listarContatosPorFornecedor, criarContato } from '../../infra/contatos'

import Contato from '../../components/fornecedores/Contato'

import { isAuthenticated } from '../../infra/auth'

const Contatos = () => {
    
    const parametroFornId = useParams()

    const contatoTemp = {
        nome: "",
        telefone: "",
        email:"",
        fornecedorId: parametroFornId.id
    }

    const [contatos, setContatos] = useState([])
    const [novoContato, setNovoContato] = useState(contatoTemp)
    const [atualizarContatos, setAtualizarContatos] = useState(false)


    useEffect(() => {
        const fetchData = async() =>{
            const resp = await listarContatosPorFornecedor(parametroFornId.id);
            console.log(resp)
            setContatos(resp);
        }

        fetchData()
    },[atualizarContatos])

    const mostrarListaContatos = () => {
        return(
            contatos.map((contato) => {
                return(
                   <Contato 
                        contato={contato} 
                        setAtualizar={setAtualizarContatos} 
                        atualizar={atualizarContatos} 
                    /> 
                )
            })
        )
    }

    const updateFieldHandler = (key, value) => {
        setNovoContato((prevItem) => {
            return {...prevItem, [key]: value};
        });
    };

    const adicionarContato = () => {
        criarContato(novoContato)
        setAtualizarContatos(!atualizarContatos)

    }

  return (
    <div>
      <h1>Página Contatos</h1>

      {!isAuthenticated() ? (
            <div>
                <h2>Área Restrita</h2>
                <p>Para acessar, você precisa estar logado.</p>
            </div>

      ): (

        <>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    adicionarContato();
                    setNovoContato(contatoTemp)
                }}>
                    <input 
                        type='text'
                        placeholder='Nome do vendedor'
                        value={novoContato.nome}
                        onChange={(e)=>updateFieldHandler("nome", e.target.value)}
                    />
                    <input 
                        type='text'
                        placeholder='Telefone'
                        value={novoContato.telefone}
                        onChange={(e)=>updateFieldHandler("telefone", e.target.value)}
                    />
                    <input 
                        type='text'
                        placeholder='E-mail'
                        value={novoContato.email}
                        onChange={(e)=>updateFieldHandler("email", e.target.value)}
                    />

                    <input type='submit' value={"Adicionar"}/>
                </form>
            </div>

            <h4>Lista de contatos:</h4>
            {mostrarListaContatos()}
        </>
        )}

    </div>
  )
}

export default Contatos
