// credits to my sister for drawing all of the art
// you can find her @gguokka on twitter, instagram, or tumblr

// load image into background
const canvas = document.getElementById("game-area");
let ctx = canvas.getContext("2d");

// load background image
const bg = new Image();
bg.src = "src/bg/nr_daycare_bg.png";

// load sprite images
let mal1 = new Image();
mal1.src = "src/sprites/nr_daycare_mal_default.png";
let mal2 = new Image();
mal2.src = "src/sprites/nr_daycare_mal_eat.png";
let mal3 = new Image();
mal3.src = "src/sprites/nr_daycare_mal_play.png";
let mal4 = new Image();
mal4.src = "src/sprites/nr_daycare_mal_bath.png";
let mal5 = new Image();
mal5.src = "src/sprites/nr_daycare_mal_smile.png";
let mal6 = new Image();
mal6.src = "src/sprites/nr_daycare_mal_sniffle.png";
let mal7 = new Image();
mal7.src = "src/sprites/nr_daycare_mal_sob.png";

// size of sprite
const width = 800;
const height = 450;

// array contains the frame order of the animation
const frame = [0,1];
// array countaining the order of eating
const frame2 = [0,1,2,1];

// stores the frame count for animationspeed
let frameCount1 = 0;
let frameCount2 = 0;
let frameCount3 = 0;
let frameCount4 = 0;
let frameCount5 = 0;
let frameCount6 = 0;
let frameCount7 = 0;
// index of the array for current frame in animation
let currentFrame1 = 0;
let currentFrame2 = 0;
let currentFrame3 = 0;
let currentFrame4 = 0;
let currentFrame5 = 0;
let currentFrame6 = 0;
let currentFrame7 = 0;

// let us know which animation to pause
let pause1, pause2, pause3, pause4, pause5, pause6, pause7 = false;

// how many time the player guess correctly
let win = 0;
let hp = 5;
// how may tries the player can guess
let chances = 5;
// answer choice player picked
let answer;

drawBg = function() {
    ctx.clearRect(0,0,bg.width, bg.height);
    ctx.drawImage(bg, 0,0, bg.width, bg.height);
}

// draws the frame of sprite sheet
// code from https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3
drawFrame = function(img, frameX, frameY, canvasX, canvasY) {
    ctx.drawImage(img,
                  frameX * width, frameY * height, width, height,
                  canvasX, canvasY, width, height);
}

drawTurn = function() {
    // write text for how many turns left
    ctx.font = "35px Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif";
    ctx.fillStyle = "#C3AC7F";
    ctx.fillText(`${chances} turns left`, 625, 420);
}

drawHP = function() {
    // write text
    ctx.font = "35px Didot,Didot LT STD,Hoefler Text,Garamond,Times New Roman,serif";
    ctx.fillStyle = "#C3AC7F";
    ctx.fillText("hp", 10, 420);

    // show hp bar
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(55, 400, 150, 30);
    ctx.fillStyle = "#B3E931";
    ctx.fillRect(55, 400, hp * 30, 30);

    drawTurn();
}

// code based off https://dev.to/martyhimmel/animating-sprite-sheets-with-javascript-ag3
// animation for default pose
normalFrame = function() {
    frameCount1++;
    if (frameCount1 < 40 && pause1!=true) {
        window.requestAnimationFrame(normalFrame);
        return;
    }
    frameCount1 = 0;
    drawBg();
    drawHP();
    drawFrame(mal1, 0, frame[currentFrame1], 0, 0);
    currentFrame1++;
    if (currentFrame1 >= frame.length) {
        currentFrame1 = 0;
    }
    if(pause1 == true) {
        window.cancelAnimationFrame(normalFrame);
        return;
    }
    window.requestAnimationFrame(normalFrame);
}

// animation for feeding
feedFrame = function() {
    frameCount2++;
    if (frameCount2 < 20 && pause2!=true) {
        window.requestAnimationFrame(feedFrame);
        return;
    }
    frameCount2 = 0;
    drawBg();
    drawHP();
    drawFrame(mal2, 0, frame2[currentFrame2], 0, 0);
    currentFrame2++;
    if (currentFrame2 >= frame2.length) {
        currentFrame2 = 0;
    }
    if(pause2 == true) {
        window.cancelAnimationFrame(feedFrame);
        return;
    }
    window.requestAnimationFrame(feedFrame);    
}

// animation for playing
playFrame = function() {
    frameCount3++;
    if (frameCount3 < 10 && pause3!=true) {
        window.requestAnimationFrame(playFrame);
        return;
    }
    frameCount3 = 0;
    drawBg();
    drawHP();
    drawFrame(mal3, 0, frame[currentFrame3], 0, 0);
    currentFrame3++;
    if (currentFrame3 >= frame.length) {
        currentFrame3 = 0;
    }
    if(pause3 == true) {
        window.cancelAnimationFrame(playFrame);
        return;
    }
    window.requestAnimationFrame(playFrame);   
}

// animation for bath
bathFrame = function() {
    frameCount4++;
    if (frameCount4 < 30 && pause4!=true) {
        window.requestAnimationFrame(bathFrame);
        return;
    }
    frameCount4 = 0;
    drawBg();
    drawHP();
    drawFrame(mal4, 0, frame[currentFrame4], 0, 0);
    currentFrame4++;
    if (currentFrame4 >= frame.length) {
        currentFrame4 = 0;
    }
    if(pause4 == true) {
        window.cancelAnimationFrame(bathFrame);
        return;
    }
    window.requestAnimationFrame(bathFrame);    
}

smileFrame = function() {
    frameCount5++;
    if (frameCount5 < 30 && pause5!=true) {
        window.requestAnimationFrame(smileFrame);
        return;
    }
    frameCount5 = 0;
    drawBg();
    drawHP();
    drawFrame(mal5, 0, frame[currentFrame5], 0, 0);
    currentFrame5++;
    if (currentFrame5 >= frame.length) {
        currentFrame5 = 0;
    }
    if(pause5 == true) {
        window.cancelAnimationFrame(smileFrame);
        return;
    }
    window.requestAnimationFrame(smileFrame);    
}

sniffleFrame = function() {
    frameCount6++;
    if (frameCount6 < 50 && pause6!=true) {
        window.requestAnimationFrame(sniffleFrame);
        return;
    }
    frameCount6 = 0;
    drawBg();
    drawHP();
    drawFrame(mal6, 0, frame[currentFrame6], 0, 0);
    currentFrame6++;
    if (currentFrame6 >= frame.length) {
        currentFrame6 = 0;
    }
    if(pause6 == true) {
        window.cancelAnimationFrame(sniffleFrame);
        return;
    }
    window.requestAnimationFrame(sniffleFrame);   
}

sobFrame = function() {
    frameCount7++;
    if (frameCount7 < 30 && pause7!=true) {
        window.requestAnimationFrame(sobFrame);
        return;
    }
    frameCount7 = 0;
    drawBg();
    drawHP();
    drawFrame(mal7, 0, frame[currentFrame7], 0, 0);
    currentFrame7++;
    if (currentFrame7 >= frame.length) {
        currentFrame7 = 0;
    }
    if(pause7 == true) {
        window.cancelAnimationFrame(sobFrame);
        return;
    }
    window.requestAnimationFrame(sobFrame); 
}

normalVal = function() {
    pause2 = true; 
    pause3 = true; 
    pause4 = true;
    pause5 = true;
    pause6 = true;
    pause7 = true;
    // let the animation play
    pause1 = false;
}

normalAni = function() {
    normalVal();
    normalFrame();
}

// loads background image for canvas
// code from https://stackoverflow.com/questions/14012768/html5-canvas-background-image
bg.onload = function() {
    normalAni();
    setTimeout(sniffleAni, 2500);
}

// change val for feed
feedVal = function() {
    pause1 = true;
    pause3 = true;
    pause4 = true;
    pause5 = true;
    pause6 = true;
    pause7 = true;
    // let the animation play
    pause2 = false;

    answer = 0;
}

feedAni = function() {
    feedVal();
    feedFrame();
}

// change val for play
playVal = function () {
    pause1 = true; 
    pause2 = true; 
    pause4 = true;
    pause5 = true;
    pause6 = true;
    pause7 = true;
    // let the animation play
    pause3 = false;

    answer = 1;
}

playAni = function() {
    playVal();
    playFrame();
}

// change val for bath 
bathVal = function () {
    pause1 = true;
    pause2 = true;
    pause3 = true;
    pause5 = true;
    pause6 = true;
    pause7 = true;
    // let the animation play
    pause4 = false;

    answer = 2;
}

bathAni = function() {
    bathVal();
    bathFrame();
}

// change val for smile
smileVal = function () {
    pause1 = true;
    pause2 = true;
    pause3 = true;
    pause4 = true;
    pause6 = true;
    pause7 = true;
    // let the animation play
    pause5 = false;
}

smileAni = function() {
    smileVal();
    smileFrame();
}

// change val for sniffle
sniffleVal = function () {
    pause1 = true;
    pause2 = true;
    pause3 = true;
    pause4 = true;
    pause5 = true;
    pause7 = true;
    // let the animation play
    pause6 = false;
}

sniffleAni = function() {
    sniffleVal();
    sniffleFrame();
}

// change val for sob
sobVal = function () {
    pause1 = true;
    pause2 = true;
    pause3 = true;
    pause4 = true;
    pause5 = true;
    pause6 = true;
    // let the animation play
    pause7 = false;
}

sobAni = function() {
    sobVal();
    sobFrame();
}

gameRestart = function() {
    setTimeout(normalAni, 2000);
    setTimeout(sniffleAni, 4500);
}

// animates the selected animation and then the normal
aniLose = function() {
    setTimeout(sobAni, 2000);
    setTimeout(gameRestart, 2000);
}

// animate right choice and then happy face
aniSmile = function() {
    setTimeout(smileAni, 2000);
    setTimeout(gameRestart, 2000);
}

disableButtons = function() {
    document.getElementById("feed-button").disabled = true;
    document.getElementById("play-button").disabled = true;
    document.getElementById("bath-button").disabled = true;
}

reableButtons = function() {
    document.getElementById("feed-button").disabled = false;
    document.getElementById("play-button").disabled = false;
    document.getElementById("bath-button").disabled = false;
}

animate = function() {
    switch(answer) {
        case 0:
            feedAni();
            break;
        case 1:
            playAni();
            break;
        case 2:
            bathAni();
            break;
    }
}

play = function(func) {
    let choice = Math.floor(Math.random() * 3);
    func();
    animate();
    disableButtons();
    if(answer == choice) {
        win++;
        console.log("+1!");
        setTimeout(reableButtons,4500);
        aniSmile();
    } else {
        hp--;
        console.log("-1");
        setTimeout(reableButtons,4500);
        aniLose();
    }
}

result = function() {
    if(win<3 && chances == 0) {
        sobAni();
        console.log("Lose?!");
        alert("Malleus's happiness is low, so he escaped the daycare.");
        setTimeout(document.location.reload(), 4500);
    } else if(win >=3 && chances == 0){
        console.log("Win!");
        alert("Good Job! I'll take it from here.");
        setTimeout(document.location.reload(), 4500);
    } else {
        return;
    }
}

game = function (func) {
    chances--;

    if (chances>0) {
        play(func);
    } else if(chances == 0){
        play(func);
        setTimeout(result, 4500);
    }
}