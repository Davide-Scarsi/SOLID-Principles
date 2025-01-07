// 🔴 Senza ISP (funzionale) ---------------------------------------------------------------------------

const _worker = {
    _work: () => console.log('Working'),
    _eat: () => console.log('Eating'),
};

const _robot = {
    _work: () => console.log('Robot working'),
    _eat: () => { throw new Error('Robots do not eat'); },
};

const _doWork = (entity) => entity.work();
const _doEat = (entity) => entity.eat();

_doWork(_worker);  // Working
_doEat(_worker);   // Eating

_doWork(_robot);   // Robot working
_doEat(_robot);    // Error

// In questo esempio, la funzione doEat è chiamata anche per il _robot, ma i robot non mangiano, quindi si verifica un errore.
// Questo succede perché la stessa interfaccia (in questo caso, l'oggetto worker) include metodi che non si applicano a tutte le implementazioni
// (come il metodo _eat per il _robot). Questo viola il principio di segregazione dell'interfaccia.

// STRUTTURA

// 👷‍♂️.🔨()
// 👷‍♂️.🍰()

// 🤖.🔨()
// 🤖.🍰() -> ERRORE

//🔨(🔵) -> 🔵.🔨()
//🍰(🔵) -> 🔵.🍰()

//🔨(👷‍♂️) ✅
//🔨(🤖) ✅

//🍰(👷‍♂️) ✅
//🍰(🤖) ❌


// 🟢 Con ISP (funzionale) ---------------------------------------------------------------------------

const work = (entity) => entity.work();
const eat = (entity) => {
    if (typeof entity.eat === 'function') {
        entity.eat();
    } else {
        console.log('This entity does not eat.');
    }
};

const worker = {
    work: () => console.log('Working'),
    eat: () => console.log('Eating'),
};

const robot = {
    work: () => console.log('Robot working'),
};

const human = {
    work: () => console.log('Human working'),
    eat: () => console.log('Eating'),
};

work(worker);  // Working
eat(worker);   // Eating

work(robot);   // Robot working
// eat(robot);  // Error, no eat method for robot

//Nel codice rivisitato, abbiamo separato le funzioni work ed eat in "interfacce" separate,
// consentendo a ogni tipo di entità di implementare solo le funzionalità che le competono.
// In questo caso, il robot ha solo il metodo work, e non ha bisogno di un metodo eat.
//Questo evita l'errore e segrega le funzionalità in base alle necessità di ogni entità, rispettando ISP.

// STRUTTURA

//🔨(🔵) -> 🔵.🔨()
//🍰(🔵) -> 🔵.🍰(){🍰?✅:❗}

// 👷‍♂️.🔨()
// 👷‍♂️.🍰()

// 🤖.🔨()

// 👨.🔨()
// 👨.🍰()


//🔨(👷‍♂️) ✅
//🍰(👷‍♂️) ✅

//🔨(🤖) ✅
//🍰(🤖) ❗
