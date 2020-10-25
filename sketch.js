
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    box1 = new Box(700,650,200,20);
	box2 = new Box(800,620,20,100); 
	box3 = new Box(600,620,20,100);
	ground = new Ground(width/2, 650, width, 10 );
	paper = new Paper(200,200,20)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  
  
 
}

function keypressed(){
  if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});

  }

}

