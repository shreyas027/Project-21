
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var groundObj
var leftSide
var rightSide

function preload()
{
	
	
}

function setup() {
	createCanvas(800, 700);

	var ball_options={
		isStatic: false,
		restituition: 0.3,
		friction: 0,
		density: 1.2
	}


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(400,670,800,20)
	leftSide = new Ground(470,600,20,120)
	rightSide = new Ground(670,600,20,120)

	//Create the Bodies Here.
	ball = Bodies.circle(200,200,30,ball_options)
	World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  groundObj.display()
  leftSide.display()
  rightSide.display()

  ellipse(ball.position.x,ball.position.y,30)

  
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:115,y:-115})
	}
  
  }



