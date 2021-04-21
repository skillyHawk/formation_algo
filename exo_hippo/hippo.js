class Hippopotamus{
    constructor(name, weight, tusksSize){
        this.name = name;
        this.weight = weight;
        this.tusksSize = tusksSize;
    }
    /*Fonction manger fais prendre 1kg*/
    eat(){
        this.weight += 1;
    }
    /* Fonction nager fais perdre 300 grammes */
    swim(){
        this.weight -= 0.3;
    }
    /* Renvois les informations de l'hippo sous forme de text */
    toString(){
        return `L'hippopotame ayant pour nom ${this.name}, pèse ${this.weight} et à des défenses de ${this.tusksSize} cm` ;
    }
    /* Combat entre hippo, si celui avant . gagne renvois 1, si l'autre gagne renvois 2, si égalité renvois 0 */
    hippoVsHippo(hippo){
        if(this.tusksSize > hippo.tusksSize) return 1;
        else if(this.tusksSize == hippo.tusksSize) return 0;
        else return 2;
    }
    cycleDeVie(){
        for(let i = 1; i<=22;i++){
            for(let j=0; j<15; j++){
                this.eat();
                this.eat();
                this.swim();
                this.swim();
                this.swim();
                await sleep(3600000);/* wait(1h) */
            }
            console.log(this.toString());
            await sleep(32400000);/* wait 9 heures */
        }
    }
}
module.exports = Hippopotamus;