## General Assembly Software Engineering Immersive (March - July 2022)

# Project 4: Footballer Database

## Visit the deployed App [here](https://footballer-database.herokuapp.com/)

<img width="1417" alt="Home-page" src="https://user-images.githubusercontent.com/101732786/176667885-f448007f-e9fb-497c-a392-b2e5a06e7e7c.png">

### Code Installation

If you wish to clone or download the repository then execute following commands in terminal:

#### Back-End

* pip install pipenv (only needs to be run once ever)
* cd into project folder
* pipenv install django (one time command for each project to install Django)
* code .

from here, execute all commands in the VS code terminal
* pipenv shell
* pipenv install
* in settings.py  check the name of the db and create it using: createdb dbname
* python manage.py migrate (make initital migrations)
* python manage.py runserver

#### Front-End
* open second terminal for Front-end
* cd client
* rm -rf .git
* yarn
* yarn start

## Table of Contents:

* Visit deployed App and code installation
* Project Overview
* Brief
* Planning
* Approach taken
* Technologies Used
* Featured Code
* Key Learnings
* Challenges
* Bugs
* Future improvements


## Project Overview

<img width="1307" alt="Player-Show-page" src="https://user-images.githubusercontent.com/101732786/176521673-4440065b-d8c9-4e17-a11a-ef2ee3c7aa70.png">

This is my fourth project at the end of the 13 week General Assembly Software Engineering Immersive program. It is a Full-Stack application with my own API. The idea was to have a database of one of my passions - football players. I was inspired to make the website as I frequently browse the website [transfermarkt.com](https://www.transfermarkt.com/) which I used as a guide for this project. I was really motivated for this project and had a lot of ideas, but of course within the timeframe and having under-estimated how long different components would take, I was able to complete considerably less within the 8 days we had to complete the project.

The application includes:

1) Home/Index Page
2) Footballer Show Page
3) Account Page
4) Search Results Page
5) Edit Footballer page
6) Register Page
7) Login Page
8) Nav Bar
9) Footer
10) GET/POST/PUT/DELETE functionality.

All content was sourced from [transfermarkt.com](https://www.transfermarkt.com/)

## Brief

* Build a full-stack application by making your own backend and your own front-end
* Use a Python Django API using Django REST Framework to serve your data from a Postgres database
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality
* Implement thoughtful use stories/wireframes that are significant enough to help you know which features are core and which you can cut out
* Be deployed online


## Planning

Planning the project out was extremely useful, I would almost say that it was the most important part of the project. Having already done three projects prior to this one I realised that it was critical to compartmentalise this project into phases so that I could meet the MVP first before moving onto other phases. I separated the project into 4 phases and ended up only getting the first one done due to the time-frame.

#### Draft wireframe on paper
The first step in planning was to write up a draft wireframe on a bunch of A4 pages - I found it extremely useful to put my thoughts down on paper first before creating a digital wireframe.

#### Back-end Relationships diagram
Before completing the front-end wireframe, I designed the relationships model for the back-end using an [ERD](https://app.quickdatabasediagrams.com). As can be seen on the ERD there are 'one to many' and 'many to many' relationships with the 'User' and 'Footballer' models being the central models for the project. The Footballer, Review and Favourite models are accessible only through an authenticated User; whereas the Style and Continent models are related only to the Footballer model.

<img width="1502" alt="ERD" src="https://user-images.githubusercontent.com/101732786/176517918-c420e34c-7b8e-41ea-a280-3a4af0c2cb3b.png">

#### Complete wireframe on excalidaraw
As can be seen in the wireframe picture below, 4 phases were designed for the front end - the 1st phase was a MUST in order to meet the project requirements, with the other 3 phases good additions. The phases were colour-coded on the wireframe:
1) Phase 1 (Green) pages: Home; Player Show; Register; Login; Account; Add Footballer; Update Footballer; Nav Bar
2) Phase 2 (Orange) pages: User Reviews
3) Phase 3 (Blue) pages: User Favourited Players
4) Phase 4 (Red) pages: Continent page (only players from selected continent displayed)

![wireframe_footballer-database](https://user-images.githubusercontent.com/101732786/176519711-281461fd-6c7d-4426-8617-2c3bfe53cc18.png)

#### To-do list
Finally, to track my progress each day I would create a to-do list with taregets for the day, which I would tick off upon completion.

<img width="599" alt="To-do-list-example" src="https://user-images.githubusercontent.com/101732786/176653197-3027c0c7-d97a-4ce5-9898-540314f71c20.png">

## Approach Taken

Day 1:
* Create Git repository
* Design Back-End relationships
* Design Front-End wireframe

Day 2:
* Code Back-End

Day 3:
* Finished Back-End apart from API

Day 4: 
* Connect to Back-End to Front-End
* Create Home page, Nav Bar, Footer, Register/Login.
* Seeded Back-End API with 100 footballers.

Day 5:
* Style Home page
* Style Nav Bar
* Style Footer
* Style Register/Login pages
* Create and Style Footballer Show page
* Refactor Home page carousels using component files.

Day 6:
* Fix bug - pages weren't displaying
* Functionality to check that user = owner and display edit/update button on Footballer Show page
* Create 'Add Player' page
* Create 'Edit Player' page (same as create player but fields pre-filled)
* Create 'Account Page' with 'Add Footballer' button to navigate to 'Add Player' page
* Functionality to navigate away from 'Add Footballer' page if not logged in.
* Bug not fixed - 'Edit Player' page implementing changes only after refreshing page.

Day 7:
* Add ‘Delete Footballer’ button on Footballer Show page
* Bug fixed for changes to 'Edit Player' implemented only upon refreshing page
* Add 'Account' to Nav Bar
* Style all pages

Day 8:
* Styling the final product
* Added Search bar functionality

## Featured Code:
The code example is a post request to add a footballer to the database by a verified user. First we deserialize python to pass it into a Query Set; then check validity using .is_valid(); finally save the request with .save() and return the response with status 201. If at any point the request fails and Exception is thrown with status 422.

<img width="1019" alt="Example-code-POST-functionality-back-end" src="https://user-images.githubusercontent.com/101732786/176660581-598f7c98-d419-4852-bc66-b3abc0faf0cf.png">

## Screenshot walk through of main pages

Home Page:
<img width="1417" alt="Home-page" src="https://user-images.githubusercontent.com/101732786/176668979-13dcf02d-0d6c-4908-8863-a2a41b22dea3.png">

Show Page:
<img width="1490" alt="Show-page" src="https://user-images.githubusercontent.com/101732786/176669279-72eac225-4afe-4544-87c7-24f6bd076f43.png">

Register page:
<img width="1509" alt="Register" src="https://user-images.githubusercontent.com/101732786/176668913-fac87b18-51b7-4817-8859-a5a20e049b22.png">

Edit Footballer page:
<img width="1507" alt="update-footballer" src="https://user-images.githubusercontent.com/101732786/176669490-79ab9d17-ecc3-4cb7-969b-d466f76a7780.png">

## Technology used:

#### Back-End:
* Python
* Django
* Django REST Framework
* JWT

#### Front-end:
* React
* JSX
* Axios
* SCSS
* Bootstrap
* React Router Dom

#### Dev tools:
* VS code
* Yarn
* Insomnia
* Git
* Github
* Google Chrome dev tools
* Excalidraw (Wireframe design)
* Google Docs (Planning and logging)
* Heroku (Deployment)
* Zoom
* Slack

## Key learnings:

* Using Python and Django for the first time
* Desigining relationships on Back-End

## Challenges:

* Attempting to alter models on the Back-End after already having seeded data caused problems which took significant time to fix.
* Time constraint means I couldn't style the page as I wished, and the styling is not responsive yet.

## Bugs

* Styling is not responsive
* A bug I haven't been able to fix is with the carousel which displays players. The carousel displays the same player twice (the second underneath the original) unless the full row of designated spots is filled (There are 6 spots in my carousel design). As can be seen in the screen shots below - a test user was created (Marcus Rashford as he's a fave player of mine), Once this user has created 6 players the carousel operates correctly; however when there are less than 6 players available, the carousel displays each player twice, which is a terrible look. Still looking for a solution to this one, I look forward to solving it soon!

<img width="1390" alt="bug-6-player-carousel" src="https://user-images.githubusercontent.com/101732786/176945229-8c6eac8c-ca59-4bf4-829b-4f87d6904a24.png">

<img width="1408" alt="bug-5-player-carousel" src="https://user-images.githubusercontent.com/101732786/176945289-dc7ae654-fc28-4d7f-a0b4-e248fc965608.png">


## Future improvements

* Reviews page and functionality
* Favourite Player page and functionality
* User profile picture upload functionality
* Make page Responsive for Smart Phones/Tablets etc.
