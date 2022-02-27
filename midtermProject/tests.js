// In order to test functionalities at the specific parts of the midterm project, utilize below code for designated challenging tasks to ensure that the program is running succesfully

let posX;
let moveCheck = posX;

// Checking if the bouncer moves only by 1 pixel to that side when the user presses the arrow key once

if (key.Clicked()) {
  // Clicked function to be coded - checking if it is working properly
  if (moveCheck == posX + 1 || moveCheck == posX - 1) {
    // comapre if the bouncer moved by 1
    print("Test 1 success");
  } else {
    print(" Test 1 fail");
  }
}

// Checking if the bouncer should keep moving in that direction  when the user keeps the arrow pressed all until the button is released
if (key.Pressed()) {
  // Pressed function to be coded - checking if it is working properly
  if (moveCheck > posX + 1 || moveCheck < posX - 1) {
    // comapre if the bouncer moved by 1
    print("Test 2 success");
  } else {
    print(" Test 2 fail");
  }
}

// Checking if the game can be started with a button press

let value = 1;
button.mousePressed(startGame);

// startGame will exist on it's own ( a longer function ) , the testing part to be added during testing phase to check connection between button.mousePressed() and startGame()
function startGame() {
  // (...) function code
  // button is clicked at start of game
  value = 0; // start the game
  //(...) value to be later used in the draw() function to set up the game canvas - here we are checking if the button will call and execute the function correctly upon clicking
}
if (value === 0) {
  // start canvas
  print("Test 3 success"); // begin the game
} else {
  print(" Test 3 fail");
} // canvas did not change



// Checking if the game is keeping the correct score
let score = 0; 
let scoreCheck = score; 

// when bouncer bounces back a ball, the user gains 1 point
if ((myCircle.y >= myBouncer.posY && myCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myCircle.x >= myBouncer.posX && myCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
  //(...) function code
  score +=1; 
}
if (score === scoreCheck+1) {
  // check if score updated
  print("Test 4 success"); // score updates
} else {
  print(" Test 4 fail");
} // score does not update
