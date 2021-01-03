
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin;

function preload() {}

function setup() {
	createCanvas(1600, 800);

	engine = Engine.create();
	world = engine.world;

	dustbin = new Dustbin(1200, 730);
	ground  = new Ground(width/2, 750, width, 15);
	paper = new Paper(100, 220, 135);

	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(150);
   
	//paper.display();
	ground.display();
	paper.display();
	dustbin.display();

}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position,{x : 1150, y : -1150});
	}
}