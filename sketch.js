var gameState = 0;
var playerCount = 0;
var form;
var game;
var player;
var database;
var Car1, Car2, Car3, Car4, Cars;
var ground, track;
var car1_img, car2_img, car3_img, car4_img;

//store all details of all players
var allPlayers;

function preload(){
track = loadImage("images/track.jpg");
car1_img = loadImage("images/car1.png");
car2_img = loadImage("images/car2.png");
car3_img = loadImage("images/car3.png");
car4_img = loadImage("images/car4.png");

ground = loadImage("images/ground.png");
}

function setup(){
    createCanvas(displayWidth,displayHeight-20);
    database = firebase.database();
   
    game = new Game();
    game.getState();
    game.start();
}


function draw(){
    //background("white");
   
    if(playerCount === 4){
        //changing gameState to 1
        game.update(1)
    }
    if(gameState === 1){
        clear();
        game.play();
    }
    if(gameState === 2){
        game.end();
    }
}
