
**Led Brightness**

For this part of the project, we used the minimal example that was given in the class. The main changes that were done were to enable the code to be able to change the brightness of the LED instead of turning the LED off and then on that was in the previous code. The following parts of the code made it possible: 

In the p5js script, modify the code such that the outgoing data is the value of the mouseX from the rectangle.

``` 
if (mouseIsPressed) {
    outgoingData = mouseX;
  }
```

In the arduino code, use analogWrite instead of the digitalWrite to take the outgoing data value ( ranges from 0 to 200 ) and use it as a input bit for the LED. Previously when digitalWrite was used, the incoming range was translated into 0 and 1, which helped in turning LED off and on. Now, we take this input value as a integer 0<x<200 and use it as such without any translation, which enables us to control brightness.

``` analogWrite(LED_PIN, inByte); ```

**Video**

https://vimeo.com/manage/videos/700250230

**Photos**

![IMG_9298](https://user-images.githubusercontent.com/71720380/163727980-28c41373-3f21-475f-b9b8-d9e58406c219.jpeg)
![IMG_9297](https://user-images.githubusercontent.com/71720380/163727975-8ab0cc59-e83f-48b2-b452-63e44c0169dc.jpeg)
