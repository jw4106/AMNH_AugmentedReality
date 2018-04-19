var canvas;
var tree, bird1, bird2, bird3, bird4;

function setup() {
  tree = loadImage("tree.jpg")
  bird1 = loadImage("bird1.png")
  bird2 = loadImage("bird2.png")  
  bird3 = loadImage("bird3.png")
  bird4 = loadImage("bird4.png")
}

function draw() {
  // set the background size of our canvas
  canvas = createCanvas(canvasLength, canvasLength);
  canvas.parent('view-container')
}