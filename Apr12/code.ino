#include "pitches.h"

const int PIEZO = 5;
const int BUTTON_G5 = 9;
const int BUTTON_A5 = 10;
const int BUTTON_C5 = 11;
const int BUTTON_F5 = 12;
int volume;

void setup()
{
  Serial.begin(9600);

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
  

   while(digitalRead(BUTTON_G5) == HIGH)
  {
    volume = analogRead(A2);
    analogWrite(PIEZO, volume);
    tone(PIEZO,NOTE_G5);

  }
  while(digitalRead(BUTTON_A5) == HIGH)
  {
    volume = analogRead(A2);
    analogWrite(PIEZO, volume);
    tone(PIEZO,NOTE_A5);

  }

  while(digitalRead(BUTTON_C5) == HIGH)
  {
    volume = analogRead(A2);
    analogWrite(PIEZO, volume);
    tone(PIEZO,NOTE_C5);

  }
  
  while(digitalRead(BUTTON_F5) == HIGH)
  {
    volume = analogRead(A2);
    analogWrite(PIEZO, volume);
    tone(PIEZO,NOTE_F5);

  }
    

  noTone(PIEZO);

}
