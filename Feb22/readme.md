**Inspiration** 

This project was a lot of fun! In the beginning, I didn’t have much idea what to do, so I just started scrolling over Kaggle’s datasets (https://www.kaggle.com/) looking for inspiration. I didn’t find something that would inspire me. A couple of moments later my friend sent me a post about Formula1 x Netflix announcing a new Drive to Survive (https://en.wikipedia.org/wiki/Formula_1:_Drive_to_Survive)  season. We’ve been waiting for it and I couldn’t be more excited. As an F1 fan, I knew what to do! Drive to Survive is a way to prepare for Season 2022, and I wanted to make a program that will help you prepare as well - by suggesting which Race you should rewatch! The user should be able to click a button, upon which they will be given a suggestion as to which race to rewatch. Moreover, they can keep clicking the button to select more races to rewatch or select those for their friends too.

**Progress**

I started looking at F1 datasets on Kaggle. The issue is that a lot of datasets include F1 data analysis which is super helpful for engineering, but not what I was looking for. Then, I found one that would be the most useful since it includes races up to 2021 - https://www.kaggle.com/rohanrao/formula-1-world-championship-1950-2020?select=races.csv. I manually trimmed the file to include 2019-2021 seasons as the most relevant ones. I first loaded the dataset using loadTable using the help from https://p5js.org/reference/#/p5/loadTable. Then, I started searching for nice fonts and found Knewave font with which i had a lot of issues since, for some reason, it wasn’t loading properly. 

**Challenges**

The hardest part was to correctly load and extract from the table and to create a button. Extracting the information from the table was challenging since I needed to really unpack what the table contains, how to make sense of indexing and naming, as well as how to choose a random race selection. A short selection is below: 

```
let raceId = F1table.getColumn("raceId");
let race_rewatch = int(random(0, 61));
let sel_raceId = raceId[race_rewatch];
```

First, we load the whole raceID column. Second, we choose a random number that represents a row and lastly, we use that random number X to select X-th row of the column. 
​​ 
Next, another hard part was to change the content of Display upon user’s click. I wanted to create a button that seemingly randomly chooses the race to watch on click but couldn't find a way to do it. https://p5js.org/reference/#/p5/createButton was helpful to create but I wanted to check if it is possible to have the button to press inside of the draw() function. 

Initially, I was dealing with 
```
  button = createButton("Race to Rewatch");
  button.position(width / 2.3, (7.5 * height) / 9);
  button.mousePressed();
```
but then I researched to find a note on mousePressed - https://p5js.org/reference/#/p5/mousePressed to include
```
button.mousePressed(changeDisplay);
```
would be much better since it offers me a solution of making changeDisplay as a function that gives me much more freedom in determining what to do with a button click. 

Another problem was that Background image issues persisted with some background images. Since I didn’t change the code, and only changed images, it might be that -5js prefers some image formats over others. This is something to look into for the next sessions. For now, I choose images that fit perfectly and those that p5js was happy with. 

**Video**

Lastly, here is a video of my program! Hope you enjoy and rewatch the race! 

https://user-images.githubusercontent.com/71720380/154922586-b51d3895-c31a-45e7-935a-f7d894b8a840.mov

