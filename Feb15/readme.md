**Challenges**

This assignment posed a lot of challenges in front of me. The first one was creativity - I really didn't know where to start and didn't have an inspiration for what to do. I started with going though class examples.  After that, an idea came to my mind to create a simulation of the bouncing ball game. This game involves bouncing balls and a bouncer, and after the balls touch the bouncer the will bounce off by changing their direction of travel. I have resued a part of the code from class - the example of MovingCircles. The example is from here - https://github.com/michaelshiloh/resourcesForClasses/tree/master/src/p5jsSketches/simpleP5jsClassExample. I modified the code to include the bouncer, a reclantagle that is moving across the x-axis and balls that are scattered around.

The most difficut was figuring out when balls are touching the bouncer. When worded, my wish was to make the balls change direction when they touch the bouncer. But it's easier said than done - it was hard to translate words to the code! It was hard to write the if condition, since I didn't know which values should i put as a part of condition. What helped me a lot is mouseX and mouseY positions. Finally, the wanted code that I had the hardest time figuring out looks like the following:

```
  if ((myCircle.y >= myBouncer.posY && myCircle.y <= myBouncer.posY+myBouncer.bouncerHeight) && (myCircle.x >= myBouncer.posX && myCircle.x <= myBouncer.posX+myBouncer.bouncerWidth))  {
    myCircle.ySpeed = -myCircle.ySpeed;
    myCircle.color=color(random(0, 255), random(0, 255), random(0, 255));
  }
```

To make the simualtion more interesting, I made it such that the balls change their colors each time they touch the bouncer. 

**Interest findings** 

Balls change the color to a random color each time they touch the bouncer. As I have run the simulation multiple times, I noticed that there are instances when the balls change the color to the color that is exacly same as the the background color so you can't see them! This is something to improve in the future. As well, I noticed that there is a couple of instances when it seems to me that the ball has touched the bouncer, but it doesn't change the direction. This happens rarely, and it usually involved the bouner edges. I wonder if is due to the high speed of the velocity, which creates illusion to the human eye that the ball touched the bouncer, but actually when you check the numbers - it's not the case. 

I had a lot of fun doing this assignment, but it was hard figuring out wanted positioning actions and coding them. 

**Video**




https://user-images.githubusercontent.com/71720380/153890860-794fa9e2-6225-4055-8ca1-bd78595f97a3.mov

