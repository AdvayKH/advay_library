var fixed_rect, moving_rect;
var fr1, fr2, fr3, fr4;
var mr1,mr2,mr3,mr4;
function setup() {
  createCanvas(800,400);

  moving_rect = createSprite(200, 200, 50, 30);
  fixed_rect = createSprite(600, 200, 40, 80);

  moving_rect.velocityX = 2;

  fr1 = createSprite(100,100,50,50);
  fr2 = createSprite(200,100,50,50);
  fr3 = createSprite(300,100,50,50);
  fr4 = createSprite(400,100,50,50);

  mr1 = createSprite(100,300,50,50);
  mr2 = createSprite(200,300,50,50);
  mr3 = createSprite(300,300,50,50);
  mr4 = createSprite(400,300,50,50);

  mr1.velocityY = -2;
  mr2.velocityY = -2;
  mr3.velocityY = -2;
  mr4.velocityY = -2;

  fixed_rect.shapeColor = "green";
  moving_rect.shapeColor = "green";

  fr1.shapeColor = "green";
  fr2.shapeColor = "green";
  fr3.shapeColor = "green";
  fr4.shapeColor = "green";

  fixed_rect.debug = true;
  moving_rect.debug = true;

  fr1.debug = true;
  fr2.debug = true;
  fr3.debug = true;
  fr4.debug = true;
  
 
}

function draw() {
  background(230);

 // moving_rect.x = mouseX;
  //moving_rect.y = mouseY;

  text("Distance between rects : ", 100, 50);
  text(fixed_rect.x - moving_rect.x, 100, 70);

  if (isTouching(fixed_rect, moving_rect)){
    fixed_rect.shapeColor = "blue";
    moving_rect.shapeColor = "blue";
  } else  if (isTouching(fr1, moving_rect)){
    fr1.shapeColor = "purple";
    moving_rect.shapeColor = "purple";
  } else  if (isTouching(fr2, moving_rect)){
    fr2.shapeColor = "crimson";
    moving_rect.shapeColor = "crimson";
  } else  if (isTouching(fr3, moving_rect)){
    fr3.shapeColor = "teal";
    moving_rect.shapeColor = "teal";
  } else  if (isTouching(fr4, moving_rect)){
    fr4.shapeColor = "red";
    moving_rect.shapeColor = "red";
  }  else {
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
    fr1.shapeColor= "green";
    fr2.shapeColor = "green";
    fr3.shapeColor = "green";
    fr4.shapeColor = "green";
  }
  bounceOff(fixed_rect,moving_rect);
  bounceOff(mr1,fr1);
  bounceOff(mr2,fr2);
  bounceOff(mr3,fr3);
  bounceOff(mr4,fr4);
  drawSprites();
}

