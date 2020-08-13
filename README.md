# Tic-Tac-Toe API #

Tic Tac Toe Api Backend.

### What is this repository for? ###

This application contains the backend api functionalities of a Tic Tac Toe React application.


### Installation? ###
To run the Api application follow the following steps. Be sure you are using Nodejs latest LTS and MongoDB latest.

* Configuration
```
git clone https://github.com/zahiruldu/tic-tac-toe-api.git tictacapi
cd tictacapi
npm install
npm start
```
The application will sart listening to default port 8080. Browse Url : http://localhost:8080
To change the development server port, see the following file

```
.env
```


## Dependencies
MongoDB latest  3X
Node latest LTS

## Database configuration
Use the latest version of MongoDB community server edition 3X.
keep your MongoDB running.
To change the MongoDB configuration, check the following file and change the value of db property
```
config/config.js
```

* How to run tests
```
npm test
```
* Deployment instructions
Build docker
```
docker build -t <your username>/tictactoeapi .
```
Run image
```
docker run -p 8080:8080 <your username>/tictactoeapi 
```

Now you can browse the url `http://localhost:8080`


### Who do I talk to? ###

* Maintainer
Md. Zahirul Haque
# tic-tac-toe-api
