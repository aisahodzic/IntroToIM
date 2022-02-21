let F1_table;
let value = 0;
let answer_arr;
let bg;
let f1_bg;

// in preload function, we will load the font and images to be used, as well as the table
function preload() {
  // load the Knewawe font from uploaded fonts
  fontKnewave = loadFont("knewave.otf");
  bg = loadImage("redbull.jpeg");
  f1_bg = loadImage("f1_logo.jpeg");

  // load the F1races table from uploaded tables
  F1table = loadTable("F1races.csv", "csv", "header");
}

function setup() {
  background(bg); //set background to F1 image
  createCanvas(700, 700);

  //use the text font that has been preloaded
  textFont(fontKnewave, 20);
  // create the button
  button = createButton("Race to Rewatch");
  // center the button at the bottom middle
  button.position(width / 2.3, (7.5 * height) / 9);
  //when mouse if pressed, the Display will be changed
  button.mousePressed(changeDisplay);
}

function draw() {
  //button is clicked
  if (value === 255) {
    image(f1_bg, 0, 0, 700, 700);
    textAlign(CENTER);
    text(
      "SEASON: " +
        answer_arr[1] +
        "\n\n GRAND PRIX: " +
        answer_arr[4] +
        " \n\n Happened on " +
        answer_arr[5] +
        " \n\n start time at \n" +
        answer_arr[6] +
        " ",
      100,
      100,
      500,
      500
    );
    textSize(15);

    text("Read more at: \n\n\n" + answer_arr[7] + "", 100, 450, 500, 500);
    textSize(20);

    fill(229, 9, 20);
  } else {
    // start display or button is pressed again
    background("black");
    image(bg, 0, 0, 700, 700);
    fill("white");
    text(
      "Click the button below to find out which F1 race you should rewatch to prepare to 2022 season!",
      100,
      height / 3,
      500,
      600
    );
  }
}

// change to reveal the wanted race to watch
function changeDisplay() {
  // button is clicked at start F1 image
  if (value === 0) {
    // load the table values
    answer_arr = tableRead();
    value = 255;
  } else {
    // button is clicked at race-to-watch image
    value = 0;
  }
}

// function to read all the values from the table based on the header
// getColumn function retrieves all the content for the specified column
function tableRead() {
  let raceId = F1table.getColumn("raceId");
  let year = F1table.getColumn("year");
  let round = F1table.getColumn("round");
  let circuitId = F1table.getColumn("circuitId");
  let name = F1table.getColumn("name");
  let date = F1table.getColumn("date");
  let time = F1table.getColumn("time");
  let url = F1table.getColumn("url");

  // randomly select a race that a user should rewatch
  // apply casting because random gives float numbers
  let race_rewatch = int(random(0, 61));

  // use the random number of to randomly select a race and similarly to to store all relevant information about the race
  let sel_raceId = raceId[race_rewatch];
  let sel_year = year[race_rewatch];
  let sel_round = round[race_rewatch];
  let sel_circuitId = circuitId[race_rewatch];
  let sel_name = name[race_rewatch];
  let sel_date = date[race_rewatch];
  let sel_time = time[race_rewatch];
  let sel_url = url[race_rewatch];

  // store our race-to-watch as array since we can't return multiple values from a function
  let arr = [
    sel_raceId,
    sel_year,
    sel_round,
    sel_circuitId,
    sel_name,
    sel_date,
    sel_time,
    sel_url,
  ];
  return arr;
}

