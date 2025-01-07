// 🔴 Senza SRP (funzionale) ---------------------------------------------------------------------------

let _user = {
    name: 'John',
    email: 'john@example.com'
};

const _sendEmail = (email) => console.log(`Sending email to ${email}`)

const _saveToDatabase = (user) => console.log(`Saving ${user.name} to database`)


const _manageUser = (user) => {
    console.log(`User: ${user.name}`); // Gestisce la logica dell'utente
    _sendEmail(user.email); // Gestisce la logica per l'email
    _saveToDatabase(user); // Gestisce la logica di salvataggio
};

_manageUser(_user);

// In questo esempio, la funzione _manageUser è responsabile di troppo: gestisce la logica dell'utente, invia un'email e salva l'utente nel database.
// Tutte queste operazioni sono mescolate in un unico posto, il che rende il codice difficile da mantenere e estendere.
// Se volessimo modificare una di queste operazioni (ad esempio, cambiare il modo in cui inviamo le email), dovremmo modificare la funzione _manageUser,
// che è troppo generica e ha troppe responsabilità.

// STRUTTURA:

// 👨
// 📨(🔵)
// 💾(🔵)

// funzione ⚙️ (👨){
//  📨(👨)
//  💾(👨)
// }

// ⚙️(👨)

// 🟢 Con SRP (funzionale) ---------------------------------------------------------------------------

let user = {
    name: 'John',
    email: 'john@example.com'
};

const sendEmail = (email) => {
    console.log(`Sending email to ${email}`)
};
const saveToDatabase = (user) => {
    console.log(`Saving ${user.name} to database`)
};

const manageUser = (user, sendEmailFn, saveToDatabaseFn) => {
    console.log(`User: ${user.name}`);
    sendEmailFn(user.email);
    saveToDatabaseFn(user);
};

manageUser(user, sendEmail, saveToDatabase);

// Abbiamo suddiviso le diverse responsabilità in funzioni separate: sendEmail si occupa solo di inviare l'email e saveToDatabase si occupa solo di salvare l'utente nel database.
// La funzione manageUser ora diventa molto più semplice, e le altre funzioni possono essere modificate indipendentemente senza impattare il resto del codice.
//Questo rende il codice più chiaro e facilmente manutenibile.

// STRUTTURA:

// 👨
// 📨(🔵)
// 💾(🔵)

// funzione ⚙️(1️⃣,🟡,🟡){
//  1️⃣
//  🟡(👨)
//  🟡(👨)
// }

// ⚙️(👨,📨,💾)

