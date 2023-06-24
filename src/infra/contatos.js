import { collection, getDocs, query, where, deleteDoc, doc, updateDoc, addDoc } from "firebase/firestore";
import { db } from "./firebase";

export const listarContatos = async () => {
    const doc_refs = await getDocs(collection(db, "contatos"));
    const retorno = [];
    doc_refs.forEach(contato => {
        retorno.push({id:contato.id, ...contato.data()});
    });
    return retorno;
}

export const listarContatosPorFornecedor = async (fornecedorId) => {

    const collection_ref = collection(db, "contatos");
    const q = query(collection_ref, where("fornecedorId", "==", fornecedorId));
    const doc_refs = await getDocs(q);

    const retorno = [];
    doc_refs.forEach(contato => {
        retorno.push({id:contato.id, ...contato.data()});
    });
    return retorno;
}

export const deletarContatosDoFornecedor = async (fornecedorId) => {
    const contatosQuery = query(collection(db, 'contatos'), where('fornecedorId', '==', fornecedorId));
    const snapshot = await getDocs(contatosQuery);
  
    snapshot.forEach((contato) => {
      const contatoRef = doc(db, 'contatos', contato.id);
      deleteDoc(contatoRef);
    });
};

export const criarContato = async (contato) => {
    const newContato = contato
    try {
        await addDoc(collection(db, "contatos"), newContato);
    } catch (error) {
        console.error("Erro: ", error)
    }
}

export const deletarContato = async (id) =>{
    const task_doc = doc(db, "contatos", id);
    return  deleteDoc(task_doc);    
}


export const editarContato = async (title, description, id) =>{
    await updateDoc(doc(db,'contatos', id), {title, description})
}
