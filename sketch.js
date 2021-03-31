//Creating All Constants
const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//Declaring Variables
var engine,world;
var score = 0;

//Declaring Background Variables
var bg,backgroundImg;

function preload(){
 setBackgroundImg();
}
function setup(){

	createCanvas(1350,500);

	engine = Engine.create();
  world = engine.world;
  
  //------------------------------------Grounds
	ground1 = new Ground(900,380,200,10);
	ground2 = new Ground(400,300,300,10);
  Ground = new Ground(0,500,3000,30);
  //------------------------------------Grounds End
  
  //-----------------------------Hexagon
  hex = new Hexagon(650,200,30)
  
  //Slingshot Between hexagon and point
  sling = new Slingshot(hex.body, {x:650,y:100})

  //--------------------------------Building 1
  box1 = new Box(480,275,30,40);
  box2 = new Box(450,275,30,40);
  box3 = new Box(420,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(360,275,30,40);
  box6 = new Box(330,275,30,40);
  box7 = new Box(300,275,30,40);
  box8 = new Box(330,235,30,40);
  box9 = new Box(360,235,30,40);
  box10 = new Box(390,235,30,40);
  box11 = new Box(420,235,30,40);
  box12 = new Box(450,235,30,40);
  box13 = new Box(360,195,30,40);
  box14 = new Box(390,195,30,40);
  box15 = new Box(420,195,30,40);
  box16 = new Box(390,155,30,40);
//---------------------------------Building 1 end

//---------------------------------Building 2 
  b1 = new Box(900,275,30,40);
  b2 = new Box(900,315,30,40);
  b3 = new Box(870,315,30,40);
  b4 = new Box(930,315,30,40);
  b5 = new Box(900,355,30,40);
  b6 = new Box(870,355,30,40);
  b7 = new Box(840,355,30,40);
  b8 = new Box(930,355,30,40);
  b9 = new Box(960,355,30,40);
//---------------------------------Building 2 End


}

function draw(){
  if(backgroundImg){
    background(backgroundImg);
    }
	
  Engine.update(engine);
//console.log(score);
  //---------------Grounds
  Ground.display();
  ground2.display();
  ground1.display();
  //---------------Grounds End

  //---------Hexagon
  hex.display();
//-----------------Building 1
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  //---------------Building 1 End

  //---------------Building 2 
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  //-------------Building 2 End

  //Display Sling
  sling.display();

  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  textSize(20);
  stroke("black");
  strokeWeight(2)
  text("Score: "+ score, 30,100);
  setBackgroundImg();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(hex.body);
  }
}

if(backgroundImg !==null){
  function mouseDragged(){
  Matter.Body.setPosition(hex.body, {x:mouseX , y:mouseY})
  }
}


function mouseReleased(){
  sling.fly();
}
async function setBackgroundImg(){
  var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/kolkata");
  var responseJSON = await response.json();
  
  var datetime = responseJSON.datetime;
  //console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour<19 && hour>6){ 
      bg = "Day.jpg";
  }
  else{
      bg = "Night.jfif";
  }
  backgroundImg = loadImage(bg);
}