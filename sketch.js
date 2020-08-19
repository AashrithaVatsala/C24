const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1, box2, box3, box4, box5;
var ground;
var bird1;
var log1, log2, log3, log4;
var pig1, pig2;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700, 360, 50, 50);
    box2 = new Box(900, 360, 50, 50);
    ground = new Ground(600, 380, 1200, 10);
    bird1 = new Bird(350, 310);
    log1 = new Log(800, 320, 300, PI/2);
    pig1 = new Pig(800, 360);

    box3 = new Box(700, 300, 50, 50);
    box4 = new Box(900, 300, 50, 50);
    pig2 = new Pig(800, 300)   
    log2 = new Log(800, 270, 300, PI/2);

    box5 = new Box(800, 240, 50, 50);    
    log3 = new Log(750, 240, 150, PI/6);
    log4 = new Log(850, 240, 150, -PI/6);

}

function draw(){
    background(0);
 
    Engine.update(engine);
  
    box1.display();
    box2.display();
    ground.display();
    bird1.display();
    log1.display(); 
    pig1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    box5.display();

}