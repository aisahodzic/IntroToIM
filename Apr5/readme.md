**Description**

In this project, I really loved the fact that the professor gave us an example of a project we are supposed to do. I think I perform and enjoy the project much more this way, since I have a clearer vision of the requirements and expectations of the assignment. I used the first part of the example given for my analog sensor, and developed a slightly different version of the example given for the digital sensor. 

This project uses a potentiometer as analog sensor and at a button switch as a digital sensor. When the user turns potentiometer above the middle line of it's rotation (above 1023/2 units), it causes the yellow LED light to blink my name Aisha in Morse Code. If the user turns potentiometer down the middle line (below 1023/2 units) the LED light will be turned off. The is a button switch that, while you are holding it, increases the brightness of the LED button by an increment of 1 until it reaches the brightest point. When you let go of the button, the brightness will be decrementing until the LED lamp is compeltely turned off. 

**Development process**

I first started working with the potentiometer. I searched for the Morse code alphabet to find out how to spell my name using Morse code. I revised and built up upon the AnalogRead example that we have been doing in the class, and combined it with a digitalWrite for turning on the LED. 

![morse](https://user-images.githubusercontent.com/71720380/161603080-560e024a-b66c-46b0-9184-e90626083101.png)

Arduino with analog sensor 
![IMG_8895](https://user-images.githubusercontent.com/71720380/161613026-19fca64a-7e80-4546-b0be-d59cfeedd0db.jpeg)
![IMG_8894](https://user-images.githubusercontent.com/71720380/161613000-6f97037c-dcfd-45e4-b79b-a614b5ae94e7.jpeg)


After the Morse code was working properly, I first wanted to develop a program with the button such that when the button is clicked, the brightness is incremented by 10. Then, I asked myself, what would it do when the brightness reaches the peak of 255? I figured out that then, I would need another button for decrementing the brightness since I won't be able to do everything with one button. Then, I thought of developing of a one button that, upon click, increments the brightness in intervals of 10 til the highest level, and then decrements it in the same fashion. However - this would be a lot of clicking and I didn't like that idea. I looked into couple of examples like https://www.deviceplus.com/arduino/the-basics-of-arduino-adjusting-led-brightness/ and https://roboticsbackend.com/arduino-turn-led-on-and-off-with-button/ but didn't find what I wanted. 

I started exploring a couple of examples from Arduino to get inspired. The example of Fade (https://www.arduino.cc/en/Tutorial/BuiltInExamples/Fade) proved to be pretty interesting. It gave me an idea such that the program should increase the brightness to maximum when the button is pressed (and held) and reduce the brightness to minimum when button is released. This seemed like an elegant way to incoorporate my wish to have 1 button that would both increment and decrement the brightness - but without much clicking. So I started to work with this plan in mind. 



**Videos and photos**

Digital sensor only - https://vimeo.com/manage/videos/695828597

Analog sensor only - https://vimeo.com/manage/videos/695828757

Final Version - https://vimeo.com/manage/videos/695828470

![IMG_8897](https://user-images.githubusercontent.com/71720380/161613039-b2b031ad-a384-48b6-80bc-1a838d8b5528.jpeg)
![IMG_8896](https://user-images.githubusercontent.com/71720380/161613036-07ac1bcd-57f0-456f-b793-0b9a2133a58d.jpeg)


**Problems**

I wanted to spell my name correctly in my native spelling as 'Aiša' to do the Morse code section, but couldn't find a Morse code for non-English alphabet. This is something I would like to change in the code in case I find the alternative.  

When I was using the analogWrite() function in my code, I connected it to pin 4 and realized that wasn't working right in my code. I researched a bit and found out that I can't use pin 4 -  analogWrite() requires PWM capable pin - those with '~' sign. These are ~3, ~5, ~6, ~9, ~10 and ~11. Once I changed it to pin ~6 everything worked fine. 

**Discoveries**

I played around with digital and analog pins and observed how sensors perform differentily depending on this. I printed the values of the analogRead from potentiometer. It was very interesting to see how potentiometer, for example, in when connected to analog pins (A0 - A5) goes from 0 to 1023 in values, but the moment I switch it to a digital pin, it prints only 1 and 0. This is something we talked about in the class, but it was so interesting to try it on my own in the project. This gave a really good understanding of what was mentioned in the class that there are only 6 analog pins and should be used carefully. 

**Schematic**





**Little exhibiton**

The breadbord and wires and Arduino are actually pretty aesthetic. I took a couple of photos just for the sake of beauty. 

![IMG_8902](https://user-images.githubusercontent.com/71720380/161613042-0b90ae9e-4787-4fdc-993a-2b33c43b362f.jpeg)

![IMG_8903](https://user-images.githubusercontent.com/71720380/161613049-91093868-be6f-4df0-8e70-89420a1aeb31.jpeg)
![IMG_8904](https://user-images.githubusercontent.com/71720380/161613054-76f2b787-c2a4-4113-aafa-39bb750f6485.jpeg)
![IMG_8893](https://user-images.githubusercontent.com/71720380/161613056-007de082-e617-4560-b290-51e1db6e0b68.jpeg)
