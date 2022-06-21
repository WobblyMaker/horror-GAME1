var player,frontWalkingAnim,leftWalkingAnim,rightWalkingAnim;
var bg,bgImg;

function preload(){
  bgImg=loadImage("assets/level1,2.png");
  
  frontWalkingAnim=loadAnimation("assets/walking1.png","assets/walking2.png","assets/walking3.png");
  frontWalkingAnim.playing=true;
  
  leftWalkingAnim=loadAnimation("assets/leftwalk1.png","assets/leftwalk2.png","assets/leftwalk3.png");
  leftWalkingAnim.playing=true;

  rightWalkingAnim=loadAnimation("assets/rightwalk1.png","assets/rightwalk2.png","assets/rightwalk3.png");
  rightWalkingAnim.playing=true;

  frontWalkingAnim.looping=true;
  leftWalkingAnim.looping=true;
  rightWalkingAnim.looping=true;

}

function setup(){
  createCanvas(1000,500);
  rectMode(CENTER);
  
  player=createSprite(200,200,50,50);
  player.scale=0.6;
  
  bg=createSprite(200,200,30,30);
  bg.addImage(bgImg);

  
player.addAnimation('frontWalking',frontWalkingAnim);
player.addAnimation('leftWalking',leftWalkingAnim);
player.addAnimation('rightWalking',rightWalkingAnim);
}

function draw() 
{
background(225);

camera.x=player.x;
camera.y=player.y;

player.depth=bg.depth+1;

if(keyDown("RIGHT")){
  player.x+=5;
  player.changeAnimation('rightWalking');
} 

if(keyDown("LEFT")){
  player.x-=5;
  player.changeAnimation('leftWalking');
}

if(keyDown("UP")){
  player.y-=5;
}

if(keyDown("DOWN")){
  player.y+=5;
  player.changeAnimation('frontWalking')
}


drawSprites();  
}
