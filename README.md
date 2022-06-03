# Obatin-API
Obatin-API project is part of the Obatin application. This is an API build with the Hapi.js as web application framework, Sequelize as ORM, and node-nlp as a BOT mockup.

&nbsp;

## Features
* Build with Hapi Js framework so that code can be easily modularized
* API documentations with Swagger
* Token based authentication

## Project structure 
* **src**
  * **api** (this folder like controller folder)
    * **authentications**
      * documentations.js
      * handler.js
      * index.js
      * routes.js
    * **ML**
    * **talk**
    * **users**
  * **bot** (storing intents and model)
  * **config**
  * **exceptions** (handling error exceptions)
  * **migrations** (migration files)
  * **models** (contains all of model classes)
  * **services** (business logic here alias service layer)
  * **tokenize** 
  * **utils** (This directory contains several utility programs and libraries)
  * **validator** (validation user input, validation use JOI)
  * server.js (function that start hapi server)
  * swaggerOption.js (swagger options)
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

4) Don't forget to set host, port, token, and external ML API url in .env file, if you want to run this server in production set config in .env file for the database configurations else if you want to run in development set in ./src/config/config.js

5) run migrate
  ```
  $ npm run migrate
  ```

6) Start API server
  * run in development
    ```
    $ npm run start-dev
    ```
  * but if you want to run in production
    ```
    $ npm i -g pm2
    $ npm run start-prod
    ```

7) View the API documentation at (if you user development environtment)
[http://localhost:5000/docs](http://localhost:5000/docs)