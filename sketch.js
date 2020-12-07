const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var crumpled_paper,dustbin,ground, background_img;
function preload()
{
	background_img = loadImage("classroom.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	//Create the Bodies Here.
	ground = new Ground(500,690,1000,20);
	dustbin = new Dustbin(600,550, 100, 100);
	crumpled_paper = new Paper(100,350);
	console.log(dustbin);
	
  
}


function draw() {
  rectMode(CENTER);
  background(background_img);
  	ground.display();
	  crumpled_paper.display(); 
	 dustbin.display();
  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpled_paper.body, crumpled_paper.body.position, {x: 58, y: -65});
	}
}