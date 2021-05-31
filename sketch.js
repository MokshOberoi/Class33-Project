const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage,ground,groundImage;
var santa,santaImage;
var ice=[];
var maxSnow=30;

function preload(){
  bgImage = loadImage("snow2.jpg");
  groundImage=loadImage("ground.PNG");

  santaImage=loadAnimation("sc1.PNG","sc2.PNG","sc3.PNG","sc4.PNG","sc5.PNG","sc6.PNG","sc7.PNG","sc8.PNG","sc9.PNG","sc10.PNG","sc11.PNG","sc12.PNG")

}

function setup() {
  createCanvas(1200,600);
  
  engine=Engine.create();
  world= engine.world;
  
  ground=createSprite(600,700);
  ground.addImage(groundImage);
  ground.scale=5;
  ground.velocityX=-7;

  santa = createSprite(150,434);
  santa.addAnimation("runner",santaImage)
  santa.scale=1.3;
  santa.setCollider("rectangle",15, -20,100,180);

  if(frameCount % 150 === 0){
    for(var i=0; i<maxSnow; i++){
    ice.push(new Snow(random(0,1350), random(0,50)));
    }
  }

}

function draw() {
  background(bgImage);
  Engine.update(engine);

  santa.collide(ground);

  if(ground.x < 500){
    ground.x=600;
  }

  if(keyWentDown("space")&& santa.y >= 100) {
    santa.velocityY = -12;
  }

  santa.velocityY = santa.velocityY + 0.8

  for(var i = 0;i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
    } 


  drawSprites();
}