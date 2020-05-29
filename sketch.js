const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5, box6;
var log1;
var ground;

function setup() {
  var canvas = createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,390,400,20)

  box1 = new Box(150,100,60,200); 
  box2 = new Box(100,260,30,150);
  box3 = new Box(200,260,30,150);
  box4 = new Box(300,100,60,200);
  box5 = new Box(250,260,30,150);
  box6 = new Box(350,260,30,150);


  
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  
  triangle(215,100,100,185,350,185);
  
  
}
