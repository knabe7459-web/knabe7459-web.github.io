let dogX;
let dogY;
let tailAngle = 0;
let wagSpeed = 0.03;
let smile = 0;
let isClicked = false;

function setup() {
    const canvas = createCanvas(900, 420);
    canvas.parent('dogCanvas');
    dogX = width / 2;
    dogY = height / 2 + 30;
}

function draw() {
    drawBackground();
    drawDogBody();
    drawDogHead();
    drawDogFace();
    drawDogTail();
    drawGround();
    updateDogState();
}

function drawBackground() {
    noStroke();
    fill(255, 238, 205);
    rect(0, 0, width, height);
    fill(255, 255, 255, 180);
    ellipse(width * 0.16, height * 0.2, 180, 120);
    ellipse(width * 0.75, height * 0.18, 150, 100);
}

function drawDogBody() {
    fill(170, 115, 65);
    noStroke();
    ellipse(dogX, dogY + 20, 260, 180);
    ellipse(dogX + 90, dogY - 20, 60, 70);
    ellipse(dogX - 90, dogY - 20, 60, 70);
}

function drawDogHead() {
    fill(194, 133, 74);
    ellipse(dogX, dogY - 70, 170, 160);
    fill(156, 103, 55);
    ellipse(dogX - 36, dogY - 90, 60, 60);
    ellipse(dogX + 36, dogY - 90, 60, 60);
    fill(194, 133, 74);
    ellipse(dogX - 30, dogY - 95, 42, 42);
    ellipse(dogX + 30, dogY - 95, 42, 42);
}

function drawDogFace() {
    fill(20, 20, 20);
    ellipse(dogX - 25, dogY - 70, 14, 14);
    ellipse(dogX + 25, dogY - 70, 14, 14);
    fill(38, 21, 11);
    ellipse(dogX, dogY - 48, 30, 25);
    fill(255);
    ellipse(dogX - 10, dogY - 35, 12, 10);
    ellipse(dogX + 10, dogY - 35, 12, 10);
    fill(0);
    ellipse(dogX - 10, dogY - 35, 6, 6);
    ellipse(dogX + 10, dogY - 35, 6, 6);
    noFill();
    stroke(30, 20, 10);
    strokeWeight(4);
    strokeJoin(ROUND);
    const smileOffset = map(smile, 0, 1, 8, 24);
    arc(dogX, dogY - 20, 80, 50, 0, PI + 0.2);
    if (smile > 0.3) {
        line(dogX - smileOffset, dogY - 10, dogX - 10, dogY - 14);
        line(dogX + smileOffset, dogY - 10, dogX + 10, dogY - 14);
    }
    noStroke();
}

function drawDogTail() {
    push();
    translate(dogX + 120, dogY + 10);
    rotate(sin(tailAngle) * 0.8);
    fill(170, 115, 65);
    ellipse(0, 0, 100, 30);
    pop();
}

function drawGround() {
    noStroke();
    fill(221, 190, 144);
    rect(0, height - 50, width, 50);
}

function updateDogState() {
    dogX = lerp(dogX, constrain(mouseX, 120, width - 120), 0.05);
    dogY = lerp(dogY, constrain(mouseY, 120, height - 120), 0.05);
    tailAngle += wagSpeed;
    if (isClicked) {
        smile = min(smile + 0.02, 1);
    } else {
        smile = max(smile - 0.01, 0);
    }
}

function mousePressed() {
    isClicked = true;
    wagSpeed = 0.16;
    return false;
}

function mouseReleased() {
    isClicked = false;
    wagSpeed = 0.05;
    return false;
}
