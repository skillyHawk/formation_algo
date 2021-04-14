programme majeur
chaine1: chaine
chaine2: chaine

debut:
<!-- Fonction manger fais prendre 1kg -->
    fonction eat()
    debut:
        Affecter à weight : weight + 1
    fin

<!-- Fonction nager fais perdre 300 grammes -->
    fonction swim()
    debut:
        Affecter à weight : weight - 0.3
    fin

<!-- Renvois les informations de l'hippo sous forme de text -->
    fonction hippoToString()
    debut:
        Afficher "L'hippopotame ayant pour nom " + str(this.name) + " pèse " + str(this.weight) + "kg et à des défenses de " + str(this.tusksSize) + "cm"
    fin

<!-- Combat entre hippo, si celui avant . gagne renvois 1, si l'autre gagne renvois 2, si égalité renvois 0 -->
    fonction hippoVsHippo(hippo)
    debut:
        Affecter à weight : weight - 0.3
        si this.tusksSize > hippo.tusksSize
            Afficher 1
        autre si this.tusksSize == hippo.tusksSize
            Afficher 0
        sinon
            Afficher 2
    fin

<!-- Fonction du cycle de vie de l'hippo -->
    fonction cycleDeVie()
    debut:
        pour i de 1 à 15:
            this.eat()
            this.eat()
            this.swim()
            this.swim()
            this.swim()
            wait(1h)
        finpour
    fin


<!-- Renvois les informations du point sous forme de text -->
    fonction pointToString()
    debut:
        Afficher "Le point à pour coordonnées " + str(this.X) + ";" + str(this.Y)
    fin

<!-- Renvois l'air du cercle -->
    fonction aeraCircle()
    debut:
        Afficher (pow(this.radius,2))*π
    fin

<!-- Regarde si le point appartient au cercle -->
    fonction containsPoint(point)
    debut:
        si sqrt(pow(point.getX-this.getX,2)+pow(point.getY-this.getY,2)) < this.radius:
            Afficher "Le point appartient au cercle"
        autre si sqrt(pow(point.getX-this.getX,2)+pow(point.getY-this.getY,2)) == this.radius:
            Afficher "Le point est sur le cercle"
        sinon
            Afficher "Le point est trop éloigné"
        finsi
    fin

<!-- Renvois les informations du cercle sous forme de text -->
    fonction circleToString()
    debut:
        Afficher "Le cercle à pour centre le point " + str(this.X) + ";" + str(this.Y) + " son rayon est de " + str(radius) + " et son aire est de " + str(this.aeraCircle())
    fin
fin