 var rect1, rect2;
 var rect3, rect4;
 
 
 function setup() {
  createCanvas(800,400);

  rect1 = createSprite(300,300,50,50);
  rect1.shapeColor = ("red");

  rect2 = createSprite(100,100,50,50);
  rect2.shapeColor = ("blue");

  rect3 = createSprite(400,300,50,50);
  rect3.shapeColor = ("yellow");

  rect4 = createSprite(200,100,50,50);
  rect4.shapeColor = ("purple");

}

function draw() {
  background(0,0,0);  

  rect1.x = mouseX;
  rect1.y = mouseY;

if(collision(rect1,rect3)){
  rect1.shapeColor = "green";
  rect3.shapeColor = "green";
}

else{
  rect1.shapeColor = "red";
  rect3.shapeColor = "yellow";
}



  drawSprites();
}

