**Description**

For this project, we made a piano with 4 buttons that create the sounds of C5, F5, A5, G5 piano notes. The notes are played via the piezo while the button is press. The potentiometer serves as a volume increaser/descreser and turning the potentiometer changes the volume of the note played.

**Overview of your development process**

In the early beginning, we were brainstoring musical instruments that we can make. When it came to thinking about which instrument would be suitable to make with switches and sensors, we agreed that piano would be a good choice. We agreed to used the buttons, as they are the closest reflection of what actual piano buttons look like. For example, we don't have guitar strings if we wanted to make a guitar, so using buttons to resembe piano buttons would establish a good user experience. Simialrly, the inclusion of potentiometer resembles volume buttons as well, those that you turn to increase or descrease the sound. While turning the potentiometer movement, we can't guarantee you won't feel like a little breadboard DJ in the making. Aisha plays piano and it is really nice to re-introduce an instrument to your mind - this time in a more digital version of 'piano'. 

We divided the coding part of the project into main stages: 
1. connecting buttons correctly to the breadboard and checking if they are working properly 
2. connecting buzzer to the breadboard and the buttons, add the sound notes and ensure it is working as required
3. connecting the potentiometer and ensuring that the volume is incrased/decreased with turning the potentiometer

**Description of anything that stood out to you**


**Picture(s)**

Starting with one button
![IMG_9122](https://user-images.githubusercontent.com/71720380/162818901-575ea65a-13ee-4446-8150-d3b0805f4b08.jpeg)


Connecting all of the buttons
![IMG_9121](https://user-images.githubusercontent.com/71720380/162818918-471ebdd6-355a-49ad-80ca-001dc3698994.jpeg)


Adding the buzzer
![IMG_9120](https://user-images.githubusercontent.com/71720380/162818928-c486d7bd-08fc-4ea7-b8a2-1e909c8ea1eb.jpeg)


Connecting the potentiometer
![IMG_9117](https://user-images.githubusercontent.com/71720380/162818115-f92a232d-d281-4d2a-8103-58b2724808a6.jpeg)


Final version
![IMG_9116](https://user-images.githubusercontent.com/71720380/162818111-367a4cb2-510f-4087-a276-23babf568350.jpeg)
![IMG_9115](https://user-images.githubusercontent.com/71720380/162818104-65ad45a6-75df-48bd-84c9-a8c9b0837c6f.jpeg)
![IMG_9114](https://user-images.githubusercontent.com/71720380/162818118-bdd4ac21-fae6-4c5e-9714-5ba548e4892d.jpeg)


**Video**

Playing sounds with buttons - https://vimeo.com/manage/videos/698335460 
Increasing volume with potentiometer - https://vimeo.com/manage/videos/698336330

**Problems and Discoveries**
1. A problem we faced initially was that we had to connect all the switches to the 5v so we connected wires from each switch into the negative terminal from which the wire was connected into the 5v
2. Another problem we faced was not knowing how to control the volume of the buzzer. We first thought that the tone command would have a parameter to control the volume but there wasnt so we learnt how to use the analogwrite command to control the volume of the buzzer
3. While using the potentiometer for controlling the volume of the buzzer, the volume wasnt initially changing while the potentiometer was turning but we fixed that by putting the analogread command under the while loop

**Schematic**
![](https://github.com/aisahodzic/IntroToIM/blob/main/Apr12/schematic.jpg)

**References to any tutorials**

The main Arduino page was very helpful to us. We combined multiple examples offered such as following:

toneMelody https://docs.arduino.cc/built-in-examples/digital/toneMelody
potentiometer basics https://learn.sparkfun.com/tutorials/sparkfun-inventors-kit-experiment-guide---v41/circuit-1b-potentiometer
buzzer melodies https://create.arduino.cc/projecthub/glennedi/dc-piezo-buzzer-volume-control-4a230b and 
volume incraseing https://solarianprogrammer.com/2017/01/31/arduino-buzzer-player-adjustable-volume-playing-fur-elise-beethoven/
