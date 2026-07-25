// Importações dos módulos do Firebase (versão modular compatível com Web)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Configuração extraída do seu google-services (6).json
const firebaseConfig = {
  apiKey: "AIzaSyACGn5I--vTEmJ6eijN2lytZiMgo2ElnW4",
  databaseURL: "https://vortexdev2-default-rtdb.firebaseio.com",
  projectId: "vortexdev2",
  storageBucket: "vortexdev2.firebasestorage.app"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, child };
