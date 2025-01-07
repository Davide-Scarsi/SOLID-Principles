// 🔴 Senza DIP (funzionale) ---------------------------------------------------------------------------

const _database = {
    _connect: () => console.log('Connecting to database'),
};

const _createUser = () => {
    _database._connect();
    console.log('Creating user');
};

_createUser();

// In questo esempio la funzione _createUser dipende direttamente da un'implementazione specifica (l'oggetto database),
// che rende il codice difficile da testare e modificare.
// Se volessimo cambiare il database (ad esempio, passare a un altro sistema di archiviazione),
// dovremmo modificare direttamente la funzione createUser, il che viola il principio di inversione delle dipendenze.

// STRUTTURA

// 🔋.⚡()

// funzione 👨(){
//   🔋.⚡()
// } 

// 🟢 Con DIP (funzionale) ---------------------------------------------------------------------------

const connectToDatabase = () => console.log('Connecting to database');
const createUser = (connectFn) => {
    connectFn();
    console.log('Creating user');
};

createUser(connectToDatabase);

// Nel codice rivisitato, abbiamo separato la dipendenza in un parametro:
// la funzione createUser ora riceve un parametro (la funzione connectToDatabase) che può essere facilmente sostituito con altre implementazioni.
// Questo permette di cambiare la logica di connessione al database senza modificare la funzione createUser, rispettando il principio DIP.
// In questo modo, possiamo facilmente testare e sostituire le dipendenze, aumentando la flessibilità e la manutenibilità del codice.

// STRUTTURA

// ⚡()

// funzione 👨(🟡){
//   🟡()
// } 

// 👨(⚡)
