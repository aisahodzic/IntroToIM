**Brain teaser in Colors**

While making the piano keyboard in past projects, I got inspired to use the ability of button-switches as a response to screen action. For the final project, I was planning to incoorporate physically interactive system that challenges our perception, reflexes and text-to-color recognition. 
Hence, I would like to create a game interface that involves fast back-and-forth interaction with Arduino and the screen controlled by p5.js. and immediate response from the user. 

My favorite games are brain teasers and I decided to do a game interface for one. It will be about the color recognition. A word, say 'Blue' is presented in the p5js, while the background behind the word is a green background. The user should click the button on Arduino which is of the color that the word represents - in this case, that is a blue button. I want to see how fast can a human react in recognizing the correct color instead confusing it with the color in the background. Additionally, I plan to add a LED lamps of corresponding colors, as well as specific sounds for each color so that I help the brain recognize the colors better. With different levels, the game speeds up and you need to react quicker. As well, the background colors start mixing, so you would get both green and yellow miixing in the background, while the word presented is 'blue' and you still have to click the blue button. The one who can react correctly to the highest number of tasks earns the most points. 


**Finalized concept for the project:**

Members: Ryan and Aisha

**Stroop effect game**

For the final project, we will create a game interface that simulates Stroop effect (https://en.wikipedia.org/wiki/Stroop_effect). This effect occurs when there is a mismatch between the name of a color (e.g., "blue" or "red") and the color that is displayed on the monitor (i.e., the word "red" printed in blue ink instead of red ink with a yellow background). The user is supposed to recognize the correct color instead confusing it with the color in the background and thus win points.


**p5.js**
_Description of what P5 program will do and what it will send to and/or receive from Arduino_

The name of the color ("blue") and a background of different color ("red") will be displayed by p5js, with random choice of color matches. Each time a new  color appreas, it will have it's number encoding ( for example, num = 2 for blue ). Prior to the game starts, we will set up matchings for each color-to-button (read: pin) combination. After the color is displyed, the user will click a button which means that the arudino will send back the information about the button pressed (pinNumber). p5js will check the chosen matching, and if the maching is correct, it will send '1' and produce an affirmative sound effect, whereas if it is false, it will send '0' to ardino and produce a negative sound effect. For what happens further, refer to the arduino section below.  

**Arduino** 
_Description of what your Arduino program will do with each input and output and what it will send to and/or receive from P5_

The arduino will have a number of buttons that correspond to the number of colors used in the game (number TBD). Since we don't have buttons in all colors, we will use some buttons and paint over them ( for example purple) Each time the button is pressed, it will send the number of the button that is encoded as the number of that button - in this case, it will be the pinNumber that the button is connected to. This number is sent to p5js for checking. Now Arudino waits. If the correct button is pressed, p5js will send a feedback information as 1 ( true - correct match ) and the neopixels will light up in the color of the correctly guessed answer. Otherwise, if the feedback is 0 ( false ), the neopixels will light up in random changing colors to signify the end of the game. Inspired by the previous class, we will use a wooden board from IM lab to incorporate different buttons, leds, arduino and neopixels to create an interactive gaming board. This means we will need to design our wood board for playing, to figure out where each button and light will be placed in order to produce an intuitive user interface for a high-quality user experience. We will need to use the drilling machine to make the holes for each button and lights, as well as to find more gaming-like buttons for playing the game than those provided in sparkfun kit. We will need to reserach further on the usage of use neopixels by adafruit since we don't have experience in using them. 


<img width="687" alt="Screen Shot 2022-04-23 at 4 19 33 PM" src="https://user-images.githubusercontent.com/71720380/164894186-3e036ee3-84fa-415c-9039-7063574d0084.png">

<img width="850" alt="Screen Shot 2022-04-18 at 5 02 34 PM" src="https://user-images.githubusercontent.com/71720380/163812198-672de8ef-be80-426e-b2bf-97536af43734.png">

**April 24th Update**

Arduino Code for getting the neopixels strip to work we found at [this website.](https://learn.adafruit.com/adafruit-neopixel-uberguide/arduino-library-use)
```
//Including the Arduino library downloaded from the 'manage libraries' tab
#include <Adafruit_NeoPixel.h>

int LED_PIN = 7;
int NUM_LED = 19;
Adafruit_NeoPixel strip(NUM_LED, LED_PIN, NEO_GRB + NEO_KHZ800);

void setup() {
  // put your setup code here, to run once:
  strip.begin();
  strip.show();

}

void loop() {
  // put your main code here, to run repeatedly:
  for (int i = 0; i < 19; i++) { 
    strip.setPixelColor(i, 255, 173, 1);
    strip.setBrightness(255);
    strip.show();
  }
}
```
Diagram we used as a guide when connecting the neopixels strip to ground, 5V, and a sensing pin on the Arduino:
![image](https://user-images.githubusercontent.com/98512630/164976064-ba686f72-58e0-4c31-a530-a6d035418965.png)

**Photos of design & development stages**

-> Board Design: finding board of suitable size and proportions and buttons and positioning them on the board. We will need more buttons but could not find them at IM lab

![IMG_9420](https://user-images.githubusercontent.com/71720380/165147355-0822bc82-247b-4410-b877-fc1162ee1c4b.jpeg)

-> Focus on making neopixels work as we identified it as our major challenge

![IMG_9421](https://user-images.githubusercontent.com/71720380/165146589-b3bfe906-7f32-40e6-b678-ce3a0e67d5a9.jpeg)
![IMG_9422](https://user-images.githubusercontent.com/71720380/165146598-ada0b027-7ecd-40fc-991a-3d9e9107383c.jpeg)
![IMG_9423](https://user-images.githubusercontent.com/71720380/165146604-0d182e9d-e6f8-4300-b8a5-3b0f48b19949.jpeg)
![IMG_9424](https://user-images.githubusercontent.com/71720380/165146607-e5d3d244-704b-49aa-a5a8-2de53ec8da34.jpeg)
![IMG_9425](https://user-images.githubusercontent.com/71720380/165146610-1a77e324-365b-4d6b-a532-242908a501f3.jpeg)
![IMG_9426](https://user-images.githubusercontent.com/71720380/165146616-17544ef3-d891-4228-a0d8-d557425ddd76.jpeg)
![IMG_9427](https://user-images.githubusercontent.com/71720380/165146620-48684162-65a4-4355-b422-dc191ef88812.jpeg)
![IMG_9428](https://user-images.githubusercontent.com/71720380/165146622-15182ec6-ca8b-4209-b09c-2fd05cf17a53.jpeg)


28th April 2022

progress link: https://editor.p5js.org/ah4601/sketches/mWKMl3cAr 
- connected button via Arduino to p5js
- previous neopixel strip wasn't working so prof. Michael helped us solder a new neopixel strip 
- got new buttons to work with 


 28th April 2022 - evening
 
 progress link: https://editor.p5js.org/ah4601/sketches/ucNVpn2C8
 
 - figuring out serial communication to work succesfully
 - connecting big buttons to arduino and sending right information from them 
 - making a starting game interface on top of the serial communication 

User Testing (Eid Break)

[User Testing Video 1](https://youtube.com/shorts/kEi7z6hKAFc?feature=share)

[User Testing Video 2](https://youtube.com/shorts/fQD0LdSKz2Y?feature=share)

[User Testing Video 3](https://youtu.be/PeHzxxS8rag)

 What we learned & What We Plan to Change:
 - Two of our three users successfully played the game, and requested to play it again, suggesting they were engaged and enjoyed the basic concept (this was also reflected in their body language which seemed concentrated on the task at hand and the fast-paced responses). 
 - One of our users had difficulty playing the game properly even after reading the instructions, so we plan to make the language clearer and maybe even add an example on the instruction screen.
 - Since this was a very rudimentary version of the game, it was expected that the users would find the design overly simplistic. They requested a more aesthetic visual interface, and they responded positively to our proposed plan of adding an LED strip and creating correct and incorrect sound effects, saying this would "make it more intense" which we took to mean more engaging. Additionally, they unanimously asserted that we paint the fifth button a different color to differentiate it from the other red button.
 - In the coming week will also attempt to add a losing screen by way of a state machine.
