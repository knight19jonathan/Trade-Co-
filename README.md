# **Trade-Co**

## Description
#### A back end SQL database interface with node terminal operability using local web hosting or insomnia to manage product databases based on given criteria. 

![This is the screenshot of the application](https://i.ibb.co/pRyh5zY/update.jpg)

Demo Video Link: https://drive.google.com/file/d/1P-r1kynrivaFn5jHt3_9kmpq1qZA3bVW/view

## Table of Contents
- [Installation](#installation)
- [Usage](#usage) 
- [License](#license)
- [Badges](#badges)
- [Contributors](#Contributors)
- [Tests](#Tests)
- [Questions](#Questions)
- [Credits](#Credits)
- [Contacts](#Contacts)

## Installation
#### Download files from repo open in VS Code or similiar utility software initialize NPM then install npm global e sure   that the following nodes are added to package.json dependencies: dotenv, express, mysql2, nodemon, and sequelize. Then create a database by opening the MySQL terminal and entering the SOURCE db/schema.sql to create the database.Then return to node terminal and go to the server.js file on line 15 set force: to ' true '.  Now open package.json again and under scripts add "seed" : "node seeds/index.js. Then seed the data base by executing the command npm run seed in the terminal. Now the app should be ready to be initialized with nodemon server.js to begin listening to local host 3001. Pause for about a minute to allow responses to catch up then should be ready to recieve requests on insomina.  From here we can send requests to the insomnia application to make CRUD requests to manage our back end database. 

## Usage
#### The program is utilized inside the insomina application by issueing CRUD requests to the API to manage the database. 

## License
#### unlicense

## Badge
![This is the badge of the application](https://img.shields.io/badge/license-unlicense-green.svg)

## Contributors
#### Contribute Here: [Not neccessary at this time.](Not neccessary at this time.)

## Tests
#### None

## Questions
#### Naming conventions reviews and ensuring all IDs are called properly. 

## Credits
### Jonathan Knight several MDN indexes. MySQl and express MDN.


## Contacts
### Email: [knight19jonathan@gmail.com](knight19jonathan@gmail.com)
### [GitHub](https://github.com/knight19jonathan/Notus-Pocus-)

