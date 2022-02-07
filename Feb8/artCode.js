function setup() {
  createCanvas(700, 600);
  background(240);

  let yPos = 300;
  let xPos;
  let yDir = 0;
  let count = 0;
  let strokeVal = -50;
  fill(0);

  while (count < 5) {
    xPos = 10 * count;
    print(xPos);
    strokeVal += 50;
    stroke(strokeVal);

    for (xPos; xPos < width; xPos = xPos + 2) {
      if (yPos >= 600) {
        yDir = 0;
      } else if (yPos <= 0) {
        yDir = 1;
      }

      if (yDir == 0) {
        yPos -= 10;
      } else {
        yPos += 10;
      }
      circle(xPos, yPos, 2);
    }
    count += 1;
  }
}

function draw() {
  print(mouseX, mouseY);
}
