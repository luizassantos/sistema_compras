import { collection, getDocs, deleteDoc, doc, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const listarFornecedores = async () => {
    const doc_refs = await getDocs(collection(db, "fornecedores"));
    const retorno = [];
    doc_refs.forEach(fornecedor => {
        retorno.push({id:fornecedor.id, ...fornecedor.data()});
    });
    return retorno;
}

export const criarFornecedor = async (fornecedor) => {
    const newFornecedor = fornecedor
    try {
        await addDoc(collection(db, "fornecedores"), newFornecedor);
    } catch (error) {
        console.error("Erro: ", error)
    }
}

export const deletarFornecedor = async (id) =>{
    const task_doc = doc(db, "fornecedores", id);
    return  deleteDoc(task_doc);    
}


