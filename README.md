## Our Problem
- The COVID-19 Pandemic has made it unsafe for people to go outside and celebrate holidays that involve gathering with others, such as Halloween. During this year, very few kids enjoyed Halloween due to the safety reasons preventing kids going out in large groups and take candy from people.

- However, many kids want to still celebrate the holidays with their friends like how they did it before the pandemic. This is where our app comes in.

## Our Solution
- Our solution is Virtual Holidays!

- It’s a way for kids to enjoy the experience of holidays (such as trick or treating at Halloween) without risking exposure to dangers (like COVID-19)

## How does it Work?
- First, you create an account, and put in your zip code, email, password, and username. It does verify that the email and zip code exist!
- Then, based on your zip code, you get a list of “houses” that are giving candy, sorted by local zip code, then city, then state, then country
- When you click on one of these “houses” the site shifts you to a webpage with a game. If you win the game, you get XP!
- Based on the number of XP you get, you get a calculated amount of candy!
- You can interact with your friends by competing your scores (XP) on a leaderboard.

## Behind the Scenes
- We used the MongoDB database in order to extract and store data such as login and passwords, the XP that a user has, and their zip code
- We used Python to take and store data to/from the server
- Then, using those values, they would be posted where needed on the website, like the value for XP where the XP value is shown in the webpage
- In order to publish data about other users and their locations, we have to use the Python library called pyzipcode, which tells us the location of the zipcode, the state, and the city in the US.
- Then, we print this onto our website, where users choose which “house” they want to trick or treat at!

## Obstacles
- It took nearly 3 hours to get the database configuration and connection figured out.
- We constantly had bugs surrounding the python and javascript code. Not all of the errors had a clear spot of origin, thus making the debug process exponentially difficult. 
- We struggled from time to time with getting some games to work on HTML, and some simply just didn’t work, so we had to build new games that could run on HTML, which was a struggle

## What did we Learn?
- For our team, this was our first hackathon ever, and there was a lot to learn from this.
- Our javascript and web development skills improved significantly, to the point where more complex additions were able to be added.
- We learnt how to integrate the front and back end properly, which is one of the most crucial things to building a website. If we weren’t able to integrate both sides of the website, then it would not have worked out
- We also learned how Python libraries, Java libraries, Node.js Functions, HTML, and CSS worked together to create the complex project we have currently
- We also learned teamwork, brainstorming, how to coordinate meetings, and solving challenges together as a team.


