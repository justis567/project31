const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,divisions,divisionHeight


function preload() {
    
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    divisions = new Divisions(200,200,30,30)

   
}

function draw(){
    background("black")
Engine.update(engine);

var divisionHeight = 300

for (var k = 0; k<=width; k = k + 80){
    division.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
}



ground.display()
divisions.display()
}