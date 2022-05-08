let color = "";
// array containing all the colors we will be using
var colorArray = ["red", "green", "blue", "yellow", "magenta"];

var color_of_word; //stores the color of the text
var name_of_word; //stores the name of the color

var seconds;
var timeSame = 0; //total seconds when word and color are same
var timeDiff = 0; //total seconds when word and color are different

var roundSame = 0; //number of "same" rounds
var roundDiff = 0; //number of "different" rounds

// setup the intructions screen with example move
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  fill(255);
  textSize(40);
  text("STROOP TEST", windowWidth/2-100, windowHeight/2-50)
  textSize(20);
  textAlign(CENTER);
  text("We will display words. You need to press the button of the color that this word is saying.\n Do it as fast as you can!\n Hit ENTER bar to start.", windowWidth/2-200, windowHeight/2, 500);
  
  let Xpositioning = windowWidth/2-150;
  text("If word is ", Xpositioning, windowHeight/2+150);
  fill('magenta');
  text ("yellow", Xpositioning+100, windowHeight/2+150);
  fill(255);
  text("then press yellow button", Xpositioning+270, windowHeight/2+150);
  fill('yellow');
  circle(Xpositioning+430, windowHeight/2+140, 30);


  // it will try to find an arduino you've already given permission to use in the browser:
  setUpSerial();
}
//empty draw function
function draw() {}

// if it can't find an Arduino that you have allowed before (given permission to use) then you need a user gesture to run setUpSerial() again
// this time pass SELECT_PORT to setUpSerial() to force the select port process
function keyPressed() {
  if (key == " ") {
    // important to have in order to start the serial connection!!
    setUpSerial(SELECT_PORT);
  }
// key 13 means Enter key. This function is called when user presses enter to START the game as explained in instructions  
  if (keyCode == 13) {

    //all values are reset and new word is generated
    timeSame = 0;
    timeDiff = 0;
    roundSame = 0;
    roundDiff = 0;

    newWord();
  }


}
// create a new word that will be displayed to the user 
function newWord() {
// results are displayed when there was at least 5 rounds of same word-color match and at least 5 rounds of different word-color match 
  // this way we have enough data to calculate and display the results
  //else create random word and color combos

  if (roundSame > 4 && roundDiff > 4) {
    results();
  } else {
    seconds = 0;
    seconds = frameCount / 60;
    // console.log(seconds);

    background(0);
    textSize(70);

    color_of_word = random(colorArray);
    name_of_word = random(colorArray);

    fill(color_of_word);
    text(name_of_word, windowWidth/2, windowHeight/2);
  }
  frameCount = 0;
}

// display the results. we want results for average time of pressing the button for same word-color match and for different word-color match  
function results() {
  
  var sameAverage = (timeSame / roundSame).toFixed(3)
  var diffAverage = (timeDiff / roundDiff).toFixed(3)
  var score = (diffAverage - sameAverage).toFixed(3)
  
  background(0);
  fill(255);
  textSize(40);
  text("RESULTS", windowWidth/2-30, windowHeight/2-50)
  textSize(20);
  text("Average time when word and color are same: " + sameAverage + " seconds.", windowWidth/2-30, windowHeight/2+50);
  text("Average time when word and color are different: " + diffAverage + " seconds.", windowWidth/2-30, windowHeight/2+100);
  text("Your Stroop Effect score is: " + score + " seconds. Press the space bar to try again!", windowWidth/2-30, windowHeight/2+150);
}

// in readSerial, we are reading from arduino
function readSerial(data) {
  // make sure there is actually a message
  if (data != null) {
    // store the incoming data as 'color'
    color = data; 
  }
  
// debugging purposes: print("color is", color);
  // if the color of button pressed and word presented are the same
  if (color == name_of_word) {
    // send a signal of correct message to arduino to trigger LED lights for correct answer
    writeSerial(1);

    //add seconds to "timeSame" and increase number of same rounds
    //else add seconds to "timeDiff" and increase number of different rounds

    if (color_of_word == name_of_word) {
      timeSame += seconds;
      roundSame++;
    } else {
      timeDiff += seconds;
      roundDiff++;
    }
   // create a new word 
    newWord();
} 
}

//// ARUDINO CODE

//  // 2 - green
//  // 3 - magenta
//  // 4 - blue
//  // 5 - yellow
//  // 6 - red 

// //Including the Arduino library downloaded from the 'manage libraries' tab
// #include <Adafruit_NeoPixel.h>

// int answer = 0;

// int LED_PIN = 11;
// int NUM_LED = 28;
// // setup the neopixed strip
// Adafruit_NeoPixel strip(NUM_LED, LED_PIN, NEO_GRB + NEO_KHZ800);

//// setup all the pins for each button
//  void setup() {
//    Serial.begin(9600);
//    pinMode(2, INPUT);
//    pinMode(3, INPUT);
//    pinMode(4, INPUT);
//    pinMode(5, INPUT);
//    pinMode(6, INPUT);

//    strip.begin();
//  }

//  void loop() {

//    strip.setBrightness(0);
//    strip.show();
   
//    if(digitalRead(2)==HIGH){  //if button 2 is pressed...
//       Serial.println("green"); //print the message on a new line
//    }
//    else if(digitalRead(3)==HIGH){  //if button 3 is pressed...
//       Serial.println("magenta"); //print the message on a new line
//    }
//    else if(digitalRead(4)==HIGH){  //if button 4 is pressed...
//       Serial.println("blue"); //print the message on a new line
//    }
//    else if(digitalRead(5)==HIGH){  //if button 5 is pressed...
//       Serial.println("yellow"); //print the message on a new line
//    }
//    else if(digitalRead(6)==HIGH){  //if button 6 is pressed...
//       Serial.println("red"); //print the message on a new line
//    }
//    else{Serial.println("nothing");}

// // receiving messages from the p5js about whether the button pressed is correct or not
//   if (Serial.available() > 0) { 
//    answer = Serial.read();

// // light up the LEDS if the answer is correct
// //ascii for char 1 is 49
//    if (answer == 49) {
//       for (int i = 0; i < 29; i++) { 
//         strip.setPixelColor(i, 0, 255, 0);
//         strip.setBrightness(255);
//         strip.show();
//       }
//       delay(300);
//    }
//   }
//  }
