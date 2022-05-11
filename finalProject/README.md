### Project Description
For the finalized version of our project, we slightly tweaked the game concept. Rather than having the user click the colored button that the word is written in, they are supposed to click the button corresponding to the word itself. For example, if the word is red, the user should click the red button regardless of the color it is written in. As an added signifier, when the user click the correct button, the LED strip flashes green. The user plays the game for a few rounds, and at the end, they get their stroop score which is a psychological measurement of their average response time. We think the concept of our project is applicable to various fields such as experimental psychology or early childhood education.

### Programs & Circuitry 
We mostly used P5.js as the visual interface, by making it randomly generate and display the words. We also used it to open the serial connection (using Prof. Aaron's code) as well as process responses entered on the physical interface, since it determines whether the LED strip will light up green and requires the user to press the correct button in order to move on. 
[P5.js sketch link](https://editor.p5js.org/ryansmith/sketches/xPqYFn1ss)

For the Arduino, we primarily had it read input via the buttons, assigning the color of the button to each pin number. In addition, we used it to control the LED strip using the Adafruit Neopixel library.

Our circuit is made up of the buttons and the LED strip, with input from each button being read to a particular pin, and all of them sharing a ground ad 5V connection. Output is sent to the LED strip via pin 11, and the strip also shares a ground and 5V connection with the buttons. 

### User Testing & Changes Made
We had three users try our program in its early stages, and they were able to complete it successfully, for the most part. One user misunderstood the instructions, so we added a visual example on the instruction screen to make it clearer. Additionally, we took their suggestions for improving the interface by making the program full-screen and adding the LED strip to the physical interace. We also redesigned the front panel to make it more aesthetcally pleasing.   

### Schematic
![IMG_0201](https://user-images.githubusercontent.com/98512630/167869680-b5803696-7233-462e-bc2b-02c8b06154f4.jpg)



Aiša:
- Major problems
- Discoveries
- References
- Images 
