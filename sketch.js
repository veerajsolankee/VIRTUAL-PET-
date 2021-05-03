var dog,dogimg,dogimg1;
var database;
var foods,foodStocks


function preload(){
	dogimg=loadImage("images/dogimg.png");
  dogimg1=loadImage("images/dogimg1.png");

}

function setup() {
  database=firebase.database();
	createCanvas(800, 700);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogimg)
  dog.scale=0.3;
  foodStock=database.ref('Food')
  foodStock.on("value",readstock)
  
}


function draw() {  
  background('cyan')
  if(keyWentDown(UP_ARROW)){
    writeStock(foods)
    dog.addImage(dogimg1)
  }
  drawSprites()
  text("foodRemaining"+foods,370,350)
 text("Press UP ARROW to feed the dog",390,300)
  drawSprites();
}
function readstock(data){
  foods=data.val()
  console.log(foods)
}
function writeStock(x){
  if(x<=0){x=0}else{x=x-1}
  database.ref('/').update({Food:x})
}

