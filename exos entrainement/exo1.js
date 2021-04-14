const scanf = require('scanf');
console.log("Entrez une première chaine de carractères :");
let chaine1 = scanf('%s');
console.log(`Votre première chaine est: ${chaine1}, ${chaine1.length} caractères`);

console.log("Entrez une seconde chaine de carractères :");
let chaine2 = scanf('%s');
console.log(`Votre seconde chaine est: ${chaine2}, ${chaine2.length} caractères`);

if(chaine1.length > 2*chaine2.length) console.log("La première chaine entrée est deux fois plus longue que la seconde");
else if(chaine1.length < 2*chaine2.length) console.log("La première chaine entrée n'est pas deux fois plus longue que la seconde");
else console.log("La seconde chaine fais la moitier de la taille de la première");