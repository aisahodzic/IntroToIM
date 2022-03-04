**Initial concept for the project**

As humans, we have different preferences for lifestyle, food, hobbies, as well as enterntainment. Personally, my favorite types of games are those that are simple and relaxing. I usually do not spend hours 
playing games, and prefer old-school, simple games that would provide a short break from an assignment or an overwhelming topic. One of my all time favorites is a Bubble-Shooter (https://www.shooter-bubble.com/). 

_Inspirations_

<img width="217" alt="Screen Shot 2022-02-27 at 4 05 19 PM" src="https://user-images.githubusercontent.com/71720380/155881706-993ea347-8006-4e0e-ab9b-1e852c5665d6.png">
<img width="454" alt="Screen Shot 2022-02-27 at 4 05 59 PM" src="https://user-images.githubusercontent.com/71720380/155881707-57376a8f-e1f0-4b97-be80-0fd918514346.png">


This is main reason why I had a lot of fun during the OOP assignment (https://github.com/aisahodzic/IntroToIM/tree/main/Feb15), and I got an idea that I could create one of the variations of the bubble games. I plan to use concepts learned in OOP assignment and implement the gained feedback to as a starting point in my game. The first changes would be to move the bouncer the the lower end of the canvas, in order to create a visual of trying to prevent any ball from 'falling' beyond bouncer's point.

The concept is hence to create a game where there is bouncer and balls. The user moves bouncer with left and right arrow key along the x-axis in order to bounce back a ball. The goal is to bounce back every ball and not let any ball touch the floor. As the game progresses, the number and speed of balls increses which makes it harder to win. The longer you stay in the game, meaning the longer you succeed in boucing back balls wihtout them touching the floor, the higher your score is. 


**The most complicated parts of project**

* _Starting_ the game with a button press 
* One most complicated part of the project is _moving the bouncer while making it bounce the balls back._ 
* _Moving the bouncer itself_. If the user presses the arrow key once, it should move only by 1 pixel to that side. However, if the user keeps the arrow pressed, the bouncer should keep moving in that direction all until the button is released. 
* Keeping the _record of the score_! This needs to be implemented in order to keep the game engaging and encourage multiple trials and user improvements when playing. 
* _Restart the game without closing_ and restarting the program.

**How I plan to  solve the most complicated parts of my project.**

* I will create a button and upon button click, a new canvas will be presented with a game. This illusion will be used as a visual that represents 'entering' the game. I would need to make sure that all balls start from top border because  
* I would need to make a program that recomputes the positions of balls and bouncer each time. With every key press, a x-position and y-posiiton value would need to be recomputed,  and bouncer's positions would need to be re-compared with each moving ball. I think this woul dbe even more complex with the increased number of balls and their increased speed. For beggining, I plan to focus on managing only moving the bouncer with left and right arrow key (no balls involved) and then will add balls, one by one ball for now. 
* In the class, we mentioned concepts of KeyPressed and Enter, however, I didn't manage to find a function yet that would keep the event in loop (moving to a side) until the key is released. 
* Initially I though of keeping a record of time the user stayed in the game, but I realized it would be more appropriate to count the number of times a ball is bounced back as use it as a score.  
* When the ball falls below the bouncer's point, the game is over. However, I would need to think of the way to restart the score, and set the position of bouncer and position and the number of balls the the starting settings. 

**Write a test program to implement the most complicated, or most unknown part of your project**

Tests are attached above in the tests.js file. More tests are to be attached as the code development progresses - as there will be new issues coming up and it will become more clear on how to precisely test a functionality.  


**Progress**

**Update #1 - Initial development**

I have started with developing functionalities first, as I predict that will be a harder part. I will later choose fonts and colors to be used. 
The first functionality I started with is adding the "Start" button, that changes Display - from initial canvas with instructions to canvas of playing the game. One of the first issues that arised is developing an idea of where to position the start and restart buttons, as the start button stays in the same frame when the game starts. 

<img width="534" alt="Screen Shot 2022-03-01 at 9 57 30 AM" src="https://user-images.githubusercontent.com/71720380/156113648-5c4aa1c4-7319-4046-84b5-9eb60fb77149.png">
<img width="534" alt="Screen Shot 2022-03-01 at 9 56 52 AM" src="https://user-images.githubusercontent.com/71720380/156113659-56313ec9-48e9-4ae6-80c4-2985314d5e9f.png">

An idea arised that it might be useful to have a navigation bar in top right corner. 




**Update #2 - Navigation bar** 

I tried putting the navigation bar in the upper right corner, but it appeared more natural to have it at the bottom. An image is uploaded so that it does not cover last 70px of height, which give an illusion of navigation bar represented by background color of either red (for beginning canvas) or yellow ( for game canvas ) . I reset the balls such that they never cross to the navigation bar, and relocated start button to now belong to the navigation. 

<img width="627" alt="Screen Shot 2022-03-01 at 11 19 36 AM" src="https://user-images.githubusercontent.com/71720380/156123600-5a33cce4-f636-4596-9787-4f8fdccffbf9.png">
<img width="627" alt="Screen Shot 2022-03-01 at 11 19 41 AM" src="https://user-images.githubusercontent.com/71720380/156123608-cbeee0af-1154-49fd-a33f-414726b9edc2.png">




**Update #3 Moving the bouncer with arrow keys** 

I developed two important features: the bouncer can be moved using arrow keys with keyIsDown function. KeyIsDown is amazing, since it allows the user to continusouly move bouncer all the time until the key is released. 
Another feature is score counter, which increases every time when the bouncer hits the ball. 

```
if  (keyIsDown(LEFT_ARROW)) {
    myBouncer.posX -= 15;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    myBouncer.posX += 15;
  }
```

<img width="627" alt="Screen Shot 2022-03-01 at 2 33 05 PM" src="https://user-images.githubusercontent.com/71720380/156153432-cc16dd4a-5030-40e8-875f-ba633593b857.png">






**Update #4 - Restart button** 

Making a restart screen such that when the ball touches the ground, restart screen appears. Clicking the start button enables the user to restart the game - it jumps right into a new game with restarted positions, rather than initial screen with instructions. 

```
button = createButton("Restart");
button.mousePressed(changeDisplay);

...

function changeDisplay() {
  // if we are on the initial screen when clicked, start the game
    scoreVal = 0;
    setup();
  }
```


<img width="627" alt="Screen Shot 2022-03-01 at 3 37 47 PM" src="https://user-images.githubusercontent.com/71720380/156162674-3edc476e-0db5-4aa1-af2b-e0681f3b74ed.png">






**Update #5 - Adding photos for Covid particles** 

Most of changes by now were a code, so I coulnd't visually represent the changes, for example that I put my bouncing balls in an array instead of creating them each on their own. Now I found photos for my covid balls and the mask for the bouncer - however I really can't find a mask with transparent background. I tried multiple photos but this is the best I could find. I'll keep looking. 

```
  covid_ball = loadImage("covid_ball.png");
  mask_bouncer = loadImage("mask7.jpeg");
```

After loading the images, we create the Covid-particle circles with drawCircle() that uses the image of loaded covid_ball to create the shape with provided diameter and starting locations! 

```
drawCircle() {
    fill('red');
    image(covid_ball, this.x, this.y, 50, 50);
  }
```

<img width="609" alt="Screen Shot 2022-03-02 at 5 23 23 PM" src="https://user-images.githubusercontent.com/71720380/156370318-2530705d-1745-4952-a3f2-b0e651bcdb03.png">






**Update #6 - Finalizing font, initial and final screen** 

Now I have been working on the initial screen. I have added instructions for playing and chosen a background image. For the background image, I have edited it in post-production to position the two individuals in the sides I want and to clear the white space on the right hand side so that the text can be readable. 
I have done the similar work for the game-over screen. The individuals were cropped out and posted on white canvas on the right-hand side to leave white space for game over message, final score, and invitation to restart. I have also added 'Restart' button in the game screen so that the user can restart the game while playing if they wish to do so, instead of waiting to lose and being able to restart only then. 
I have been exploring different fonts, and settled for _DebugFont.otf_ font that I found at https://ifonts.xyz/debug-font.html as it looks pretty game-y to me! 

```
  DebugFont = loadFont("DebugFont.otf");
```

The initial screen now: 

<img width="637" alt="Screen Shot 2022-03-03 at 10 49 24 AM" src="https://user-images.githubusercontent.com/71720380/156512128-f39933ef-7881-4e0b-a1e6-390cca6b007b.png">

The game-over screen now: 

<img width="637" alt="Screen Shot 2022-03-03 at 10 49 41 AM" src="https://user-images.githubusercontent.com/71720380/156512170-828a299d-dd57-4743-9bd7-0f163a40fe68.png">





**Update #7 - Adding sound effects** 

Adding sounds is one of the requirements, and I was thinking whether to add a background song throughtout the game. Once I tried it I realized that's a bit overwhelming. I looked for something calmer and simpler, and realized that there is a space to add a sound each time the mask bounces off the covid particle. I looked for bounce-y sounds and found _sfx-boing8.mp3_ at https://www.fiftysounds.com/royalty-free-music/boing-sound-effects.html. The site is really good if you are looking for short, simple sounds to advance your interactive component rather than looking for whole songs!

```
  song = loadSound('sfx-boing8.mp3');
```





**Update #8 - Navigating screens and restart feature** 

The biggest challenge was show to 1. shift between the screens and 2. how to restart the game with just a button click. This was actually very complicated and dragged a sea of unexpected error that I needed to solve. For example, the score would either stay as 0 or would not reset to 0 once the game was done. Similarly, once restarted, there would either be 0 covid-particles, or the button would just add the number of covid-particles. For example, it I played with 3, and clicked restart, it would show me 6 covid-particles, meaning the game hasn't been restarted properly. 

With the code below, I managed to resolve most of the errors.

```
function draw() {
  // Display the contents of the current screen
  if (currGameScreen == 0) {

    initScreen();
    buttonText="Start";
  } else if (currGameScreen == 1) {
    gameScreen();
        buttonText="Restart";
  } else if (currGameScreen == 2) {
    gameOverScreen();
        buttonText="Restart";
  }}
  
 ```
 
 I divided my game into 3 screens -  _currGameScreen == 0_ is an initial screen with welcome message and instructions that will activate _initScreen()_ function , _currGameScreen == 1_ screen calls _gameScreen()_ that will be activated to have the game on and _currGameScreen == 2_ for the game over screen and activates _gameOverScreen()_ when the user loses the game.
 
```
function restart() {
  score = 0;
  currGameScreen = 1;
  setup();
}

```
The restart function helped a lot in restarting the game. It's imporatnt the the score is restarted only when this function is called, and it also changes the screen to the gaming screen. This function is only called once the restart button is called and this button is available in the 2nd and 3nd screen - which are the gaming screen and the game-over screen. It calls the setup function again which restores the very initial setup of the game. 

**Final screens** 

Initial screen - game instructions 

<img width="575" alt="Screen Shot 2022-03-04 at 4 14 45 PM" src="https://user-images.githubusercontent.com/71720380/156761784-59c6217a-3e34-4720-9d43-3c1ce1dda143.png">

Gaming screen

<img width="575" alt="Screen Shot 2022-03-04 at 4 14 51 PM" src="https://user-images.githubusercontent.com/71720380/156761817-d33124c0-6b07-4e42-a9b9-a793590f537a.png">

Game-over and restart screen 

<img width="575" alt="Screen Shot 2022-03-04 at 4 14 45 PM" src="https://user-images.githubusercontent.com/71720380/156761835-c56c6d17-c537-439d-b73d-16de740283c8.png">


**Final conclusion and video** 

From  February 26th, UAE government eased COVID-19 restrictions, including to mandatory face masks in public places. However, COVID-19 remains a health threat and should still be treated as such. This is especially true for covid-19 Omicron variant, which remains high in many countries. Covid-19 masks should be used as part of a comprehensive strategy of measures to suppress transmission and save lives. When COVID-19 is spreading in your community, we should stay safe by taking some simple precautions, such as physical distancing and wearing a mask. 

This game is a simple reminder that covid is still circulating in our communities, and that masks - especially medical ones, help in reducing the adverse effects. I have created a visual and audio 'illusion' of masks bouncing of the covid particles, which could help understand the reasoning behind the importance of masks. The visual effect is very important, especially for younger generations, in order to create a sense of powerful value of wearing a mask. I used the symbols to better represent the idea, throught importing images of checemical structure of covid-partical and a medical mask, togheter with caricatures of masked people. The bouncing sound improves the experience of 'rejecting' the particles from proliferating futher into the community. The user's ability to shift the mask with left and right keys gives a sense of control in handling the situation when having the right means with us - such as masks - that can protect us. 

I loved playing a game because it is a simple and relaxing methaphore for our current situation, as the COVID restrictions are slowly being eased, and the mask wearing is slowly evolving into an option rather than a rule. As my aim was to remind us on the significance and influence of masks on covid-prevention in a creative, entertaning and relaxed manner, I believed that I have succesfully achieved this goal. Stay safe! 


**Video** 


https://user-images.githubusercontent.com/71720380/156759503-57100b99-4bf0-4ef2-a6a0-a97a9c9ed668.mov



