var END=0;
var PLAY=1;
var gameState=PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
 
 
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
 
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation('moving',monkey_running)
  monkey.scale=0.1;
 
 bananaGroup = new Group();
  obstaclesGroup = new Group();

  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x)
 
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -4;
   
     if(gameState === END){
    //stop the ground
    ground.velocityX = 0;
     
     }
   
  }
}
 
// create  rocks groups
   rocksGroup= new Group();
     
 
function draw() {
 
  
background('green');
  text("Score: "+ score, 500,50);
  score = score + Math.round(frameCount/60);
 
 if(ground.x<0) {
  ground.x=ground.width/2  
    }
 
 if(keyDown('space')&&monkey.y >=200) {
    monkey.velocityY=-12
    }
     monkey.velocityY=monkey.velocityY+0.5;
      monkey.collide(ground);
    spawnbanana();
  spawnObstacles()

   
  drawSprites(); 
   stroke("black");
  textSize(20); fill("black");
  survivalTime=Math.ceil(frameCount/frameRate()); text("Survival Time: "+ survivalTime, 100,50);

  if(obstaclesGroup.isTouching(monkey)){
    ground.velocityX=0
     monkey.velocityX=0
    
    obstaclesGroup.setVelocityXEach(0)
    bananaGroup.setVelocityXEach(0)
     obstaclesGroup.setLifetimeEach(-1);
   bananaGroup.setLifetimeEach(-1);
  
  }
}
 //assign scale and lifetime to the obstacle

function spawnbanana(){

  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    var cloud = createSprite(600,209,40,10);
    cloud.addImage(bananaImage);
    cloud.scale = 0.06;
    cloud.velocityX = -3;
    cloud.y=Math.round(random(150,200))
     //assign lifetime to the variable
    cloud.lifetime = 200;
    
    //adjust the depth
    //cloud.depth = trex.depth;
   // trex.depth = trex.depth + 1;
    
    //add each cloud to the group
    bananaGroup.add(cloud);
  }
  
}

function spawnObstacles() {
  if(frameCount % 125 === 0) {
    var obstacle = createSprite(600,327,10,40);
    //obstacle.debug = true;
    
    //obstacle.velocityX = -(6 + 3*score/100);
    obstacle.addImage(obstaceImage)
      obstacle.velocityX = -(5);
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}  
     



