//scoreVal keeps the score record and increases when balls touch the bouncer.
let scoreVal = 0;
// currGameScreen is initial screen, look up draw() function to see the use and the rest of the screens
let currGameScreen = 0;
// QUANTITY is the nubmer of Covid-particles / balls used in the game
let QUANTITY = 3;
// buttonText is the text that will be displayed in a button, typically varies between 'start' and 'restart' depending on the screen
let buttonText;
// bouncing balls will be stored in an array instead of creating them each on their own
let myCircleArray = [];

// preload necessary files to be used
function preload() {
  // load the background images that would cover just a portion of canvas, one for each of 3 screens
  bg = loadImage("cov1.jpeg");
  covid_bg = loadImage("covid-bg.jpeg");
  end_image = loadImage("cov2.png");
  // covid particles and mask images
  covid_ball = loadImage("covid_ball.png");
  mask_bouncer = loadImage("mask8.png");
  // load the font to be Debug used
  DebugFont = loadFont("DebugFont.otf");
  // load the sound of the bouncing effect
  song = loadSound("sfx-boing8.mp3");
}

function setup() {
  background(0);
  createCanvas(700, 700);
  myCircleArray = [];

  // newHeight is where the game is played, the rest 70px is the 'navigation bar' with start button and score
  let newHeight = height - 70;
  //set bouncer in the lower end of of the screen
  myBouncer = new Bouncer(0, 0.85 * newHeight, color(155, 0, 40));

  //fill the previously made myCircleArray array of balls of class MovingCircle, and push each new instance into the array
  for (let i = 0; i < QUANTITY; i++) {
    // position ball's starting position considering ball's diameter so it doesn't get stuch at the edge
    myCircleArray.push(
      new MovingCircle(
        random(CIRCLESIZE, width - CIRCLESIZE),
        random(CIRCLESIZE, 300 + CIRCLESIZE)
      )
    );
  }
}

function draw() {
  // if conditions to determine which of the 3 screen to draw
  // display the contents of the initial screen
  if (currGameScreen == 0) {
    initScreen();
    buttonText = "Start";
    // display the contents of the game screen
  } else if (currGameScreen == 1) {
    gameScreen();
    buttonText = "Restart";
    // display the contents of the game-over screen
  } else if (currGameScreen == 2) {
    gameOverScreen();
    buttonText = "Restart";
  }
  // create the button for (re)starting the game
  button = createButton(buttonText);
  // center the button at the bottom right
  button.position(0.8 * width, 0.9 * height);
  button.size(100, 50);
  //when button if pressed, the screen will be changed to start (or restart) the bouncing game
  button.mousePressed(changeDisplay);
}
// initScreen()  determines initial screen in the game with the welcome message, instructions of how to play and the start button which switches to game screen
function initScreen() {
  let newHeight = height - 70;
  // start display or button is pressed again
  background("white");
  image(bg, 0, 0, 700, 630);

  fill("black");
  textAlign(CENTER);
  textFont(DebugFont, 30);
  // welcome test and gaming instructions
  text("MASK UP!", 30, 140, 400, 600);
  textFont(DebugFont, 20);
  text(
    "Welcome to Mask Up game! \n\n While Covid particales are flowing in the air, you need to avoid them with your mask! The goal is to stay masked, and protected from Covid for as long as possible. \n\n You can move your mask with left and right arrow keys.  Extra points if you put a mask right before it touches the ground and barely escape the covid! \n\nOnce a Covid particle falls on the ground where a human is chilling, the game is over.",
    30,
    170,
    400,
    600
  );
  text("Click the START button to start the Mask Up game!", 30, 640, 500, 600);
}

// gameScreen() is the main function for the 2nd screen in which the game is played
function gameScreen() {
  let newHeight = height - 70;

  background(color(255, 255, 153));
  image(covid_bg, 0, 0, 700, 630);
  textSize(30);
  rect(width / 2.4, 0.91 * height, 120, 45, 20);
  fill("black");
  text("Score  " + scoreVal, width / 2, 0.95 * height);

  //run the bouncer
  myBouncer.run();
  // the function keyIsDown that I found on reference page https://p5js.org/reference/#/p5/keyIsDown helps in moving the bouncer with key pressed. More importantly, if the key is continuously pressed - without releasing, it keeps moving the bouncing in chosed direction.
  // upon pressing either Left arrow or Right arrow key, a x-position value would need to be recomputed which moves the and bouncer's position. Simulateously, this means that it would need to be re-compared with each moving ball move bouncer with key presses (if-condition below). Right key arrow moves bouncer 15px right, left moves it 15px left.
  if (keyIsDown(LEFT_ARROW)) {
    myBouncer.posX -= 15;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myBouncer.posX += 15;
  }
  // circle thought the myCircleArray containing all the balls to update their status and manage the movement
  for (let i = 0; i < myCircleArray.length; i++) {
    // update the positions of both balls
    myCircleArray[i].update();
    // check for collisions with the walls
    myCircleArray[i].checkCollisions();
    // draw the ball
    myCircleArray[i].drawCircle();

    //check if ball touched the bouncer! if it did, bounce it in opposite y direction. The ball will bounce only if it touches the current location of the bouncer. The condition compares the X and Y position of the particle, with X and Y position of the bouncer that could possibly be touching the bouncer, hence considering the R radious of the particle
    if (
      myCircleArray[i].y >= myBouncer.posY - R &&
      myCircleArray[i].y <= myBouncer.posY + myBouncer.bouncerHeight - R &&
      myCircleArray[i].x >= myBouncer.posX &&
      myCircleArray[i].x <= myBouncer.posX + myBouncer.bouncerWidth
    ) {
      myCircleArray[i].ySpeed = -myCircleArray[i].ySpeed;
      //count the number of times a ball is bounced back as use it as a score
      scoreVal += 1;
      // the sound that was loaded in preload() function is now used to simulate the bouncing effect with an matching sound
      song.play();
    }
    //if the ball falls below the bouncer's point, the game is over and we switch to the game-over screen.
    else if (myCircleArray[i].y > 0.9 * newHeight) {
      currGameScreen = 2;
    }
  }
}

//gameOverScreen() is a function for last, 3rd screen that handles the display of the final score and offers the chance to play the game again with clicking the button as the buttonText changes to 'restart'
function gameOverScreen() {
  image(end_image, 0, 0, 700, 700);
  textSize(20);
  textFont(DebugFont, 40);
  // display the final score that the player has achieved
  text(
    "Oh No! \n\n You caught Covid! Your score is " +
      scoreVal +
      ".\n\n\n Click below to restart!",
    400,
    height / 4,
    300
  );
  buttonText = "restart";
  // empty the balls array (it will be filled again when the game restarts)
  myCircleArray = [];
  // switch to the initial state
  currgameScreen = 0;
}

// changeDisplay() manages the event of clicking the button. If the button was clicked at initial display, it will start the game. Otherwise, it will restart it.
function changeDisplay() {
  // if we are on the initial screen when clicked, start the game
  if (currGameScreen == 0) {
    scoreVal = 0;
    startGame();
  }
  // otherwise restart the game
  else {
    scoreVal = 0;
    restart();
  }
}

//Clicking the restart button enables the user to restart the game - it jumps right into a new game with restarted positions, such as score is 0 and setup is as the first time game was played
function restart() {
  score = 0;
  currGameScreen = 1;
  setup();
}
// start game simply switches to the game screen where the game is played
function startGame() {
  currGameScreen = 1;
}

// MovingCircle is the class which defines the covid patricle / ball movement. The class is heavily used for the myCircleArray, which is populated with instances of MovingCircle class. In order to add another ball, we simply call the MovingCircle while providing it with arguments required in constructor which are initial x and y positions
class MovingCircle {
  // This class was resued from the class example. Please refer to the example for more details on this. - https://github.com/michaelshiloh/resourcesForClasses/tree/master/src/p5jsSketches/simpleP5jsClassExample

  // consturctor for balls - xpos and ypos are the initial positions at which the ball will be drawn and from which the ball will start moving.
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    // XrandomNum and YrandomNum randomly choosen between (-3, -3.3) and (3, 3.3) for the ball speed, hence 2 numbers are stored, one positive one negative
    let XrandomNum = [random(-3, -3.3), random(3, 3.3)];
    let YrandomNum = [random(-3, -3.3), random(3, 3.3)];

    // now choose the number at random from the 2 numbers in each array and assign it to be the ball speed in either x or y direction
    this.xSpeed = random(XrandomNum);
    print(this.xSpeed)
    this.ySpeed = random(YrandomNum);
    print(this.ySpeed)
  }

  //updating the speeds for x and y directions
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // check if the ball touches the horizonal or vertical wall and if it does, change the respective speed direction, either x or y
  checkCollisions() {
    let newHeight = height - 70;
    if (this.x < R || this.x > width - R) {
      this.xSpeed = -this.xSpeed;
    }
    if (this.y < R || this.y > newHeight - R) {
      this.ySpeed = -this.ySpeed;
    }
  }
  // finally draw the circle. The ball is drawn with the previously loaded covid_ball image instead of the regular geometic shape.
  drawCircle() {
    fill("red");
    image(covid_ball, this.x, this.y, 50, 50);
  }
}

// bouncer is the class that is made for the mask bouncer; it is very simialr to previous MovingCirlce example
class Bouncer {
  // constructor handles mask bouncer's settings using x, y position and color,     // remember that bouncer will only move with arrow presses
  constructor(x, y, c) {
    this.posX = x;
    this.posY = y;
    this.bouncerWidth = 150;
    this.bouncerHeight = 90;
    this.bouncerColor = color(0, 255);
  }
  // draw the bouncer while using the preloaded image mask_bouncer from preload() function
  drawBouncer() {
    image(
      mask_bouncer,
      this.posX,
      this.posY,
      this.bouncerWidth,
      this.bouncerHeight
    );
  }
  // updates bouncers position monitoring if it should bounce off the walls
  updateBouncer() {
    // if the bouncer touches the vertical boundary, it should go bounce back
    if (this.posX < 0.0001) {
      this.posX = 0;
    } else if (this.posX > width - this.bouncerWidth) {
      this.posX = width - this.bouncerWidth;
    }
  }
  // run() function calls upon draw and update position for mask bouncer
  run() {
    this.drawBouncer();
    this.updateBouncer();
  }
}
// initial setting for the size and radious of covid particles
const CIRCLESIZE = 30;
const R = CIRCLESIZE / 2;
