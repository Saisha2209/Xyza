/*var back,backImage;
var cat, catImage;
var mousee, mouseImage,mouse2,mouse3;
var cat2,cat3;
function preload() {
    //load the images here
    backImage=loadImage("garden.png");
mouseImage=loadAnimation("jerryThree.png","jerryTwo.png");
catImage=loadAnimation("tomTwo.png","tomThree.png")
mouse2=loadAnimation("jerryOne.png");
mouse3=loadAnimation("jerryFour.png")
cat2=loadAnimation("tomFour.png")
cat3=loadAnimation("tomOne.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    back=createSprite(500,400,1000,800)
    back.addImage("background",backImage)
mousee=createSprite(200,600,20,20)
mousee.addAnimation("mouseRunning",mouse2)
mousee.scale=0.2
mousee.addAnimation("mouseTease",mouseImage)
mousee.addAnimation("a",mouse3)
cat=createSprite(700,600,20,20);
cat.addAnimation("cat",cat2);
cat.addAnimation("cat22",catImage)
cat.addAnimation("c",cat3);
cat.scale=0.2
cat.velocityX=World.mouseX
cat.velocityY=World.mouseY
}

function draw() {

    background(255);

    keyPressed()
    drawSprites();
 
               cat.debug=true;
    mousee.debug=true;
    cat.setCollider("circle",0,0,500);
    if (cat.x-mousee.x<cat.width/2+mousee.width/2 && mousee.x-cat.x<cat.width/2+mousee.width/2 && cat.y-mousee.y<cat.height/2+mousee.height/2 && mousee.y-cat.y<cat.height/2+mousee.height/2 ){
        cat.velocityX=0;
        cat.changeAnimation("c",cat3)
        mousee.changeAnimation("a",mouse3)
    }
}


function keyPressed(){
if (keyCode===LEFT_ARROW){
   
    cat.velocityX=-5
    cat.changeAnimation("cat22",catImage);
    mousee.changeAnimation("mouseTease",mouseImage)
}
 
if (keyCode===RIGHT_ARROW){
    cat.velocityX=5;
    cat.changeAnimation("cat22",catImage)
    mousee.changeAnimation("mouseTease",mouseImage)
}

}


*/
var bg; 
var together; 
var tom, tomImg1,tomImg2;
 var jerry, jerryImg1,jerryImg2; 
 
 function preload() { 
     bg = loadImage("images/garden.png"); 
     tomImg1= loadAnimation("images/tomOne.png"); 
     tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png"); 
     tomImg3= loadAnimation("images/tomFour.png");
      jerryImg1=loadAnimation("images/jerryOne.png"); 
      jerryImg2= loadAnimation("images/jerryTwo.png","images/jerryThree.png"); 
      jerryImg3=loadAnimation("images/jerryFour.png");
     } 
     function setup(){ 
         createCanvas(1000,800);
        tom = createSprite(870, 600); 
        tom.addAnimation("tomSleeping", tomImg1);
        tom.scale = 0.2; 
        jerry = createSprite(200, 600);
        jerry.addAnimation("jerryStanding", jerryImg1);
        jerry.scale = 0.15;
    }
    function draw() {
        tom.setCollider("rectangle",0,0,460,460)
       jerry.setCollider("rectangle",0,0,460,460)
     background(bg); 
     if(tom.x - jerry.x < tom.width/2 + jerry.width/2 && jerry.x-tom.x<tom.width/2+jerry.width/2) { 
    tom.velocityX=0; 
    tom.addAnimation("tomLastImage", tomImg3);
    tom.scale=0.2;
    tom.changeAnimation("tomLastImage",tomImg3); 
    jerry.addAnimation("jerryLastImage", jerryImg3);
    jerry.scale=0.15; 
    jerry.debug=true; 
    tom.debug=true; 
    jerry.changeAnimation("jerryLastImage");
     } 
    keyPressed()
    drawSprites();
 } 
 function keyPressed(){
      if(keyDown(LEFT_ARROW)){
    tom.velocityX = -5;
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning",tomImg2);
    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing");
 } 
 if(keyDown(RIGHT_ARROW)){
    tom.velocityX = 5; 
    tom.addAnimation("tomRunning", tomImg2); 
    tom.changeAnimation("tomRunning");
 } 
}