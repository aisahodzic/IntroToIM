#include "pitches.h"

const int PIEZO = 5;        //pin for the piezzo buzzer
const int BUTTON_G5 = 9;    //pin for the G5 note button
const int BUTTON_A5 = 10;   //pin for the A5 note button
const int BUTTON_C5 = 11;   //pin for the C5 note button
const int BUTTON_F5 = 12;   //pin for the F5 note button
int volume;                 //variable for determining the volume of the buzzer
int potential;              //potential of the potentiometer

void setup()
{
  //starting the serial monitor
  Serial.begin(9600);

  //Declaring the input pins
  pinMode(BUTTON_G5, INPUT);
  digitalWrite(BUTTON_G5,HIGH);
  pinMode(BUTTON_A5, INPUT);
  digitalWrite(BUTTON_A5,HIGH);
  pinMode(BUTTON_C5, INPUT);
  digitalWrite(BUTTON_C5,HIGH);
  pinMode(BUTTON_F5, INPUT);
  digitalWrite(BUTTON_F5,HIGH);
  

}


void loop()
{
  
//Playing the note according to the button that is pressed

   while(digitalRead(BUTTON_G5) == HIGH)
  {
    // reads the potential from the pin
    potential = analogRead(A2);
    // maps the potential to the volume
    volume =map(potential,0,1023,0,255);
    // sets the volume of the buzzer
    analogWrite(PIEZO, volume);
    //  plays the relevant tune
    tone(PIEZO,NOTE_G5);

  }
  while(digitalRead(BUTTON_A5) == HIGH)
  {
    // reads the potential from the pin
    potential = analogRead(A2);
    // maps the potential to the volume
    volume =map(potential,0,1023,0,255);
    // sets the volume of the buzzer
    analogWrite(PIEZO, volume);
    //  plays the relevant tune
    tone(PIEZO,NOTE_A5);
  }

  while(digitalRead(BUTTON_C5) == HIGH)
  {
    // reads the potential from the pin
    potential = analogRead(A2);
    // maps the potential to the volume
    volume =map(potential,0,1023,0,255);
    // sets the volume of the buzzer
    analogWrite(PIEZO, volume);
    //  plays the relevant tune
    tone(PIEZO,NOTE_C5);
  }
  
  while(digitalRead(BUTTON_F5) == HIGH)
  {
    // reads the potential from the pin
    potential = analogRead(A2);
    // maps the potential to the volume
    volume =map(potential,0,1023,0,255);
    // sets the volume of the buzzer
    analogWrite(PIEZO, volume);
    //  plays the relevant tune
    tone(PIEZO,NOTE_F5);

  }
    

  noTone(PIEZO);

}
