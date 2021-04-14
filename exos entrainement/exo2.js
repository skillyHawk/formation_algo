const scanf = require('scanf');
let nombre = 0;
let total = 0;
while(nombre <= 1){
    console.log("Entrez un nombre suppérieur à 1 :");
    nombre = scanf('%d');
    if(nombre <=1) console.log("le nombre entré ne respecte pas les conditions veuillez reessayer")
}
console.log(`Votre noombre est : ${nombre}`);
for(i=1 ; i<=nombre;i++){
    total = total + i;
}
console.log(`La somme de 1 à ${nombre} vaut ${total}`);