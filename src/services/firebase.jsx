import { initializeApp } from "firebase/app";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
} from "firebase/auth";
import { getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCeDfLJ8E3-lma6yg7XXByOoLjykznwBKo",
    authDomain: "react2022-a1969.firebaseapp.com",
    projectId: "react2022-a1969",
    storageBucket: "react2022-a1969.appspot.com",
    messagingSenderId: "625230012993",
    appId: "1:625230012993:web:c2138e282b5dd635a39cc0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getDatabase(app);

export const signUp = async (email, pass) => {
    await createUserWithEmailAndPassword(auth, email, pass);
};

export const logIn = async (email, pass) => {
    await signInWithEmailAndPassword(auth, email, pass);
};

export const logOut = async () => {
    await signOut(auth);
};

export const userRef = ref(db, "user");
export const userCheckedRef = ref(db, "user/checked");
export const chatsRef = ref(db, "chats");
export const getChatRefById = (id) => ref(db, `chats/${id}`);
export const msgsRef = ref(db, "messages");
export const getMsgsRefById = (chatId) => ref(db, `messages/${chatId}`);
export const getMsgsListRefById = (chatId) => ref(db, `messages/${chatId}/messageList`);

