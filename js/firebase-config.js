import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyACGn5I--vTEmJ6eijN2lytZiMgo2ElnW4",
  databaseURL: "https://vortexdev2-default-rtdb.firebaseio.com",
  projectId: "vortexdev2",
  storageBucket: "vortexdev2.firebasestorage.app"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };
