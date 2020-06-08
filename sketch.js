var box1,box2,box3;
var ball;
var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;
	box1 = new box(950,527,30,90);
	box2 = new box(750,527,30,90);
	box3 = new box(850,550,230,30);
    ground= new Ground(500,575,995,30);
	ball= new BALLS(200,550,10);



  
}


function draw() {
	Engine.update(engine);
  
  background(0);
  box1.display(); 
  box2.display(); 
  box3.display(); 
  ground.display();
  ball.display();
 
  
 
}
function keyPressed(){
    
  if (keyCode === UP_ARROW){
 Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});




  }
}
