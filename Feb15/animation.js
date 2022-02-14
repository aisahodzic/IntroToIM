class MovingCircle {

  constructor( xpos,  ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xSpeed = random(2,9); 
    this.ySpeed = random(3,8);
    this.color = color(0, 255, 0)
  }

   update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

   checkCollisions() {
    const R = CIRCLESIZE/2;
    if ( (this.x < R) || (this.x > width-R)) {
      this.xSpeed = -this.xSpeed;
    }
    if ( (this.y < R) || (this.y > height-R)) {
      this.ySpeed = -this.ySpeed;
    }
  }

   drawCircle(color) {
    fill(color);
    ellipse(this.x, this.y, CIRCLESIZE, CIRCLESIZE);
  }
}

class Bouncer{
    constructor(x, y, c) {
    this.posX = x;
    this.posY = y;
    this.bouncerWidth = 150;
    this.bouncerHeight = 15;
    this.bouncerColor = color(0,255);
    this.speed = random(7,10);
  }
  drawBouncer() {
    fill(this.bouncerColor);
    noStroke();
    rect(this.posX, this.posY, this.bouncerWidth, this.bouncerHeight);
  }
  updateBouncer() {

    this.posX += this.speed;
    
    if ( (this.posX < 0) || (this.posX > width-this.bouncerWidth)) {
      this.speed = -this.speed;
    }

  }
  run() {
    this.drawBouncer();
    this.updateBouncer();
  }

}




function setup() {
  createCanvas(600,600);
  myCircle= new MovingCircle(50, 20);
  myOtherCircle= new MovingCircle(100, 100);
  myThirdCircle= new MovingCircle(70, 65);
  myBouncer = new Bouncer(0, height * 0.5, color(155, 0, 40));
}

function draw() {
  background(color(255,255,153));
  myBouncer.run();
  
  myCircle.update();
  myOtherCircle.update();
  myThirdCircle.update();
  
  myCircle.checkCollisions();
  myOtherCircle.checkCollisions();
  myThirdCircle.checkCollisions();

  //check if the ball touches the bouncer! if it does, bounce it in opposite y direction
  if ((myCircle.y >= myBouncer.posY && myCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myCircle.x >= myBouncer.posX && myCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    myCircle.ySpeed = -myCircle.ySpeed;
    myCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }
  if ((myOtherCircle.y >= myBouncer.posY && myOtherCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myOtherCircle.x >= myBouncer.posX && myOtherCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    myOtherCircle.ySpeed = -myOtherCircle.ySpeed;
    myOtherCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }
  if ((myThirdCircle.y >= myBouncer.posY && myThirdCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myThirdCircle.x >= myBouncer.posX && myThirdCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    myThirdCircle.ySpeed = -myThirdCircle.ySpeed;
    myThirdCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }

  myCircle.drawCircle(myCircle.color);
  myOtherCircle.drawCircle(myOtherCircle.color);
  myThirdCircle.drawCircle(myThirdCircle.color);
  
 
}

const XSPEED = 6;
const YSPEED = 5;
const CIRCLESIZE = 30;
