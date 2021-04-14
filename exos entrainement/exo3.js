const scanf = require('scanf');

let nombre=0, indice=0, moyenne=0, total=0;
tableau = new Array(5);

/*On demande à l'utilisateur d'entrer une valeur d'entier pour chaque valeur de la taille du tableau */
for(i=0; i < tableau.length; i++){
    console.log(`Entrez le nombre de la position : ${i} du tableau`);
    tableau[i] = scanf('%d');
}
console.log(`Votre tableau est : ${tableau} `)
/*On fait une boucle for pour
    : trouver l'indice de la plus grande valeur du tableau
    : obtenir le total des valeurs contenues dans le tableau afin de calculer la moyenne
*/
for(i=0; i < tableau.length; i++){
    if(tableau[i] > nombre){
        indice = i;
        nombre = tableau[i];
    }
    total = total + tableau[i];
}
/* On affiche l'indice précédement trouvé avec sa valeur et on affiche la moyenne à partir de la variable total */
console.log(`l'indice de la plus grande valeur du tableau est : ${indice} et sa valeur est : ${tableau[indice]}`);
console.log(`La moyenne est : ${total/tableau.length}`);