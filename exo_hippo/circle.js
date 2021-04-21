const Point = require('./point.js');
class Circle{
    constructor(point, radius){
        this.point = point;
        this.radius = radius;
    }

    /* Renvois les informations du cercle sous forme de text */
    toString(){
        return `Le cercle à pour centre le point ${this.point.getX()};${this.point.getY()} son rayon est de ${this.radius} et son aire est de ${this.aeraCircle()}`;
    }
    /* Renvois l'air du cercle */
    aeraCircle(){
        return (Math.pow(this.radius,2))*Math.PI;
    }
    /* Regarde si le point appartient au cercle */
    containsPoint(point){
        if(Math.sqrt(Math.pow(point.getX()-this.point.getX(),2)+Math.pow(point.getY()-this.point.getY(),2)) <= this.radius) return true;
        else return false;
    }
}
module.exports = Circle;