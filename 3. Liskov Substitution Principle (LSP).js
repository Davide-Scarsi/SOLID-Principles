// 🔴 Senza LSP (funzionale) ---------------------------------------------------------------------------

const _fly = () => {console.log('Flying')};
const _run = () => {console.log('Running')};

const _makeMove = (bird) => {
    if (bird === 'flying') {
        _fly();
    } else if (bird === 'ostrich') {
        throw new Error('Ostriches cannot fly');
    }
};

_makeMove('flying');  // Flying
_makeMove('ostrich');  // Error

// In questo esempio, se tentiamo di sostituire un oggetto Bird con un oggetto Ostrich,
// si verifica un errore, poiché gli struzzi non possono volare,
// ma la classe Bird assume che tutti gli oggetti possano volare.
// Questo viola il principio di sostituzione di Liskov,
// che afferma che un oggetto derivato dovrebbe poter essere utilizzato al posto del suo tipo base senza causare problemi.

// STRUTTURA:

// 🪽()
// 🏃‍♂️‍➡️()

// funzione (🦜){
//  if(🦜 == 🪶) 🪽()
//  if(🦜 == 🦵) 🏃‍♂️‍➡️()
// }

// 🟢 Con LSP (funzionale) ---------------------------------------------------------------------------


const flyingBird = { move: () => console.log('Flying') };
const ostrich = { move: () => console.log('Running') };

const move = (animal) => animal.move();

move(flyingBird);  // Flying
move(ostrich);     // Running

// Nel codice rivisitato, gli animali sono trattati in modo polimorfico, ma la logica di movimento è separata:
// gli uccelli che volano e gli struzzi che corrono sono entrambi trattati come oggetti con un metodo move.
// Questo garantisce che gli oggetti possano essere sostituiti senza causare errori, rispettando LSP.
// Ogni tipo di "movimento" è trattato come una funzionalità indipendente, evitando l'errore dell'esempio precedente.

// STRUTTURA:

//  🦜.🦶 = 🪽()
//  🐒.🦶 = 🏃‍♂️‍➡️()

//  funzione 🦶(🔵){
//      🔵.🦶()
//  }

//  🦶(🐒) e ottieni 🏃‍♂️‍➡️()
//  🦶(🦜) e ottieni 🪽()