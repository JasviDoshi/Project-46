var white1, white2, white3, white4, white5, white6, white7;
var black1, black2, black3, black4, black5, black6;
var rand;
var notes = [];
var check = [];
var gameStates = "start";

function preload(){
  white1S = loadSound("White1Black6.wav");
  white2S = loadSound("White 2.wav");
  white3S = loadSound("White 3.wav");
  white4S = loadSound("White 4.wav");
  white5S = loadSound("White 5.wav");
  white6S = loadSound("White 6.wav");
  white7S = loadSound("White 7.wav");
  black1S = loadSound("Black 1.wav");
  black2S = loadSound("Black 2.wav");
  black3S = loadSound("Black 3.wav");
  black4S = loadSound("Black 4.wav");
  black5S = loadSound("Black 5.wav");
  black6S = loadSound("White1Black6.wav");
}

function setup(){
  createCanvas(600, 400);
  white1 = createSprite(250, 200, 25, 80);
  white1.shapeColor = "white";
  white2 = createSprite(300, 200, 25, 80);
  white2.shapeColor = "white";
  white3 = createSprite(350, 200, 25, 80);
  white3.shapeColor = "white";
  white4 = createSprite(400, 200, 25, 80);
  white4.shapeColor = "white";
  white5 = createSprite(450, 200, 25, 80);
  white5.shapeColor = "white";
  white6 = createSprite(500, 200, 25, 80);
  white6.shapeColor="white";
  white7 = createSprite(550, 200, 25, 80);
  white7.shapeColor="white";
  

  black1 = createSprite(275, 185, 20, 70);
  black1.shapeColor="black";
  black2 = createSprite(325, 185, 20, 70);
  black2.shapeColor="black";
  black3 = createSprite(375, 185, 20, 70);
  black3.shapeColor="black";
  black4 = createSprite(425, 185, 20, 70);
  black4.shapeColor="black";
  black5 = createSprite(475, 185, 20, 70);
  black5.shapeColor="black";
  black6 = createSprite(525, 185, 20, 70);
  black6.shapeColor = "black";
}

function draw(){
background("teal");

if(gameStates == "start"){

rand = Math.ceil(Math.random() * 100);
//switch will help play the random note
switch(rand) {
  case 1: white1S.play();
  notes.push(1);
  white1.shapeColor = "red";
  break;
  case 2: white2S.play();
  notes.push(2);
  white2.shapeColor = "red";
  break;
  case 3: white3S.play();
  notes.push(3);
  white3.shapeColor = "red";
  break;
  case 4: white4S.play();
  notes.push(4);
  white4.shapeColor = "red";
  break;
  case 5: white5S.play();
  notes.push(5);
  white5.shapeColor = "red";
  break;
  case 6: white6S.play();
  notes.push(6);
  white6.shapeColor = "red";
  break;
  case 7: white7S.play();
  notes.push(7);
  white7.shapeColor = "red";
  break;
  case 8: black1S.play();
  notes.push(8);
  black1.shapeColor = "red";
  break;
  case 9: black2S.play();
  notes.push(9);
  black2.shapeColor = "red";
  break;
  case 10: black3S.play();
  notes.push(10);
  black3.shapeColor = "red";
  break;
  case 11: black4S.play();
  notes.push(11);
  black4.shapeColor = "red";
  break;
  case 12: black5S.play();
  notes.push(12);
  black5.shapeColor = "red";
  break;
  case 13 : black6S.play();
  notes.push(13);
  black6.shapeColor = "red";
  break;
  default: break;
}
}

console.log(check);

  stroke("yellow");
  textSize(30);
  text("a",250,300);

  textSize(30);
  stroke("yellow");
  text("b",300,300);

  stroke("yellow");
  textSize(30);
  text("c",350,300);

  stroke("yellow");
  textSize(30);
  text("d",400,300);

  stroke("yellow");
  textSize(30);
  text("e",450,300);

  stroke("yellow");
  textSize(30);
  text("f",500,300);

  stroke("yellow");
  textSize(30);
  text("g",550,300);

  textSize(30);
  stroke("yellow");
  text("h",275,250);

  stroke("yellow");
  textSize(30);
  text("i",325,250);

  stroke("yellow");
  textSize(30);
  text("j",375,250);

  fill("white");
  textSize(30);
  text("k",425,250);

  textSize(30);  
  fill("white");
  text("l",475,250);

  fill("white");
  textSize(30);
  text("m",525,250);


if(gameStates === "play"){

if(keyDown("a")){
  check.push(1);
  white1S.play();
}

if(keyDown("b")){
  check.push(2);
  white2S.play();
}

if(keyDown("c")){
  check.push(3);
  white3S.play();
}

if(keyDown("d")){
  check.push(4);
  white4S.play();
}

if(keyDown("e")){
  check.push(5);
  white5S.play();
}

if(keyDown("f")){
  check.push(6);
  white6S.play();
}

if(keyDown("g")){
  check.push(7);
  white7S.play();
}

if(keyDown("h")){
  check.push(8);
  black1S.play();
}

if(keyDown("i")){
  check.push(9);
  black2S.play();
}

if(keyDown("j")){
  check.push(10);
  black3S.play();
}

if(keyDown("k")){
  check.push(11);
  black4S.play();
}

if(keyDown("l")){
  check.push(12);
  black5S.play();
}

if(keyDown("m")){
  check.push(13);
  black6S.play();
}
}

if(notes.length === 5){
  gameStates = "play";
}



if(notes.length === check.length){
  for(var i=0; i<notes.length; i++){
    if(notes[i]===check[i]){
text("Your notes are correct, well done!", 100, 100);
textSize(17);
fill("white");
    }
    else{
text("Your notes are not correct, please try again.", 100, 100);
textSize(17);
fill("white");
    }
    gameStates = "end";
  }
}

if(keyDown("SPACE")) {
  notes = [];
  white1.shapeColor = "white";
  white2.shapeColor = "white";
  white3.shapeColor = "white";
  white4.shapeColor = "white";
  white5.shapeColor = "white";
  white6.shapeColor = "white";
  white7.shapeColor = "white";
  
  black1.shapeColor = "black";
  black2.shapeColor = "black";
  black3.shapeColor = "black";
  black4.shapeColor = "black";
  black5.shapeColor = "black";
  black6.shapeColor = "black";
  
  gameStates = "end";
  }

drawSprites();
}