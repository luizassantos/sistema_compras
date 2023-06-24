
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

import { signOut } from 'firebase/auth';
import { auth } from '../infra/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

export const cadastrarUsuario = async (email, password, tipoUsuario) => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            const user = userCredential.user;
            const userData = {
                email: user.email,
                tipoUsuario: tipoUsuario
            };
            await addDoc(collection(db, "usuarios"), userData);
            alert("Casdastro criado com sucesso! Volte à página de login para acessar sua conta.");
            console.log("Cadastro: ", user);
            return user;

        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMsg = err.message;
            console.log(errorCode, errorMsg);
            alert("Cadastro não pôde ser efetuado");
        })
}

export const loginAuth = async (email, password, setUser) => {
    await signInWithEmailAndPassword(auth, email, password,)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user));
            console.log(user);
            setUser(user)
        })
        .catch((err) => {
            const errorCode = err.code;
            const errorMsg = err.message;
            console.log(errorCode, errorMsg);
            alert("Login Inválido");
        })
}

export const getCurrentUser = () => {
  const storedUser = localStorage.getItem('user');

  if (storedUser) {
    const user = JSON.parse(storedUser);
    return user;
  }

  return null;
};

export const isAuthenticated = () => {
  const currentUser = getCurrentUser();
  return currentUser !== null;
};
 
export const logout = () =>{
    return signOut(auth)
}