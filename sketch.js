var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;
var cars, car1, car2, car3, car4;
var form, player, game;


function setup(){
  canvas = createCanvas(windowWidth , windowHeight );
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    /* clear() method in JavaScript is used for the removal of
    all the elements from a map and make it empty. 
    It removes all the [key, value] from the map. 
    No arguments are required to be sent as parameters to the Map. 
    clear() method and it returns an undefined return value.
    */
   game.play();
  }
}
