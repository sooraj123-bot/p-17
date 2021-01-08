
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score,gamestate='play'

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,50,50)
  monkey.addAnimation('running',monkey_running)
  monkey.scale=0.2
  ground=createSprite(400,350,900,20)
 ground.velocityX=-3
  foodGroup=new Group();
  obstaclesGroup=new Group();
}


function draw() {
background('green')
monkey.collide(ground)
  if(gamestate==='play'){
    
  
 if(ground.x<0){
   ground.x=400
 }
  if(keyDown('space')){
    monkey.velocityY=-10
  }
  monkey.velocityY=monkey.velocityY+0.5
  spawnFood();
  spawnObstacles();
    if (obstaclesGroup.isTouching(monkey)){
      gamestate='end'
      ground.velocityX=0
      foodGroup.setVelocityXEach(0)
      obstaclesGroup.setVelocityXEach(0)
      foodGroup.setLifetimeEach(-1)
      obstaclesGroup.setLifetimeEach(-1)
    }
  }
  drawSprites();
  
}
function spawnFood(){
if(frameCount%100===0) {
  banana=createSprite(600,150,20,20)
  banana.addImage(bananaImage)
  banana.velocityX=-3
  banana.scale=0.1
  banana.y=random(60,150)
  monkey.depth=banana.depth+1
  banana.lifetime=200
  foodGroup.add(banana)
}
}
function spawnObstacles(){
if(frameCount%100===0) {
  stone=createSprite(800,320,10,40)
  stone.addImage(obstacleImage)
  stone.velocityX=-3
  stone.scale=0.3
  stone.lifetime=200
  obstaclesGroup.add(stone)
}




}