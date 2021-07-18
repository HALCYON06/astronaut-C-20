const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var astra;


function preload()
{
  back = loadImage("img/iss.png");
  sleep = loadAnimation("img/sleep.png");
  brush = loadAnimation("img/brush.png");
  eat = loadAnimation("img/eat1.png","img/eat2.png");
  gym = loadAnimation("img/gym11.png","img/gym12.png");
  bath = loadAnimation("img/bath1.png","img/bath2.png");
  drink = loadAnimation("img/drink1.png","img/drink2.png");
  move =  loadAnimation("img/move.png","img/move1.png"); 

}


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  matter = engine.world;

  astra = createSprite(300,230,20,20);
  astra.addAnimation("zz", sleep);
  astra.changeAnimation("zz");
  World.add(world,astra);

}

function draw()
 {
  background(back);
    
  drawSprites();
  

if(keyDown("UP_ARROW"))
{
astra.addAnimation("brushh",brush);
astra.changeAnimation("brushh");
astra.y=350;
astra.velocityX=0;
astra.velocityY=0;
}

if(keyDown("DOWN_ARROW"))
{
astra.addAnimation("gymm",gym);
astra.changeAnimation("gymm");
astra.y=350;
astra.velocityX=0;
astra.velocityY=0;
}

if(keyDown("LEFT_ARROW"))
{
astra.addAnimation("eatt",eat);
astra.changeAnimation("eatt");
astra.y=350;
astra.velocityX=0;
astra.velocityY=0;
}


if(keyDown("RIGHT_ARROW"))
{
astra.addAnimation("bathh",bath);
astra.changeAnimation("bathh");
astra.y=350;
astra.velocityX=0;
astra.velocityY=0;
}

if(keyDown("m"))
{
astra.addAnimation("movee",move);
astra.changeAnimation("movee");
astra.y=350;
astra.velocityX=2;
astra.velocityY=3;
}



Engine.update(engine);

  
}