var car , wall , speed , weight , deformation;
 
function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400 , 1500);
 car = createSprite(100, 200, 50, 50);
 car.velocityX = speed;

 wall = createSprite(700, 200 ,30,100);
}

function draw() {
  background(0);
  if(wall.x - car.x< (wall.width + car.width)/2 ){
  car.velocityX=0;
  deformation=(0.5* weight * speed * speed)/22500;
  if(deformation>180){
    car.shapeColor="red";
  }
  else if(deformation>80 && deformation<180){
    car.shapeColor="yellow";
  }
  else{
    car.shapeColor="green";
  }
  }  
  drawSprites();
}