// create a variable for A-Frame world
var world;

// references to our markers (which are defined in the HTML document)
var hiroMarker, zbMarker;

// how long has each marker been visible?
var hiroVisCount = 0;
var zbVisCount = 0;

// global flag to keep track of whether we should track new markers
// (we can pause this when the user wants to interact with the content)
var tracking = true;

// global to switch between track and tree of live
//var treeOfLife = true;
var canvasLength = 500;

// graphics we may need during 2D mode
var b1, b2, currentBird;

// a new drawing canvas (to overlay on top of the regular canvas)
var overlayCanvas;

//holder for all bird objects
var birds = [];
var firstbird, secondbird;

class Bird{
  constructor(name, description, xPos, yPos, image,sizex, sizey, status){
    this.name = name;
    this.description = description;
    this.image = image;
    this.sizex = sizex;
    this.sizey = sizey;
    this.x = xPos;
    this.y = yPos;
    this.status = status;
  }
}

function preload() {
  b1 = loadImage('bird1.png');
  b2 = loadImage('bird2.png');

  tree = loadImage("tree.jpg");
  bird1 = loadImage("bird1.png");
  bird2 = loadImage("bird2.png"); 
  bird3 = loadImage("bird3.png");
  bird4 = loadImage("bird4.png"); 
}

function setup() {
  world = new World("ARScene");

  firstbird = new Bird('b1', 'description', 600, 250, b1, 100,100, 'hidden');
  secondbird = new Bird('b2', 'description', 500, 260, b2, 100,100, 'hidden');
  birds.push(firstbird);
  birds.push(secondbird);
  // grab a reference to our marker in the HTML document
  hiroMarker = world.getMarker("hiro");
  zbMarker = world.getMarker("zb");

  // put a painting on top of each marker
  var birdNum1 = new Plane({
    x:0, y:0, z:0,
    width: 3, height: 2,
    rotationX: -90,
    asset: 'birds1'
  });
  hiroMarker.addChild( birdNum1 );

  var birdNum2 = new Plane({
    x:0, y:0, z:0,
    width: 2, height: 1,
    rotationX: -90,
    asset: 'birds2'
  });
  zbMarker.addChild( birdNum2 );

  // create our overlay canvas (double the size as the regular canvas, which is 800x600)
  // this is because the canvas has to be scaled up to accomodate the AR video stream
  overlayCanvas = createGraphics(1600, 1200);
}

function draw() {

  // if we are in tracking mode we really don't need to do anything here
  if (tracking) {

  }

  // we are in 2D mode
  else {
    // erase the background of the world (hiding the video feed)
    world.clearDrawingCanvas();
    background(0, 200);

    // in my AR system the canvas is ALWAYS 800 x 600, but it's scaled up/down as needed

    // figure out how large the painting should be (50% of the window)
    var desiredWidth = 400;
    var scalingFactor = desiredWidth/currentBird.width;

    // draw our painting
    imageMode(CENTER);
    image(currentBird, width/2-200, height/2, 300, 200);
    text('bird name', 250, 400);
    text('description', 250, 450);
    rectMode(CENTER);
    image(tree,width/2+200, height/2, 350, 350 );
    displayBirds(birds);

    // draw a 'close' button
    fill(255);
    textSize(25);
    textAlign(CENTER);
    text("[ close ]", width/2-50, 200 );
/*
    // set the background size of our canvas
    canvas = createCanvas(canvasLength, canvasLength);
    //canvas.parent('view-container');
    image(tree, 0, 0, 500, 500);
    image(bird1, 150, 150, 80, 80);
    image(bird2, 200, 200, 80, 80);
    image(bird3, 25, 200, 80, 80);
    image(bird4, 250, 40, 100, 80);
*/
    // if the user is clicking the mouse we should let them draw on the OVERLAY canvas
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
      overlayCanvas.noStroke();
      overlayCanvas.fill(255, 75);
      overlayCanvas.ellipse(mouseX, mouseY, 10, 10);

      // how far are they from the close button?  If so, close the window
      if (dist(mouseX, mouseY, width/2-50,200) < 50) {
        tracking = true;
        overlayCanvas.clear();
        world.clearDrawingCanvas();
      }
    }

    // draw the overlay canvas
    imageMode(CORNER);
    image(overlayCanvas, 0, 0, overlayCanvas.width/2, overlayCanvas.height/2);
  }

}

function mousePressed() {
  // are we currently in tracking mode?
  if (tracking) {
    // see which marker is currently visible
    if (hiroMarker.isVisible()) {
      tracking = false;
      firstbird.status = 'visible';
      currentBird = firstbird.image;
    }
    else if (zbMarker.isVisible()) {
      tracking = false;
      secondbird.status = 'visible';
      currentBird = secondbird.image;
    }
  }
}

//function for displaying birds that have been scanned
function displayBirds(birds){
  for(let i = 0; i < birds.length; i++){
    if(birds[i].status === 'visible'){
      image(birds[i].image, birds[i].x, birds[i].y, birds[i].sizex, birds[i].sizey);
      if(dist(mouseX, mouseY, birds[i].x, birds[i].y) <= 70){
      	console.log('triggered');
        textSize(28);
        fill(0,255,0);
          text(birds[i].name, birds[i].x, birds[i].y);
      }
    }
  }
}

/*
function mousePressed() {
  var d = dist(mouseX, mouseY, 150, 150);
  if (d < 100) {
    //tint(255, 126);
    image(bird1, 150, 150, 80, 80, 255, 126);
  }
}
*/