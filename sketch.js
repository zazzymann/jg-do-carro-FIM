var database;
var gameState = 0;
var playerCount;
var form;
var player;
var game;
var car1,car2,car3,car4;
var cars;
var allPlayers;
var distance = 0
var car1img,car2img,car3img,car4img;
var trackimg;
function preload(){
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
    trackimg = loadImage("images/track.jpg");
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    if (playerCount===2){
        game.update(1);
    }
    if (gameState === 1) {
        clear();
        game.play();
    }
    if (gameState === 2){
        game.end();
    }

}

