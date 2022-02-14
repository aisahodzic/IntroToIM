class MovingCircle {

  // This class was resued from the class example. Please refer to the example for more details on this. - https://github.com/michaelshiloh/resourcesForClasses/tree/master/src/p5jsSketches/simpleP5jsClassExample

  // consturctor for balls
  constructor( xpos,  ypos) {
    this.x = xpos;
    this.y = ypos;
    this.xSpeed = random(2,9); 
    this.ySpeed = random(3,8);
    this.color = color(0, 255, 0)
  }


   update() {
     //updating the speeds
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

// check if we touch the horizonal or vertical wall 
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

// bouncer is the class that is made for the bouncer rectangle; it is very simialr to previous MovingCirlce example 
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
    rect(this.posX, this.posY, this.bouncerWidth, this.bouncerHeight);
  }
  updateBouncer() {

    this.posX += this.speed;
    // if the bouncer touches the vertical boundary, it should go bounce back 
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
  //made 3 balls of class MovingCircle
  myCircle= new MovingCircle(50, 20);
  mySecondCircle= new MovingCircle(100, 100);
  myThirdCircle= new MovingCircle(70, 65);
  //set bouncer in the middle of the screen
  myBouncer = new Bouncer(0, height/2, color(155, 0, 40));
}

function draw() {
  background(color(255,255,153));
  //run the bouncer
  myBouncer.run();
  
  // update the positions of both balls
  myCircle.update();
  mySecondCircle.update();
  myThirdCircle.update();
  
  // check for collisions with the walls
  myCircle.checkCollisions();
  mySecondCircle.checkCollisions();
  myThirdCircle.checkCollisions();

  //check for each ball if it touches the bouncer! if it does, bounce it in opposite y direction. Also if it does, change the color of the ball when bouncing back. The ball will bounce only if it touches the current locaation of the bouncer. 
  if ((myCircle.y >= myBouncer.posY && myCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myCircle.x >= myBouncer.posX && myCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    myCircle.ySpeed = -myCircle.ySpeed;
    myCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }
  if ((mySecondCircle.y >= myBouncer.posY && mySecondCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (mySecondCircle.x >= myBouncer.posX && mySecondCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    mySecondCircle.ySpeed = -mySecondCircle.ySpeed;
    mySecondCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }
  if ((myThirdCircle.y >= myBouncer.posY && myThirdCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myThirdCircle.x >= myBouncer.posX && myThirdCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    myThirdCircle.ySpeed = -myThirdCircle.ySpeed;
    myThirdCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }
  
// draw the balls
  myCircle.drawCircle(myCircle.color);
  mySecondCircle.drawCircle(mySecondCircle.color);
  myThirdCircle.drawCircle(myThirdCircle.color);
  
 
}

const XSPEED = 6;
const YSPEED = 5;
const CIRCLESIZE = 30;
