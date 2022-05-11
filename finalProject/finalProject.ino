
// 2 - green
// 3 - magenta
// 4 - blue
// 5 - yellow
// 6 - red 

//Including the Arduino library downloaded from the 'manage libraries' tab
#include <Adafruit_NeoPixel.h>

int answer = 0;

int LED_PIN = 11;
int NUM_LED = 28;

// setup the neopixed strip
Adafruit_NeoPixel strip(NUM_LED, LED_PIN, NEO_GRB + NEO_KHZ800);

// setup all the pins for each button
void setup() {
    Serial.begin(9600);
    pinMode(2, INPUT);
    pinMode(3, INPUT);
    pinMode(4, INPUT);
    pinMode(5, INPUT);
    pinMode(6, INPUT);

    strip.begin();
}

  void loop() {

    strip.setBrightness(0);
    strip.show();
   
    if(digitalRead(2)==HIGH){  //if button 2 is pressed...
       Serial.println("green"); //print the message on a new line
    }
    else if(digitalRead(3)==HIGH){  //if button 3 is pressed...
       Serial.println("magenta"); //print the message on a new line
    }
    else if(digitalRead(4)==HIGH){  //if button 4 is pressed...
       Serial.println("blue"); //print the message on a new line
    }
    else if(digitalRead(5)==HIGH){  //if button 5 is pressed...
       Serial.println("yellow"); //print the message on a new line
    }
    else if(digitalRead(6)==HIGH){  //if button 6 is pressed...
       Serial.println("red"); //print the message on a new line
    }
    else{Serial.println("nothing");}

  // receiving messages from the p5js about whether the button pressed is correct or not
   if (Serial.available() > 0) { 
    answer = Serial.read();

    // light up the LEDS if the answer is correct
    //ascii for char 1 is 49
    if (answer == 49) {
       for (int i = 0; i < 29; i++) { 
         strip.setPixelColor(i, 0, 255, 0);
         strip.setBrightness(255);
         strip.show();
         }
       delay(300);
     } 
   }
}
