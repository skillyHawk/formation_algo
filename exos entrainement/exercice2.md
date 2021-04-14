programme majeur
nombre: entier
total: entier

debut:
Affecter à total : 0
<!-- On demande à l'utilisateur un nombre -->
    repeter
	    afficher "Entrez un nombre"
	    saisir nombre
    jusqua nombre > 1
<!-- On fait la somme de 1 au nombre entré par l'utilisateur -->
	pour x de 1 a nombre
		Affecter à total : total + x
	finpour
<!-- On affiche le total de la somme -->
    afficher total
fin