// 🔴 Senza OCP (funzionale) ---------------------------------------------------------------------------

let _product = { price: 100 };

const _calculatePrice = (_product, type) => {
    if (type === 'regular') {
        return _product.price;
    } else if (type === 'discounted') {
        return _product.price * 0.9;
    }
};

console.log(_calculatePrice(_product, 'regular')); // 100
console.log(_calculatePrice(_product, 'discounted')); // 90

// In questo esempio senza OCP, la funzione _calculatePrice è rigida:
// se vogliamo aggiungere una nuova modalità di calcolo (ad esempio, un'altra sconto), dobbiamo modificare direttamente la funzione.
// Questo viola il principio di apertura/chiusura, in quanto il codice non è chiuso per le modifiche.

// STRUTTURA:

// 📦 prezzo 🪙🪙🪙

// funzione 📃(🔵){
//  if(🔵 == 🍯) return 🪙
//  if(🔵 == 📦) return 🪙🪙🪙
// }

// 📃(📦) ottieni 🪙🪙🪙

// 🟢 Con OCP (funzionale) ---------------------------------------------------------------------------

let product = { price: 100 };

const regularPrice = (product) => product.price;
const discountedPrice = (product) => product.price * 0.8;

const calculatePrice = (product, priceStrategy) => priceStrategy(product);

console.log(calculatePrice(product, regularPrice)); // 100
console.log(calculatePrice(product, discountedPrice)); // 80

// Nel codice rivisitato, la funzione calculatePrice riceve una "strategia di prezzo" come parametro, che può essere cambiata senza modificare la logica interna.
// In questo modo, possiamo aggiungere nuove strategie di calcolo del prezzo (ad esempio, un altro tipo di sconto) semplicemente creando nuove funzioni per la strategia e passandole alla funzione calculatePrice.
// Il codice è quindi "aperto" ad estensioni, ma "chiuso" a modifiche, rispettando l'OCP.

// STRUTTURA:

// 📦 prezzo 🪙🪙🪙🪙🪙

// 🪚() -> ottieni 80%
// 🔧() -> ottieni 100%

// funzione 📃(🔵, 🔧){
//  🔧(🔵)
// }

// 📃(📦, 🔧) ottieni 🪙🪙🪙🪙🪙