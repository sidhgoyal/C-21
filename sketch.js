var fixedRect, movingRect;
var gameObject1, gameObject2;

var bouncingRect1;
var bouncingRect2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200,300,50,60);
  gameObject2 = createSprite(300,200,20,60);

  bouncingRect1 = createSprite(500,350,60,70);
  bouncingRect2 = createSprite(500,50,60,40);

  bouncingRect1.velocityY = -5;
  bouncingRect2.velocityY = 4;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "blue";
    gameObject2.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }


  bounceOff(bouncingRect1,bouncingRect2)
  
  drawSprites();
}

