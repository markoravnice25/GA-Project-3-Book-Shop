## General Assembly Software Engineering Immersive (March - July 2022)

# Project 3: [Book Shop](https://book-shop-project-marko.herokuapp.com/)

### Website/Code Installation

* [Website](https://book-shop-project-marko.herokuapp.com/)
* yarn
* yarn add axios
* yarn add react-select
* yarn add express
* yarn add dotenv
* yarn add jsonwebtoken
* yarn add bcrypt
* yarn add mongoose
* yarn add mongoose-unique-validator@2.0.3
* yarn add nodemon -D
* yarn start

<img width="1280" alt="home-page" src="https://user-images.githubusercontent.com/101732786/177038196-0c90327d-a50f-4c5f-9e1e-c2a9ce1d69d5.png">

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

<img width="1275" alt="show-page" src="https://user-images.githubusercontent.com/101732786/177038338-3bf84f55-83d3-446c-b3d4-38756ae5ea06.png">

This is my 3rd (of 4) projects during the the 13 week General Assembly Software Engineering Immersive program. The app was developed in a team of 3 students and took us 8 days to complete. It is a Full-Stack application with our own API. The idea was to have a database of books and an app which models the [Waterstones](https://www.waterstones.com/) website, which we used as a guide for this project.

The application includes:

1) Home/Index Page
2) Book Show Page
3) Account Page
4) Search Results Page
5) Register Page
6) Login Page
7) Wishlist Page
8) Nav Bar
9) Review section
10) CRUD functionality

All content was sourced from the [Waterstones](https://www.waterstones.com/) website

## Brief

* Build a full-stack application by making your own Back-End and Front-End
* Use MongoDB as database for yout API using Node.js for building the Back-End
* Consume your API with a separate front-end built with React
* Be a complete product which most likely means multiple relationships and CRUD functionality
* Implement thoughtful use stories/wireframes that are significant enough to help you know which features are core and which you can cut out
* Be deployed online

## Planning

Planning the project out was extremely useful, as it allowed us to establish the necessary relationships for the Back-End and the design of the Front-End. I was tasked with logging and drawing up the wireframe for the project. I used the [Excalidraw](https://excalidraw.com/) website to do the design and google docs to keep log of our progress. We designed the project to meet minimal requirements, and then added on extra features as we had finished earlier than expected.

#### Back-End design

The Back-End consisted of a database which held our API; a router (and secure route) through which all requests were made; controllers which would access the model before returning the request back to the User.
<img width="1136" alt="Back_End-wireframe" src="https://user-images.githubusercontent.com/101732786/177039511-35494b11-d3ad-429d-954f-baa6ca0acdc9.png">

#### Front-End design
We wanted to keep the Front-End Design to a minimum and add on features if we had time at the end. As can be seen in the wireframe, there are three main pages: home page; show page; wishlist page. We didn't add the Register/Login pages to the wireframe as they were a given.
<img width="1447" alt="Front-End-Wireframe" src="https://user-images.githubusercontent.com/101732786/177039863-d0cbb0b0-c478-4653-9d66-cebc0e78f5d7.png">

#### Task delegation
We each had tasks on specific areas of the project to avoid migration errors. My primary role was authentication; Register/Login; Wishlist; Styling.

<img width="953" alt="project-roles" src="https://user-images.githubusercontent.com/101732786/177040412-c519dcc9-a946-4ec1-868d-4e868a8ff8da.png">

#### To-do list
Finally, to track our progress each day I created a to-do list with targets for the day, which we would tick off upon completion.
<img width="529" alt="to-do" src="https://user-images.githubusercontent.com/101732786/177040028-c4fd9ff7-57b6-4c77-b75c-7a0fe073508a.png">

## Approach Taken

Day 1:
* Create Git repository
* Design Back-End relationships and wire-frame
* Design Front-End wireframe
* Begin coding Back-End

Day 2:
* Continue coding Back-End

Day 3:
* Finished Back-End and seeded data to our API
* Connected Back-End to Front-End
* Delegated tasks for Front-End

Day 4: 
* Create Home page, Nav Bar, Footer, Register/Login.
* Seeded Back-End API with 100 footballers.

Day 5:
* Home page continued
* Show page continued
* Finish Register/Login page functionality and design
* Create Review functionality for logged in users

Day 6:
* Fix bug - some book images not displaying
* Create 'Account Page' with 'Profile' and 'Wishlist' links
* Create Wishlist page and style


Day 7:
* Finished Functionality for Wishlist page
* Finished Home page styling
* Finished Show page styling
* Continued with Review functionality
* Continued with Profile page

Day 8:
* Final styling of final product
* Added and finished Search bar functionality
* Finished review functionality
* Finished Profile page

## Featured Code:
The code example (/controllers/users.js) acts as a 'toggle between a POST and DELETE request. It uses control flow to check whether the item has or hasn't been added to the user's Wishlist, and then either deletes or adds the item upon the button (on the Front-End) being clicked.

<img width="762" alt="wishlist-item-back-end-code" src="https://user-images.githubusercontent.com/101732786/177040662-6bb546e2-f70f-46b1-81a1-e91a168cef8a.png">

## Screenshot walk through of main pages

Home Page:

<img width="1280" alt="home-page" src="https://user-images.githubusercontent.com/101732786/177040768-46cf9950-7530-4584-9540-285d979cb735.png">

Show Page:

<img width="659" alt="show-page-full" src="https://user-images.githubusercontent.com/101732786/177040852-28b5cc20-bd96-4eec-a8c2-bab8d4fb2247.png">

Wishlist Page:

<img width="1062" alt="wishlist-page" src="https://user-images.githubusercontent.com/101732786/177040911-a84f1089-741b-448f-85b8-7b6284789a95.png">

Register Page:

<img width="1297" alt="register-page" src="https://user-images.githubusercontent.com/101732786/177040958-9c7c6efb-451e-4408-aae4-fcd204aa3435.png">

## Technology used:

#### Back-End:
* Node.js
* MongoDB
* Mongoose
* Express
* JWT
* Dotenv
* Bcrypt

#### Front-end:
* React
* JSX
* Axios
* SCSS
* Bootstrap
* React-Slick
* React-Icons
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

* Coding in a team of three people.
* Delegating tasks so that team members don't interfere with each other's code
* Solving merge conflicts
* Desigining reference and embedded relationships on the Back-End
* Learning to use Node.js and Express.

## Challenges:

* Working in a team meant that our communication was key
* We probably lacked one person to take charge and act as leader of the project, this would have helped save time.
* Solving merge conflicts - sometimes we worked on the same code block, this could have been avoided with more effective communication.

## Bugs

* Styling is not responsive
* The carousel on the Home page displays the same book twice (the second underneath the original) unless the full row of designated spots is filled (There are 4 spots on our design).
* When deleting a review, all reviews for that book are simultaneously deleted.


## Future improvements

* Fix bugs
* User profile picture upload functionality
* Better styled Account Page
* Make page Responsive for Smart Phones/Tablets etc.
