
var dogimg, happyDog;
var database, foodS, foodStock;


function preload(){
dogimg=loadImage("images/dog.png");
happyDog=loadImage("images/doghappy.png");
}

function setup (){

database=firebase.database();

var canvas=createCanvas(500,500);

dog=createSprite(250,300,150,150);

dog.scale=0.2

dog.addImage(dogimg);
foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20); 



}
function draw(){

  background(46,139,87)

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
}




  drawSprites();

  fill(255,255,254);

  stroke("black");
  text("Food remaining : "+foodS,170,200);
  textSize(13);
  text("Note: Press UP_ARROW Key To Feed gohan Milk!",130,10,300,20);

  
}
function readStock(data){
  foodS=data.val();
}

//Function to write values in DB
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}