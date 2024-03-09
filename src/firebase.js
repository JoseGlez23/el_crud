import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB1_XyGI2E3Vvr7SvrMSYRfDHFNbqso7AA",
  authDomain: "new-project-334f2.firebaseapp.com",
  databaseURL: "https://new-project-334f2-default-rtdb.firebaseio.com",
  projectId: "new-project-334f2",
  storageBucket: "new-project-334f2.appspot.com",
  messagingSenderId: "1079280201711",
  appId: "1:1079280201711:web:b81ce30e4767eb6419901a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);