var bath,brush,drink,eat,gym1,gym11;
    
var iss,move,sleep;

var space,space2,space3,space4,space5;

var NEXT,BACK;

var END = 0;
var PLAY = 1;
var gameState = PLAY;

function preload(){
  
space4_S4 = loadImage("space4.png");
bath_baño = loadAnimation("bath1.png","bath2.png");
brush_dientes = loadImage("brush.png");
drink_agua = loadAnimation("drink1.png","drink2.png");
iss_ISS = loadImage("iss.png");
eat_comer = loadAnimation("eat1.png","eat2.png");
sleep_dormir = loadImage("sleep.png");
gym1_gym2 = loadAnimation("gym1.png","gym2.png");
space_S = loadImage("space.png");
move_mover = loadAnimation("move.png","move1.png");
space2_S2 = loadImage("space2.png");
gym11_gym12 = loadAnimation("gym11.png","gym12.png");
space3_S3 = loadImage("space3.png");
space5_S5 = loadImage("space5.png");
back_atras =loadImage("BACK.png");  
next_siguiente =loadImage("NEXT.png");
play_juega =loadImage("PLAY.png");

}


function setup() {
  createCanvas(400, 400);
  edges = createEdgeSprites();
  
NEXT= createSprite(350,300,20,20);
NEXT.addImage("siguiente",next_siguiente);
 
NEXT2= createSprite(350,300,20,20);
NEXT2.addImage("siguiente",next_siguiente);
  
NEXT3= createSprite(350,300,20,20);
NEXT3.addImage("siguiente",next_siguiente);
  
NEXT4= createSprite(350,300,20,20);
NEXT4.addImage("siguiente",next_siguiente);
  
NEXT5= createSprite(350,300,20,20);
NEXT5.addImage("siguiente",next_siguiente);
  
BACK= createSprite(300,300,20,20);
BACK.addImage("atras",back_atras);
  
BACK2= createSprite(300,300,20,20);
BACK2.addImage("atras",back_atras);
  
BACK3= createSprite(300,300,20,20);
BACK3.addImage("atras",back_atras);
  
BACK4= createSprite(300,300,20,20);
BACK4.addImage("atras",back_atras);
  
space = createSprite(200,200,400,400);
space.addImage("S",space_S);

space2 = createSprite(200,200,400,400);
space2.addImage("S2",space2_S2);
  
space3 = createSprite(200,200,400,400);
space3.addImage("S3",space3_S3);
  
space4 = createSprite(200,200,400,400);
space4.addImage("S4",space4_S4);
  
space5 = createSprite(200,200,400,400);
space5.addImage("S5",space5_S5);
  
bath = createSprite(200,200,190,60);
bath.addAnimation("baño",bath);
  
}


function draw() {
  background("black");
  drawSprites(); 
  
if(mousePressedOver (NEXT)){
  //touches.length>0||
  NEXT.visible = false;
  space.visible = false;
  BACK.visible = true;
  space2.visible = true; 
  NEXT2.visible = true;
}

if( mousePressedOver (BACK)){
  //touches.length>0||
  BACK.visible = false;
  NEXT.visible = true;
  space.visible= true;
  space2.visible = false;
  NEXT2.visible = false;
}
  
if(mousePressedOver (NEXT2)){
  
  NEXT2.visible = false;
  space2.visible = false;
  NEXT3.visible = true;
  space3.visible = true;
  BACK.visible = false;
  BACK2.visible = true;
}

if(mousePressedOver (NEXT3)){
  
  NEXT2.visible = false;
  space2.visible = false;
  NEXT3.visible = true;
  space3.visible = true;
  BACK.visible = false;
  BACK2.visible = true;
}

  }