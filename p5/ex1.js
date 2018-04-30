/*
// change color of drawing when you press a key

function setup()
{
	createCanvas(800,600);
	background(128);

	strokeWeight(10);
}

function draw()
{
	if (mouseX > 0 && mouseY > 0) {
		line(mouseX, mouseY, pmouseX, pmouseY);
	}
}

function mousePressed() 
{
	// switch to green
	stroke(0, 255, 0);
}

function keyPressed()
{
	if (key == 'R') {
		stroke(255, 0, 0);
	}
	if (key == 'G') {
		stroke(0, 255, 0);
	}
	if (key == 'B') {
		stroke(0, 0, 255);
	}
	if (key == 'C') {
		background(128);
	}
}



// increase color

var r = 0;
var g = 0;
var b = 0;

function setup() {
	createCanvas(800, 600);
	background(128);
}

function draw() {
	fill(r,g,b);

	ellipse(400, 300, 100, 100);
}

function keyPressed() {

	// when a key is pressed, increase 'r' by 15
	r += 15;
}



// move a ball

var ballX = 0;
var ballY = 300;

function setup() {
	createCanvas(800, 600);
	background(128);
}

function draw() {

	// erase background
	background(128);

	// draw ball
	ellipse(ballX, ballY, 100, 100);

	// move ball
	ballX += 1;
}
*/



// paints random ellipses on screen with varying sizes, colors, transparency 

function setup() {
	createCanvas(800, 600);
	background(128);
	fill(255);
	noStroke();
}

function draw() {

	// pick a spot for our ellipse
	var ellipseX = random(0, width);
	var ellipseY = random(0, height);

	// pick a width for our ellipse
	var ellipseD = random(5, 50);

	// pick random color
	var r = random(0, 255);
	var b = random(0, 255);
	var g = random(0, 255);
	//var a = random(50, 150);
	fill(r,g,b);

	// draw an ellipse here
	ellipse(ellipseX, ellipseY, ellipseD, ellipseD);
}

/*


// random painting program that paints ellipses
function setup() {
	createCanvas(800, 600);
	background(128);
	fill(255);
	noStroke();
}

function draw() {

	background(0, 15);

	// pick a spot for our ellipse
	var ellipseX = random(mouseX - 50, mouseX + 50);
	var ellipseY = random(mouseY - 50, mouseY + 50);

	// pick a width for our ellipse
	var ellipseD = random(5, 50);

	// pick random color
	var r = random(0, 255);
	var b = random(0, 255);
	var g = random(0, 255);
	var a = random(50, 150);
	fill(r,g,b,a);

	// draw an ellipse here
	ellipse(ellipseX, ellipseY, ellipseD, ellipseD);
}




// paint on scren. When they're done, can keep copy and save
function setup() {
	createCanvas(800, 600);
	background(128);
	fill(255);
	noStroke();
}

function draw() {

	// pick a spot for our ellipse
	var ellipseX = random(mouseX - 50, mouseX + 50);
	var ellipseY = random(mouseY - 50, mouseY + 50);

	// pick a width for our ellipse
	var ellipseD = random(5, 50);

	// pick random color
	var r = random(0, 255);
	var b = random(0, 255);
	var g = random(0, 255);
	var a = random(50, 150);
	fill(r,g,b,a);

	// draw an ellipse here
	ellipse( ellipseX, ellipseY, ellipseD, ellipseD);
}

function keyPressed() {
	// if 'S' key is pressed, save screen as PNG image
	save('masterpiece.png');
}




// mouse press check
function setup() {
	createCanvas(800, 600);
	background(128);
	fill(255);
	noStroke();
}

function draw() {

	if (mouseIsPressed) {
		console.log("mouse is pressed from draw");
	}

	ellipse(mouseX, mouseY, 25, 25);
}

function mousePressed() {
	console.log("mouse is pressed from function mousePressed");

}




// game example

// variable to keep track of position of ball
var ballX;
var ballY;

// score for our game
var score = 0;

function setup() {
	createCanvas(800, 600);
	background(128);

	ballX = random(50, 750);
	ballY = random(50, 550);
}

function draw() {

	background(255);
	text("Your score: " + score, 50, 50);

	// get the distance between the player (mouse) and the ball
	var d = dist(mouseX, mouseY, ballX, ballY);

	text("Your distance: " + d, 50, 75);

	if (d < 25) {
		//give user a point
		score += 1;
		ballX = random(50, 750);
		ballY = random(50, 750);
	}

	// draw ball
	ellipse(ballX, ballY, 50, 50);

}
*/
