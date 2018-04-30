/*
// shapes and color
// setup function - used for commands that r
function setup()
{
	createCanvas(800, 400);

	fill(0, 255, 0);
	strokeWeight(10);

	rect(250, 250, 50, 50);
	ellipse(100, 100, 50, 50);
	/*
	//    R   G  B
	fill(255, 0, 0);

	// draw ellipse from center
	ellipse(100, 100, 50, 50);

	//   R   G    B    Alpha (transparency)
	fill(0, 100, 200, 50);

	// border
	strokeWeight(5);
	// stroke color
	stroke(0, 0, 255, 100);

	// draw rect from top left corner
	rect(100, 100, 50, 100);
	/*

}

// draw function - used for commands that ne
function draw()
{
	// anything put in draw will repeat it over and over

	// erase the world. Flooding background with white color. Every 1/60th of second, replacing screen.
	background(255);

	// mouse position. Only accepts single argument
	//console.log(mouseX, mouseY);

	// how many frames of animation have been run
	console.log(frameCount);

	rect(250, 250, 50, 50);
	ellipse(mouseX, mouseY, 50, 50);	
}



// opaque trail
function setup()
{
	createCanvas(800, 400);

	// set up a light blue fill
	fill(0, 0, 255, 5);

	// turn off the stroke of our shapes
	noStroke();
}

function draw()
{
	if (mouseIsPressed == true) {
		ellipse(mouseX, mouseY, 50, 50);
	}
}



// black background, red dot
function setup()
{
	createCanvas(800, 400);
}

function draw()
{
	// black background
	background(0);

	// red ellipse, no stroke
	noStroke();
	fill(255, 0, 0);
	ellipse(mouseX, mouseY, 50, 50);
}

*/

function setup()
{
	createCanvas(800, 400);
	background(0);
}

function draw()
{
	// black background
	background(0, 5);

	// red ellipse, no stroke
	noStroke();
	fill(255, 0, 0);

	// top left ellipse
	ellipse(mouseX, mouseY, 50, 50);
	ellipse(800-mouseX, mouseY, 50, 50);
	ellipse(mouseX, 400-mouseY, 50, 50);
	ellipse(800-mouseX, 400-mouseY, 50, 50);
}