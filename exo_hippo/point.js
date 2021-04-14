class Point{
    #X
    #Y
    constructor(X, Y){
        this.X = X;
        this.Y = Y;
    }

    getX(){
        return this.X;
    }
    getY(){
        return this.Y;
    }
    setX(X){
        this.X = X;
    }
    setY(Y){
        this.Y = Y;
    }

    /* Renvois les informations du point sous forme de text */
    toString(){
        return `Le point à pour coordonnées ${this.X};${this.Y}`;
    }
}
module.exports = Point;