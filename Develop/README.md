# E-commerce-project

# Description
This project is about building the back end for an e-commerce site. This application used Express.js API and Sequelize to interact with a MySQL database. This apps use mySQL database created  with associations and models. API Routes are acquired to execute RESTful CRUD operations using sequelized models and the same is being tested in Insomnia.
  

## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [Licences](#Licences)
  - [Licencesbadges](#Licences_badges)
  - [Contributors](#Contributors)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  
  
  ## Installation
  
  * Dependencies/Packages
    - Node.js
    - Express.js
    - MySQL2
    - Sequelize
    - dotenv

Git clone the repo from Github

* Navigate to the folder and run `npm install` in your terminal.

* Be sure to include your MySQL user/password information in .env file.

* Database Connection
    - `mysql -u root -p`
    - `source schema.sql`
    - `npm run seed` [To seed the file]

* Run the app
     - `npm start` [To start the server] and navigate to (http://localhost:3001/) in your browser OR Use Insomnia Core

## Usage 
This application will permit users to view, add, edit, and delete categories, products, and tags. Below videos demonstrate the functionality of the e-commerce back end.

I. Walkthrough video covers MySQL shell [Click here](link here)<br>
    * Source the schema <br>
    * Seed the database <br>
    * Start the npm Server
  
II. Walkthrough video covers API routes being tested in Insomnia Core. [Click here](link here)<br>
    *  GET routes for all categories, all products, and all tags <br>
    *  GET routes for a single category, a single product, and a single tag by Id<br>
    *  POST, PUT, and DELETE routes for categories, products, and tags

III. Walkthrough video showing all the technical acceptance criteria met. [CLick here](link here)<br>
    * Uses the MySQL2 and Sequelize packages to connect to a MySQL database
    * Uses the dotenv package to use environment variables to store sensitive data, like a user’s MySQL username, password, and database name.
    * Syncs Sequelize models to a MySQL database on the server start.
    * Column definitions for all four models
    * Model associations
  
## Credits

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

## Licences
MIT

## Licences_badges

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contributors
  
anyone is welcome to contribute to this project
  
## Repository
  
  - [Project Repo](https://github.com/aaron-might/E-commerce-project)
  
## GitHub
  
  ![Image of me](https://avatars.githubusercontent.com/u/83680026?v=4),
  -![GitHub Profile](https://github.com/aaron-might),
  