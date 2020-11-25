
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground;
var bob1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Roof(400,100,500,70);
	bob1=new Bob(190,450,80);
	rope1=new Rope(bob1.body,ground.body,-100*2,0)

	bob2=new Bob(290,450,80);
	rope2=new Rope(bob2.body,ground.body,-100*1,0)

	bob3=new Bob(400,450,80);
	rope3=new Rope(bob3.body,ground.body,0,0)

	bob4=new Bob(540,450,80);
	rope4=new Rope(bob4.body,ground.body,100*1,0)

	bob5=new Bob(660,450,80);
	rope5=new Rope(bob5.body,ground.body,100*2,0)
	
	  
	  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(300);

  ground.display();
  bob1.display();
  rope1.display();
  bob2.display();
  rope2.display();
  bob3.display();
  rope3.display();
  bob4.display();
  rope4.display();
  bob5.display();
  rope5.display();
  
  
  drawSprites();
 
}



