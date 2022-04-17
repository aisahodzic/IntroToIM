/*
Minimal p5.js code to communicate with Arduino
using handshaking. Arduino code is below
*/

let serial; // variable to hold an instance of the serialport library
let portName = "/dev/tty.usbmodem14101";

let outgoingData = 0;

function setup() {
  // create a canvas that will be used to set the brightness of LED
  createCanvas(200, 100);
  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on("list", printList); // set a callback function for the serialport list event
  serial.on("connected", serverConnected); // callback for connecting to the server
  serial.on("open", portOpen); // callback for the port opening
  serial.on("data", serialEvent); // callback for when new data arrives
  serial.on("error", serialError); // callback for errors
  serial.on("close", portClose); // callback for the port closing

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port
 
  background(200);
}

function draw() {
  // read the position of the mouse on x-axis and set it to be the brightness value
  if (mouseIsPressed) {
    // send the brightness value
    outgoingData = mouseX;
  }
}

// get the list of ports:
function printList(portList) {
  // portList is an array of serial port names
  for (let i = 0; i < portList.length; i++) {
    // Display the list the console:
    print(i + " " + portList[i]);
  }
}

function serverConnected() {
  print("connected to server.");
}

function portOpen() {
  print("the serial port opened.");
}

function serialEvent() {
  // read a string from the serial port
  // until you get carriage return and newline:
  let incomingData = serial.readLine();
  //check to see that there's actually a string there:
  if (incomingData.length > 0) {
    print("incoming: " + incomingData + " outgoing: " + outgoingData);
  }

  // this implements the handshaking: Only
  // send data if we received something
  serial.write(outgoingData);
}

function serialError(err) {
  print("Something went wrong with the serial port. " + err);
}

function portClose() {
  print("The serial port closed.");
}
