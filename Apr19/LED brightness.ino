
//Arduino code for communication with a P5.js 
const int LED_PIN = 5;
const int SWITCH_PIN = 9;

void setup() {
  Serial.begin(9600);
  pinMode(SWITCH_PIN, INPUT);
  pinMode(LED_PIN, OUTPUT);

  // wait until the other side responds
  while (Serial.available() <= 0) {
    Serial.println("1"); // send a starting message
    delay(300);
  }
}

// use analog write to recognize incoming Data in range (0-200) and translate it to the LED pin brightness
void loop() {
  while (Serial.available() > 0) {

    int inByte = Serial.read();
    analogWrite(LED_PIN, inByte);

    int switchValue = digitalRead(SWITCH_PIN);
    Serial.println(switchValue);
  }
}
