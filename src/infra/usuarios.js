import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./firebase";


export const buscarUsuario = async (email) =>{
    const usersCollectionRef = collection(db, 'usuarios');
    const q = query(usersCollectionRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      const userData = userDoc.data();
      const tipo = userData.tipoUsuario
      return tipo

    } else {
      console.log('Usuário não encontrado');
    }
};