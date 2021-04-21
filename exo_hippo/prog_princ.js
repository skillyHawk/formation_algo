const Hippopotamus = require('./hippo.js');
const Point = require('./point.js');
const Circle = require('./circle.js');

hippo1 = new Hippopotamus("jean", 450, 42);
hippo2 = new Hippopotamus("jack", 600, 30);
hippo1.toString();

let resultat = hippo1.hippoVsHippo(hippo2);

if(resultat == 1) console.log("L'hippopotame 1 à gagné");
else if(resultat == 2) console.log("L'hippopotame 2 à gagné");
else console.log("Leur force était la meme les deux sont mort");

hippo1.cycleDeVie();

point1 = new Point(5, 6);
console.log(point1.toString());

cercle1 = new Circle(new Point(8, 12), 20);
console.log(cercle1.toString());

if(cercle1.containsPoint(point1)) console.log("Le point apprtient au cercle");
else {
    console.log("Le point n'apprtient pas au cercle");
    console.log(`Le point est à une distance de ${Math.sqrt(Math.pow(point1.getX()-cercle1.point.getX(),2)+Math.pow(point1.getY()-cercle1.point.getY(),2))-cercle1.radius} du cercle`);
}