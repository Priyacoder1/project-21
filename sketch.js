
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball;
var ground,lwall,rwall,twall;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_options={
		isStatic:false,
		restitution:0.3,
		//friction:10,
		//density:1.2


	}
	//Create the Bodies Here.
ground = new Ground(400,694,800,10);
lwall = new Ground(700,638,10,100);
rwall = new Ground(550,638,10,100);
twall = new Ground(10,400,10,800);

rectMode(CENTER);
ellipseMode(RADIUS);


ball = Bodies.circle(50,150,20,ball_options);
World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
lwall.show();
rwall.show();
twall.show();

Engine.update(engine);

  //drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0.04,y:0});
}

