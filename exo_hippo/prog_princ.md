programme majeur
hippo1 : Hippopotamus
hippo2 : Hippopotamus
resultat : entier

debut:
    Affecter à hippo1 : new Hippopotamus("jean", "450", "42")
    Affecter à hippo2 : new Hippopotamus("jack", "600", "30")


    Affecter à resultat : hippo1.hippoVsHippo(hippo2)

    si resultat == 1
        Afficher "L'hippopotame 1 à gagné"
    autre si resultat == 2
        Afficher "L'hippopotame 2 à gagné"
    sinon
        Afficher "Leur force était la meme les deux sont mort"
    finsi


fin