var fixedRect, movingRect;
var go1, go1, go3, go4;
var edges;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  go1 = createSprite(100,100,50,50);
  go2 = createSprite(200,100,50,50);
  go3 = createSprite(300,100,50,50);
  go4 = createSprite(400,100,50,50);

  go1.shapeColor="yellow";
  go2.shapeColor="yellow";
  go3.shapeColor="yellow";
  go4.shapeColor="yellow";

  movingRect.velocityY =-5;
  fixedRect.velocityY=5;
}

function draw() {
  background(0,0,0); 
   edges=createEdgeSprites();
   movingRect.bounceOff(edges)
   fixedRect.bounceOff(edges)
   
  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go2))
  {
movingRect.shapeColor = "blue";
go2.shapeColor = "blue";

  }
  else
  {
    movingRect.shapeColor = "green";
go2.shapeColor = "green";
  }*/

  bounceOff(movingRect, fixedRect);
  
  drawSprites();
}
