/* Fonction du cycle de vie de l'hippo */
function cycleDeVie(){
    for(i=0; i<15; i++){
        this.eat()
        this.eat()
        this.swim()
        this.swim()
        this.swim()
        /* wait(1h) */
    }
}