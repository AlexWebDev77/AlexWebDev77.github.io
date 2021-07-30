var poke_team = new Array();
var down = 37;
var up = 39;
var space = 32;
var speed = 10;
var paused = true;
var position = 0;
poke_team.push("Pikachu");



function max(a, b) {
    return a >= b ? a : b;
}

window.onkeydown = function char(event) { //Include an argument
    console.log(event.keyCode); 
    //For development purposes, helps keep track of which key is being pressed
    if(event.keyCode == 67) { // 'c'
        alert("Charmander was added to your team");
        poke_team.push("Charmander"); //Charmander gets added to the team
        console.log(poke_team); //This helps better see the pokemon team
        get_team(); //Uopdate the team paragrah
    } else { //This is where the pokeball code starts
        if(event.keyCode == up) {
            speed += 1; //Increases speed by 1 (pixel per frame)
        } else if(event.keyCode == down) {
            speed = max(0, speed - 1); //This ensures the speed is never negative
        } else if(event.keyCode == space) {
            paused = !paused; //If paused, unpause and if unpaused, pause
        }
    }
}


function pikachu() {
    alert("PIKA PIKA!!!");
    var pikasound = new Audio("pikachu\ sounds.mp3");
    pikasound.play();
}

function bulbusaur() {
    var bulbusaur = confirm("Do you want bulbusaur in your team?");
    if(bulbusaur) {
        alert("Bulbusaur is in your team");
        poke_team.push("Bulbusaur");
        console.log(poke_team);
        get_team();
    } else {
        alert("Bulbusaur is sad you left him behind");
    }
}

function squirtle() {
    var squirtle = prompt("Type 'squirtle' if you want squirtle on your team", "Type 'squirtle' here") == 'squirtle';
    if(squirtle) {
        alert("Squirtle is in your team");
        poke_team.push("Squirtle");
        console.log(poke_team);
        get_team();
    } else {
        alert("Squirtle wanted to go with you");
    }
}

function get_team() {
    var team = "";
    for(var i = 0; i < poke_team.length; i++) {
        team += poke_team[i];
        if(i + 1 != poke_team.length) {
            team += ", "; 
        }
    }
    var team_p = document.getElementById("team");
    team_p.innerText = "Your team: " + team;
}

function charmander() {
    alert("Press c to add charmander to your team");
}

function move_ball() {
    var balldiv = document.getElementById("animation_div").clientWidth;
    var ballsize = document.getElementById("pokeball").clientWidth;
    var ball = document.getElementById("pokeball");
    ball.style.left = (speed + position) % (balldiv-ballsize) + 'px';
    position = paused ? ((position + speed) % (balldiv-ballsize)) : position;
}


setInterval(move_ball, 25);
