# Obatin-API
Obatin-API project is part of the Obatin application. This is an API build with the Hapi Js as web framework, Sequelize as ORM, and node-nlp as a BOT mockup.

&nbsp;

### TODO
- [x] Define endpoint path
  - [x] talk
  - [x] users
  - [x] authentications
- [x] Handling error
  - [x] client error
  - [x] invariant error
  - [x] not found error
  - [ ] authentication error
- [ ] API
  - [x] Integrate with bot_mockup
    - [x] create service
    - [x] request validation
    - [x] create handler
    - [x] documentation
  - [ ] User register
    - [ ] create service
    - [ ] request validation
    - [ ] create handler
    - [ ] documentation
  - [ ] Authentications
    - [ ] create service
    - [ ] request validation
    - [ ] create handler
    - [ ] documentation
  

&nbsp;

**NOTE** : the todo list is still temporary

## Features
* Build with Hapi Js framework so that code can be easily modularized
* API documentations with Swagger
* Token based authentication

## Project structure 
* **src**
  * **api** (this folder like controller folder)
    * **talk**
      * handler.js
      * index.js
      * routes.js
    * **authentications**
    * **users**
  * **bot** (for storing intents and model)
  * **exceptions** (for handling error exceptions)
  * **services** (business logic here)
  * **utils** (This directory contains several utility programs and libraries)
  * **validator** (for validation user input, validation use JOI)
  * server.js (function that start hapi server)
  * swaggeroptions.js (swagger options)
* README.md
* .env (environment file)

## How to
**Use this API:** 
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

4) before you start the api server, make sure you have created the model first, the dataset and the model are stored in the src/bot folder
```
$ npm run train
```

5) Start API server
```
$ npm run start
```

6) View the API docs at
[http://localhost:5000/](http://localhost:5000/)

&nbsp;

**Use sample bot :**

1) Go to bot_mockup directory
```
$ cd bot_mockup
```

2) Install the required modules
```
$ npm install
```

3) Start training
```
$ npm run train
```

4) Now let's talk to our new friend
```
$ npm run start train
```