
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var bin1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(80,450,30);
ground = new Ground(600,680,1200,20)
bin1 = new Dustbin(1000,590,20,150);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  Engine.update(engine);

   paper.display();
   ground.display();
   bin1.display();

   keyPressed();
   drawSprites();
 
}


function keyPressed(){

	if(keyCode === UP_ARROW){
		
    Matter.Body.applyForce(paper.body,paper.body.position,{ x: 50, y: -30 });
    
    
	}
}



