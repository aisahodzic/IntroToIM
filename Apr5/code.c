const int LED_PIN = 13;           // the PWM pin the LED is attached to
const int POT_PIN = 10;

// the setup routine runs once when you press reset:
void setup() {
  // declare pin 9 to be an output:
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

// the loop routine runs over and over again forever:
void loop() {
  int pot_value = digitalRead(POT_PIN); // 0-1023
  Serial.println(pot_value);
  // if the potentiometer is turned up (it's value will be one) 
  while(pot_value==1){
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
