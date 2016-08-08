function setup() {
  background(10, 30, 20);
  createCanvas(800, 800);

  fill(255, 255, 255);
  ellipse(400, 400, 100, 140);

}

function draw() {
  background(153, 221, 255);
  strokeWeight(5);
  stroke(255, 255, 255);
  var xcoord = random(1, 799);
  var ycoord = random(1, 799);
  line(xcoord, ycoord, xcoord, ycoord + 10);
  fill(255, 255, 255);
  ellipse(400, 400, 100, 140);

}