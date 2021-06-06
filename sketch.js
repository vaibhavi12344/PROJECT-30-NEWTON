
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bobDiameter=40;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	roof=new Roof(400,100,300,20)
	bobObject1=new Bob(320,200,40)
	bobObject2=new Bob(360,200,40)
	bobObject3=new Bob(400,200,40)
	bobObject4=new Bob(440,200,40)
	bobObject5=new Bob(480,200,40)
	
  rope1=new Rope(bobObject1.body,{x:320,y:100})
  rope2=new Rope(bobObject2.body,{x:360,y:100})
  rope3=new Rope(bobObject3.body,{x:400,y:100})
  rope4=new Rope(bobObject4.body,{x:440,y:100})
  rope5=new Rope(bobObject5.body,{x:480,y:100})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
   bobObject1.display();
   bobObject2.display();
   bobObject3.display();
   bobObject4.display();
   bobObject5.display();
   rope1.display();
   rope2.display();
   rope3.display();
   rope4.display();
   rope5.display();
   roof.display();
 
}
//console.log(bobObject1.x)

function KeyPressed(){
if(keyCode==UP_ARROW){
Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:50})
}
}

//apply force is not working