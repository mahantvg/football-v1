var player
var ball
var goalpost

function setup() {
  createCanvas(800,800);
    player=createSprite(200,300,50,50);
    ball=createSprite(100,150,30,20);
    goalpost=createSprite(400,55,200,100)
}

function draw() {
  background("red");  
  drawSprites();
}