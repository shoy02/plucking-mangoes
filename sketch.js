var treeimg, boyimg;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

function preload()
{
	var tree;
	var boy;
	treeimg = loadImage("Plucking mangoes/tree.png");
	boyimg = loadImage("Plucking mangoes/boy.png");
	mangoimg = loadImage("Plucking mangoes/mango.png");
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(600,height,1200,20);
	tree = createSprite(950,350,150,500);
	tree.addImage(treeimg);
	tree.scale=0.6
	
	stone = new Stone(235,420,10);

	slingshot = new SlingShot(stone.body,{x:235, y:420})

	boy = createSprite(300,520,150,500);
	boy.addImage(boyimg);
	boy.scale=0.13

	mango1 = new Mango(980,285,10,10);
	mango2 = new Mango(820,90,10,10);
	mango3 = new Mango(1000,60,10,10);
	mango4 = new Mango(880,200,10,10);
	mango5 = new Mango(800,250,10,10);
	mango6 = new Mango(1050,190,10,10);
	mango7 = new Mango(1070,110,10,10);
	mango8 = new Mango(940,120,10,10);
	mango9 = new Mango(1090,280,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  drawSprites();
  
  ground.display();

  stone.display();

  slingshot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
 
 detectcollision(stone,mango1);
 detectcollision(stone,mango2);
 detectcollision(stone,mango3);
 detectcollision(stone,mango4);
 detectcollision(stone,mango5);
 detectcollision(stone,mango6);
 detectcollision(stone,mango7);
 detectcollision(stone,mango8);
 detectcollision(stone,mango9);
 

}

function keyPressed(){
    if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:235, y:420})
		slingshot.attach(stone.body);
    }
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.height+lstone.width)
	{
		Matter.Body.setStatic(lmango.body,false);
	}
}