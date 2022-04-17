
**Led Brightness**

**Link** 
https://editor.p5js.org/ah4601/sketches/-HJrp-dxw

**Description**
For this part of the project, we made a rectangle in p5js that controls the LED brightness on arduino. We started with the minimal example that was given in the class. The main changes that were done were to enable the code to be able to change the brightness of the LED instead of turning the LED off and then on that was in the previous code. The following parts of the code made it possible: 

In the p5js script, modify the code such that the outgoing data is the value of the mouseX from the rectangle.

``` 
if (mouseIsPressed) {
    outgoingData = mouseX;
  }
```

In the arduino code, use analogWrite instead of the digitalWrite to take the outgoing data value ( ranges from 0 to 200 ) and use it as a input bit for the LED. Previously when digitalWrite was used, the incoming range was translated into 0 and 1, which helped in turning LED off and on. Now, we take this input value as a integer 0<x<200 and use it as such without any translation, which enables us to control brightness.

``` analogWrite(LED_PIN, inByte); ```

**Problems**
For some reason, our p5.js scripts was not working on one of our laptops (Aisha's). It was frustrating because Daniel had the same code running on his laptop and it was succesful. We compared the codes and they were same. What helped is shutting down the applications (Arduino, and p5.serialcontrol) as well as p5.js, and then using the same code. This way everything started working but we weren't sure of the reason why this happened. 

**Video**

https://vimeo.com/manage/videos/700250230

**Photos**

![IMG_9298](https://user-images.githubusercontent.com/71720380/163727980-28c41373-3f21-475f-b9b8-d9e58406c219.jpeg)
![IMG_9297](https://user-images.githubusercontent.com/71720380/163727975-8ab0cc59-e83f-48b2-b452-63e44c0169dc.jpeg)

**Schematic**
![Schematic2](https://user-images.githubusercontent.com/71720380/163733142-e4b07861-b129-40ee-8887-279058b95b20.png)



**Ellipse in p5**

**Description**
For this project task, we used potentiometer on arduino to make the ball in p5 move on the horizontal axis in the middle of the screen. We started with looking into the prof. Aaron's code example as our idea was to start upgrading this code example on minimal communication, since it was the most suited for this project task.

**Link** 
https://editor.p5js.org/ah4601/sketches/92A5giAhI

**Problems**
 The most time was spent figuring out why there is no incoming data coming to p5. We comapred everything in the code - all functions, examples, line by line. However, the discovery came from the most unexpected place - the serial port name. Although we changed it to the correct partitioning 'usbmodem14101', but there was another change we needed to make: from /cu to /tty:

old: 
```
let portName = "/dev/cu.usbmodem14101";
```

updated:
```
let portName = "/dev/tty.usbmodem14101";
```

Basically, the portName that was previously used had a different path to the portName. We tried updating serialConnection, listed and analyzed all information coming from the port.

**Video**
https://vimeo.com/manage/videos/700271946


**Photos**
![IMG_9300](https://user-images.githubusercontent.com/71720380/163732154-53653f25-45d1-4057-896e-93579c0f4970.jpg)

**Schematic**
![Schematic1](https://user-images.githubusercontent.com/71720380/163733157-1c7fb868-2273-48ef-8f7e-ba3bcce4e303.png)

**Wind and Gravity**

**Link to the code in p5js:**
https://editor.p5js.org/danielnivia/sketches/CJv3vdImK 

**Problems**

The main challenge for this exercise was making the wind work correctly. After multiple attempts to map the potentiometer value to the wind, we discovered a key error we were having in the code. Particularly we realized that we had to put the conditional statements that affected the wind inside this if statement 

``` 
if (incomingData.length > 0) {
[conditional statements that affected the wind]
}
```

Originally we did not put this and it caused our wind value to be equal to 0 for 4 loops based on what the console was printing with our debugging print statement `print(wind.x, "WIND")` . After this the code worked correctly as the comparison was only made when there was input data from the potentiometer in the arduino. Also because we are dealing with analog and not digital the condition for not moving was set in a range between 24 and 26 rather than equal to 25 as it would have done in digital using only p5js. 

**Video**
https://vimeo.com/manage/videos/700276908


**Schematic**
![Schematic3](https://user-images.githubusercontent.com/71720380/163733139-c3b8bd8d-6b3d-43d5-9acd-0fd7076178be.png)



