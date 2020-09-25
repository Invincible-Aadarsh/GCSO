var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x < car.width/2 + wall.width/2){
   car.velocityX = 0;
   var D = (0.5 * weight * speed * speed)/22509;

   if(D<100){
     car.shapeColor = "green";
   }
   else if (D>100 && D<180) {
     car.shapeColor = "yellow";
   }
   else{
     car.shapeColor = "red";
   }
  }
  drawSprites();
}