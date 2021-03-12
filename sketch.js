
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 dustbin = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Ball(70,250,70,70);
	bin1 = new Bin(560,635,270,20);
	bin2 = new Bin(430,555,20,170);
	bin3 = new Bin(701,555,20,170);
    ground = new Ground(350,650,900,15);

	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  ball.display(); 
  bin1.display();
  bin2.display();
  bin3.display();
  image(dustbin ,370 ,300 ,370 ,350)
  ground.display();
 }

 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce
		 (ball.body ,ball.body.position,{x:85, y:-85});
	 }
 }




