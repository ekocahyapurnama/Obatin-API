# Obatin-API
Obatin-API project is part of the Obatin application. This is an API build with the Hapi.js as web application framework, Sequelize as ORM, and node-nlp as a BOT mockup.

&nbsp;

### TODO
- [x] API
  - [x] Integrate with bot_mockup
  - [x] User register
  - [x] User authentication

&nbsp;

**NOTE** : The todo list is still temporary


## Features
* Build with Hapi Js framework so that code can be easily modularized
* API documentations with Swagger
* Token based authentication

## Project structure 
* **src**
  * **api** (this folder like controller folder)
    * **authentications**
      * handler.js
      * index.js
      * routes.js
    * **talk**
    * **users**
  * **bot** (storing intents and model)
  * **exceptions** (handling error 
  exceptions)
  * **migrations** (migration files)
  * **models** (contains all of model classes)
  * **services** (business logic here alias service layer)
  * **tokenize** 
  * **utils** (This directory contains several utility programs and libraries)
  * **validator** (validation user input, validation use JOI)
  * server.js (function that start hapi server)
  * swaggerOption.js (swagger options)
* README.md
* .env (environment file)

## Installation
1) Clone this repo
```
$ git clone https://github.com/Ian-72/Obatin-API.git
```

2) Go to Obatin-API directory
```
$ cd Obatin-API
```

3) Install the required modules
```
$ npm install
```

4) Don't forget to set node environment, host, port, database, and token in .env file

5) run migrate
```
$ npm run migrate
```

6) Before you start the API server, make sure you have created the model first, the dataset and the model are stored in the src/bot folder
```
$ npm run train
```

7) Start API server
```
$ npm run start
```

6) View the API documentation at (if you user development environtment)
[http://localhost:5000/docs](http://localhost:5000/docs)