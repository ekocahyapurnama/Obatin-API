# Obatin-API
Backend source code for Obatin App

&nbsp;

### TODO
- [x] Define path endpoint
  - [x] talk
  - [x] users
  - [x] authentications
- [ ] Handling error
  - [ ] client error
  - [ ] invariant error
  - [ ] not found error
- [ ] API
  - [ ] Integrate bot_mockup
    - [ ] create service
    - [ ] request validation
    - [ ] create handler
    - [ ] swagger documentation

&nbsp;

**NOTE** : the todo list is still temporary
## Project structure 

* **src**
  * **api** (this folder like controller folder)
    * **talk**
      * handler.js
      * index.js
      * routes.js
    * **authentications**
    * **users**
  * **exceptions** (for handling error exceptions)
  * **services** (business logic here)
  * **validator** (for validation user input, validation use JOI)
  * server.js (function that start hapi server)
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

4) Start API server
```
$ npm run start
```

5) View the API docs at
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