programme majeur
chaine1: chaine
chaine2: chaine

debut:
<!-- On demande à l'utilisateur d'entrer deux chaines -->
	afficher "Entrez une chaine"
	saisir chaine1
	afficher "Entrez une seconde chaine"
	saisir chaine2

<!-- On regarde si la chaine 1 est deux fois plus longue que la chaine 2 -->
	si logueur(chaine1) > 2*longueur(chaine2)
		afficher "la chaine 1 est deux fois plus longue que la chaine 2"
	sinon
		afficher "la chaine 1 n'est pas strictement deux fois plus longue que la chaine 2"
	finsi
fin