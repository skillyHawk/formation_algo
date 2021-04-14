programme majeur
nombre: entier
tableau[0..4]: entier
indice: entier
moyenne: float
total: entier

debut:
<!-- On demande à l'utilisateur d'entrer une valeur d'entier pour chaque valeur de la taille du tableau -->
	pour i de 0 a 4
		afficher "Entrez un nombre à mettre dans le tableau"
		saisir nombre
		Affecter à tableau[i] : nombre
	finpour
<!-- Reset de la valeur de "nombre" pour réutiliser la variable -->
	Affecter à nombre : 0
<!-- On fait une boucle for pour
    : trouver l'indice de la plus grande valeur du tableau
    : obtenir le total des valeurs contenues dans le tableau afin de calculer la moyenne
 -->
	pour i de 0 a 4
		si tableau[i] > nombre
			Affecter à indice : i
            Affecter à nombre : tableau[i]
		finsi
		Affecter à total : total + tableau[i]
	finpour
<!-- On affiche l'indice précédement trouvé avec sa valeur et on affiche la moyenne à partir de la variable total -->
	afficher "l'indice de la plus grande valeur du tableau est :" + str(indice) + " et sa valeur est : " + str(tableau[indice])
	afficher "La moyenne est :" + str(total/5)
fin