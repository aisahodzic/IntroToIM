# Project Description
For the finalized version of our project, we slightly tweaked the game concept. Rather than having the user click the colored button that the word is written in, they are supposed to click the button corresponding to the word itself. For example, if the word is red, the user should click the red button regardless of the color it is written in. As an added signifier, when the user click the correct button, the LED strip flashes green and a pleasant sound is made. The user plays the game for a few rounds, and at the end, they get their stroop score which is a psychological measurement of their average response time. We think the concept of our project is applicable to various fields such as experimental psychology or early childhood education.

# Programs & Circuitry 
We mostly used P5.js as the visual interface, by making it randomly generate and display the words as well as play the sound when the user is correct. We also used it to open the serial connection (using Prof. Aaron's code) as well as process responses entered on the physical interface, since it determines whether the LED strip will light up green and requires the user to press the correct button in order to move on. 
[P5.js sketch link.](https://editor.p5js.org/ryansmith/sketches/rZInZi0N0)

For the Arduino, we primarily had it read input via the buttons, assigning the color of the button to each pin number. In addition, we used it to control the LED strip using the Adafruit Neopixel library.

Our circuit is made up of the buttons and the LED strip, with input from each button being read to a particular pin, and all of them sharing a ground ad 5V connection. Output is sent to the LED strip via pin 11, and the strip also shares a ground and 5V connection with the buttons. 

# User Testing & Changes Made
We had three users try our program in its early stages, and they were able to complete it successfully, for the most part. One user misunderstood the instructions, so we added a visual example on the instruction screen to make it clearer. Additionally, we took their suggestions for improving the interface by making the program full-screen and adding the LED strip to the physical interace and adding a sound effect. We also redesigned the front panel to make it more aesthetcally pleasing.   

# Schematic
![IMG_0201](https://user-images.githubusercontent.com/98512630/167869680-b5803696-7233-462e-bc2b-02c8b06154f4.jpg)


# Major problems

### Serial communication 
After we assembled Arudino connection wtih Arcade buttons, we needed to make a succesful serial connection work. We followed professor Aaron's example, however the data was not being sent as we wanted it to. Multiple times the port would be disconnected we would lose the port value for some resason and had to restart the process. The arduino board would be sending multiple strange value to p5, yet sometimes values would be correct. After long hours of debugging and trying to find the issue, we found it on our arduino board. One wire was wrongly connected and that distrubed the communication. Actually, it was even more confusing since it only disturbed the communication in which this wire would be involved, giving the falsxe perception that everything is fine in cases where this wire wasn't used. 

###  Functioning neopixel strip 
It took us long to figure out how to use neopixel strips. After finding out where are how to solder, solering neopixel strip proved to be a very difficult and sensitive process. We had to be extra careful about each step, considering the minimal area to which you need to solder the vires. Lab assistants helped us in the process. However, we soon discovered that the stip were were soldering had multiple broken neopixels that just wouldn't light up. We were able to check for this damage prior to soldering. Luckily, the last strip that we used was fully functioning and professor helped us solder it. 

###  Neopixels lights not lighting up for yellow and magenta colors 
Red, blue and green lights were lighting up each time the user would press the button of that color. However, that was not working for yellow and magenta buttons. We were trying to solve this issue thought a code. Professor suggested that it might be sincd yellow and magenta require 2 LED lights (RBG require one each). To solve this issue, we reflected on professor's advice to use external power supply and gave it a try. 
Unfortunately, this didn't work and we had to rethinking the process of giving positive feedback to the user when they choose the correct answer.
Decision: we decided to signify correct answer in a different way. Each time user guesses the color correctly, we will display green lights ( green light generally known to be signal for correctness ) and add sound that would be affirmative.


# Discoveries

### Neopixel strip and Arcade buttons
Neither of us has worked with eopixel strip or Arcade buttons before. This was a very good exercise to learn working with both of these and to discover what they can do. We expected arcade to be complicated and to require 4-wire connection, but actually only 2-wires were enought. Neopixels were a more challenging part. The delays in processing information affected their display greatly - so much that a user can visibly be annoyed that neopixels are late in reacting. One way to minimize this is to remove any serial.println() from the neopixel funciton if possible since they take a lot of time, however the delays can be significant as each neopixel light is lit up individually thought a for-loop. 

###  User-testing
User testing proved to be a very useful part of our project. Our friends were able to identify major flaws in our project. One of them was the introduction screen which did not provide very clear instructions for someone who does not know what stroop effect is. Just one suggestion of adding an exmple of the correct solution such as yellow (fill:green) -> press yellow as now shown on the intial display, improved our user interface a lot. With that, the user experience was much better especially for first time players. This would be something that we, on our own, would not be able to catch as potential flaw. 


# Images

<img width="651" alt="Screen Shot 2022-05-11 at 11 49 28 PM" src="https://user-images.githubusercontent.com/71720380/167933696-f476c993-a0dd-4f77-956a-3b118325dc79.png">
<img width="670" alt="Screen Shot 2022-05-11 at 11 48 34 PM" src="https://user-images.githubusercontent.com/71720380/167933729-989d5326-70ea-43da-ba62-cd02ed52c8df.png">
<img width="878" alt="Screen Shot 2022-05-07 at 10 51 43 AM" src="https://user-images.githubusercontent.com/71720380/167933753-bc79f4ce-2127-4046-bbec-39842db86600.png">
<img width="651" alt="Screen Shot 2022-05-11 at 11 49 11 PM" src="https://user-images.githubusercontent.com/71720380/167933723-1fcdabe1-7c79-4ecd-8149-62e322a82b5b.png">


# References
https://en.wikipedia.org/wiki/Stroop_effect
https://github.com/adafruit/Adafruit_NeoPixel
https://editor.p5js.org/ah4601/sketches/mWKMl3cAr
https://www.sensingthecity.com/play-with-arcade-buttons/




