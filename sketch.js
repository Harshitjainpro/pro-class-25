
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper;
var dustbin;
var ground;

function preload()
{
 
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin=new dustbin(1200,650);
	papper=new papper(200,450,40);
	ground=new ground(width/2,670,width,20);

	//Create the Bodies Here.
var render = Render.create({
	element: documment.body,
	engine: engine,
	options: {
		width: 1200,
		hight: 700,
		wireframes: false
	}
});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
drawsprite();
 
}



