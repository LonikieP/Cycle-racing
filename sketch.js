var path,mainCyclist;
var pathImg,mainRacerImg1,mainRacerImg2;
var Bell;
var Pinkcg, Redcg, Yellowcg;
var num;
var yellowAni, pinkAni, RedAni;
var distance;

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;

function preload(){
  pathImg = loadImage("images/Road.png");
  mainRacerImg1 = loadAnimation("images/mainPlayer1.png","images/mainPlayer2.png");
  mainRacerImg2= loadAnimation("images/mainPlayer3.png");
  Bell=loadSound("sound/bell.mp3")
  yellowAni= loadAnimation("opponent4.png", "opponent5.png");
  pinkAni= loadAnimation("opponent1.png", "opponent2.png");
  RedAni= loadAnimation("opponent7.png", "opponent8.png")
}

function setup(){
  
createCanvas(500,300);
  
// Moving background
path=createSprite(100,150);
path.addImage(pathImg);
path.velocityX = -5;

//creating boy running
mainCyclist  = createSprite(70,150,20,20);
mainCyclist.addAnimation("SahilRunning",mainRacerImg1);
mainCyclist.scale=0.07;
  
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,350,30);
  distance= round(frameCount/10)
  
  if(gameState===PLAY){
  
   mainCyclist.y = World.mouseY;
  
   edges= createEdgeSprites();
   mainCyclist .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
    if(frameCount%60===0)
   {
     num= round(random(1,3));
     if (num===1)
       {
         yellowGirl()
       }
     else if(num===2)
       {
         pinkGirl()
       }
     else
     {
       redGirl()
     }
     
   }
    
    
    if(keyDown("Space"))
      {
        Bell.play()
      }
 }
}

function yellowGirl()
{
 Yellowcg=createSprite(0,round(random(1,300)));
  Yellowcg.velocityX=5
  Yellowcg.addAnimation("Yellowgirl", yellowAni);
  Yellowcg.scale=0.07
}

function pinkGirl()
{
 pinkcg=createSprite(0,round(random(1,300)));
 pinkcg.velocityX=5
  pinkcg.addAnimation("pinkgirl", pinkAni);
  pinkcg.scale=0.07
}

function redGirl()
{
 Redcg=createSprite(0,round(random(1,300)));
  Redcg.velocityX=5
  Redcg.addAnimation("Redgirl", RedAni);
  Redcg.scale=0.07
}

