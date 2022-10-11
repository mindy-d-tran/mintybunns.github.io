// load image into background
const canvas = document.getElementById("game-area");
let ctx = canvas.getContext("2d");

const INTRO1 = new Image();
INTRO1.src = "src/intro/nr_daycare_instructions_1.png";
const INTRO2 = new Image();
INTRO2.src = "src/intro/nr_daycare_instructions_2.png";
const INTRO2B = new Image();
INTRO2B.src = "src/intro/nr_daycare_instructions_2b.png";
const INTRO3 = new Image();
INTRO3.src = "src/intro/nr_daycare_instructions_3.png";
const INTRO4 = new Image();
INTRO4.src = "src/intro/nr_daycare_instructions_4.png";
const INTRO5 = new Image();
INTRO5.src = "src/intro/nr_daycare_instructions_5.png";
const INTRO6 = new Image();
INTRO6.src = "src/intro/nr_daycare_instructions_6.png";
const INTRO7 = new Image();
INTRO7.src = "src/intro/nr_daycare_instructions_7.png";
const INTRO8 = new Image();
INTRO8.src = "src/intro/nr_daycare_instructions_8.png";
const INTRO9 = new Image();
INTRO9.src = "src/intro/nr_daycare_instructions_9.png";
const INTRO10 = new Image();
INTRO10.src = "src/intro/nr_daycare_instructions_10.png";

let intro = [INTRO1, INTRO2, INTRO2B, INTRO3, INTRO4, INTRO5, INTRO6, INTRO8, INTRO9, INTRO10];

let index = 0;

// size of sprite
const width = 800;
const height = 450;

drawSlides = function() {
    ctx.clearRect(0,0,width, height);
    ctx.drawImage(intro[index], 0,0, width, height);
}

minus = function() {
    index--;
    if(index == 0) {
        drawSlides();
        document.getElementById("prev").disabled = true;
    } else {
        drawSlides();
        document.getElementById("prev").disabled = false;
    }  
}

plus = function() {
    index++;
    document.getElementById("prev").disabled = false;
    if(index == intro.length) {
        location.assign("https://codd.cs.gsu.edu/~mtran42/WP/PW/game.php");
    } else {
        drawSlides();
    }
}

INTRO1.onload = function () {
    drawSlides();
}
