var player,playerimg,enemy,enemygroup;
var canvas;
var backgroundimg,bg;
var platform,platformimg,platformGroup;
var gameState = "play";



var ground,groundimg;

function preload(){

  backgroundimg = loadImage("./assets/background.jpg");
  playerimg = loadImage("./assets/player.png");
  platformimg = loadImage("./assets/platform.png");


  
}

function setup(){

  canvas = createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage(backgroundimg);

  ground = createSprite(width/2,1000,2000,700);
  ground.visible = true;

  player = createSprite(width/2,400);
  player.addImage(playerimg);
  player.scale = 0.25
  player.setCollider("circle",0,0,150)
  player.debug = true;

  


  
  
  
  platformGroup = new Group()


}

function draw(){
  background(255)

 
  
  var platformpositions = [
    {x: 200,y:200,image: platformimg}]
  
    createplatform(platformGroup,platformpositions.length,platformimg,0.3,platformpositions)
    
    

 
  

  if(keyCode === 32){

    player.velocity.y -= 2
  }

  if(keyCode === 39){

    player.x = player.x +5
  }

  player.velocity.y += 1

  
  player.collide(ground)


  drawSprites();
}


function createplatform(spriteGroup, numberOfSprites, spriteImage, scale, positions = []){


  for(var i = 0; i < numberOfSprites; i++){

    var x,y

    if(positions.length > 0){

      x = positions[i].x;
      y = positions[i].y;
      
      spriteImage = positions[i].image;

    }

    var sprite = createSprite(x,y);
    sprite.addImage("sprite",spriteImage);

    sprite.scale = scale;
    spriteGroup.add(sprite);
    sprite.setCollider("rectangle",0,0,350,40);
    sprite.debug = true;

    
  }
}

