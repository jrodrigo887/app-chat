import { addDoc, collection, getFirestore } from 'firebase/firestore/lite';
import app from '@/plugin/FirebaseConfig';
import FirebaseColletion from '@/constants/FirebaseCollection';
const db = getFirestore(app);

export const saveMessage = async (data: {name: string; text: string; }) => {
   try {
        await addDoc(collection(db, FirebaseColletion.MESSAGES), {
            name: data.name,
            text: data.text,
            createdAt: new Date()
        })
   } catch (error) {
      console.log(error);
   }
}; 

export default db; 
