import { addDoc, collection, doc, getFirestore, limit, orderBy, query, setDoc, updateDoc } from 'firebase/firestore';
import app from '@/plugin/FirebaseConfig';
import FirebaseColletion from '@/constants/FirebaseCollection';
const db = getFirestore(app);

export const saveMessage = async (data: {name: string; text: string; }) => {
   try {
        // criar uma referencia para a colecao de mensagens
        const message = await doc(db, FirebaseColletion.MESSAGES);

        // adicionar uma mensagem
        await setDoc(message, {
            id: message.id,
            name: data.name,
            text: data.text,
            createdAt: new Date()
        })
   } catch (error) {
      console.log(error);
   }
};

export const getMessages = async () => {
    const recentMessagesQuery = query(collection(db, FirebaseColletion.MESSAGES), 
                                orderBy('createdAt', 'desc'), 
                                limit(12));

    // const snapshot = await recentMessagesQuery.get();

    // const messages = snapshot.docs.map(doc => {
    //     const data = doc.data();
    //     return {
    //         id: doc.id,
    //         name: data.name,
    //         text: data.text,
    //         createdAt: data.createdAt.toDate()
    //     }
    // });

    // onSnapshot(recentMessagesQuery, (snapshot) => {
    //     snapshot.docChanges().forEach(change => {
    //         if (change.type === 'added') {
    //             console.log(change.doc.data());
    //         }
    //     });
    // });
}

export const updateMessage = async (data: {id: string; text: string; }) => {
    try {
        // criar uma referencia para a colecao de mensagens
        const messageRef = await doc(db, FirebaseColletion.MESSAGES, data.id);

        // adicionar uma mensagem
        await updateDoc(messageRef, {
            text: data.text,
            
        })
    } catch (error) {
       console.log(error);
    }

 }

export default db; 
