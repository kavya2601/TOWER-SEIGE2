const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground , stand , stand2 , shot  ;
var block1,block2,block3,block4;
var block5,block6,block7,block8,block9,block10,block11;
var block12,block13,block14,block15,block16,block17,block18, block19,block20,block21,block22;
var img
function preload()
{
  img = loadImage("hexagon (1).png");
}

function setup() {
  createCanvas(2000,600);
  engine = Engine.create();
  world = engine.world;
 
  // creating the bodies here

  ground = new Ground(600,600,2000,20);
 
  stand = new Ground(600,285,200,10);
  stand2 = new Ground(900,195,200,10);

  block1 = new Block(600,260,30,40);
  block2 = new Block(570,260,30,40);
  block3 = new Block(540,260,30,40);
  block4 = new Block(630,260,30,40);
  block5 = new Block(660,260,30,40);



  block6 = new Block(585,220,30,40);
  block7 = new Block(555,220,30,40);
  block8 = new Block(615,220,30,40);
  block9 = new Block(645,220,30,40);



  block10 = new Block(600,170,30,40);
  block11 = new Block(570,180,30,40);
  block12 = new Block(630,180,30,40);


  block13 = new Block(600,140,30,40);

  block14 = new Block(900,170,30,40);
  block15 = new Block(930,170,30,40);
  block16 = new Block(870,170,30,40);
  block17 = new Block(840,170,30,40);
  block18 = new Block(960,170,30,40);

  block19 = new Block(900,140,30,40);
  block20 = new Block(930,140,30,40);
  block21 = new Block(870,140,30,40);

  block22 = new Block(900,110,30,40);

  shape = new Ground(300,300,20,30);
  shot  = new SlingShot (shape.body,{x:300,y:300});

  fill("green");
  
  Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("orange");  
  fill("black");
  textSize(18);
  text("Drag the hexagonal boxes and release it towards the blocks" , 100 , 50);
  text("press space key to bring the shape back to its original place" , 100 , 100);
  ground.display();
  stand.display();
  stand2.display();
  fill(rgb(135, 205, 236));

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();

  fill("lightBlue");
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  
  fill("lightPink");
  block10.display();
  block11.display();
  block12.display();

  fill(rgb(47, 48, 48));

  block13.display();
  
  fill(rgb(135, 205, 236));

  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();

  fill("lightGreen");

  block19.display();
  block20.display();
  block21.display();

  fill("lime");

  block22.display();
  shape.display();
  shot.display();

 // slingshot.display();
  drawSprites();
}
function mouseDragged()
{
  Matter.Body.setPosition(shape.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
  shot.fly();
}
function keyPressed()
{
if(keyCode==32)
{
 shot = new SlingShot(shape.body,{x:300,y:300});
 shape = new Ground(300,300,20,30);
}

}