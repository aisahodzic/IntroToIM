const int LED_PIN = 13;           // the PWM pin the LED is attached to
const int POT_PIN = A2;           // where potentiometer is attached to
int led = 9;           // LED is on pin 9; it has to be PWM capable pin AS ~9
int brightness = 0;    // led Brightness
int interval = 5;    // interval to reduce LED brightness  

// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  pinMode(LED_PIN, OUTPUT);
  pinMode(led, OUTPUT);
  pinMode(4, INPUT);

  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  int pot_value = analogRead(POT_PIN); // 0-1023
  Serial.println(pot_value);

  int switchPosition = digitalRead(4); //read the state of the button
  analogWrite(led, brightness);
  
  
  if (switchPosition == HIGH) { //button is pressed
    analogWrite(led, brightness);

    // if brightness reached the highest high, leave it at full brightness
      if (brightness < 255) {
       brightness = brightness + interval;}

  // change the brightness by the amount set in interval
  

  delay(50);
  }
  else  {
       // if brightness reached the lowest value, leave it at lowest brightness (0)
      if (brightness != 0) {
         brightness = brightness - interval;}
      analogWrite(8, brightness);    //button released
      delay(50);
      if (brightness==0){
        delay(1000);
      }
  
    }
  
  // if the potentiometer is turned up (it's value will be one) 
  if(pot_value>510){
    digitalWrite(LED_PIN, HIGH); // morse code for letter 'A'
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(1500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    
    delay(2000); // pause to wait for another letter

    digitalWrite(LED_PIN, HIGH); // morse code for letter 'I'
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);

    delay(2000); // pause to wait for another letter

    digitalWrite(LED_PIN, HIGH); // morse code for letter 'S'
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);

    delay(2000); // pause to wait for another letter

    digitalWrite(LED_PIN, HIGH); // morse code for letter 'H'
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);

    delay(2000); // pause to wait for another letter

    digitalWrite(LED_PIN, HIGH); // morse code for letter 'A'
    delay(500);
    digitalWrite(LED_PIN, LOW);
    delay(500);
    digitalWrite(LED_PIN, HIGH);
    delay(1500);
    digitalWrite(LED_PIN, LOW);
    delay(500);

    delay(4000); // pause for finish
    pot_value = digitalRead(POT_PIN); // if user turned potentiometer to 0, read it
    
  }

}

