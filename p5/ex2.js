/*
// bouncing box

// keep track of box position
var x = 100;
var y = 150;

// keep track of direction
var xDir = 1;
var yDir = 3;

//keep track of color
var r = 0;
var g = 0;
var b = 0;

// variable to keep track of our artwork
var chicken;

// preload function
function preload() {
	chicken = loadImage("images/chicken.png");
}


function setup() {
	createCanvas(800, 600);
	background(128);
}

function draw() {

	// erase the background
	background(128);

	// see if we need to bounce off the bottom of the screen
	if (y >= height-50 || y <= 0) {
		yDir *= -1;
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
	}

	// bouncing left/right
	if (x >= width-50 || x <= 0) {
		xDir *= -1;
		r = random(0, 255);
		g = random(0, 255);
		b = random(0, 255);
	}

	fill(r,g,b);
	//rect(x, y, 50, 50);
	image(chicken, x, y);

	// update position of box
	x += xDir;
	y += yDir;
}



// image garden example

// set up variables to hold our artwork
var scene;
var flower1;
var flower2;
var flower3;

// load in graphics
function preload() {
	scene = loadImage("images/scene.jpg");
	flower1 = loadImage("images/flower-1.png");
	flower2 = loadImage("images/flower-2.png");
	flower3 = loadImage("images/flower-3.png");
}

function setup() {
	createCanvas(800, 600);

	// draw the scene to the background
	image(scene, 0, 0);
}

function mousePressed() {
	// plant a flower where the mouse is
	imageMode(CENTER);

	//pick a random number between 0 and 3
	var chance = random(0, 3);
	if (chance < 1) {
		image(flower1, mouseX, mouseY);
	}
	else if (chance < 2) {
		image(flower2, mouseX, mouseY);
	}
	else (chance < 3) {
		image(flower3, mouseX, mouseY);
	}
}




// track mouse

//set up variables to hold our artwork
var cLeft, cRight;

// set up variable to hold our current image that we should be using
var current;

function preload() {
	cLeft = loadImage("images/chicken_left.png");
	cRight = loadImage("images/chicken_right.png");

	// make the left one our current one
	current = cLeft; 
}

function setup() {
	createCanvas(800, 600);
	noCursor();
}

function draw() {
	background(255);

	// which image should we use?
	if (mouseX < pmouseY) {
		current = cLeft;
	}

	if (mouseX > pmouseX) {
		current = cRight;
	}

	image(current, mouseX, mouseY);
}
*/




// keyboard control

// keep track of character
var x = 400;
var y = 300;

function setup() {
	createCanvas(800, 600);
}

function draw() {
	background(0);

	fill(255);
	ellipse(x, y, 25, 25);

	if (keyIsDown(65) == true) {
		x -= 5;
	}
}

function keyPressed() {

}