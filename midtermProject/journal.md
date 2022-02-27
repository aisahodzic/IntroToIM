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


