
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render=Matter.Render;
var paper,ground;
var glass1;


function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200,450,40);
	glass1 = new Glass(1200,650);

ground = new Ground(width/2,670,width,20);
var render=Render.create({
	element:document.body,
	engine:engine,
	options:{
		width:1200,
		height:700,
		wireframes:false,
	}
})
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paper.display();
  glass1.display();




}

function keyPressed(  ){  

	if(KeyCode===UP_ARROW){ 

		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
	
	
	
	}




}

