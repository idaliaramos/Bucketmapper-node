# Bucketmapper-node
Api/database where you can store details about your upcoming or dream places to visit. Easily organize your travel details in a visually engagin list with notes for each place!


![bucketmapper-login](https://user-images.githubusercontent.com/24365319/35661142-0bccd0e2-06c5-11e8-8f0f-5746618b2f6a.png)
![bucketmapper-maui-adventurepage](https://user-images.githubusercontent.com/24365319/35661138-08408752-06c5-11e8-9d05-c8efa5b21b26.png)


## Restful API Built With

* Node.js
* PostgreSQL
* knex
* express

## Routes you can test

* REGISTER (POST)
http -p HBhb POST localhost:8000/users name=xxxx email=xxxx@mail.com password=xxxx
* LOGIN- this will return a jwt token to authenticate you as a user to continue using the application
http -p HBhb POST localhost:8000/authenticate email=xxxx@mail.com password=xxxx
* POST a destination
http -p HBhb POST localhost:8000/users/your id/destinations name=Mexico 'Authorization:Bearer xxxxxxxxxxxxxxxxxxxx'
* GET a destination you can decode the jwt token at https://jwt.io/ to find your user Id if you wish to add destinations to your board
http -p HBhb GET localhost:8000/users/your id/destinations 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
* DELETE  a destination
http -p HBhb DELETE localhost:8000/destinations/destinationId 'Authorization:Bearer xxxxxxxxxxxxxxxxxxxx'
## Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install as needed
Node.js
PostgreSQL
Express
Knex

### Installing

Once you have the prerequisites, run npm install and then reset-db, reset db will run the commands needed to start a database for you locally.

Once you have your db ready, run the server using the npm start command

## Deployment

Once youve started the server by running `npm start`, you can make requests to localhost:8000.
Here are some routes you can play with!
* REGISTER (POST)
http -p HBhb POST localhost:8000/users name=xxxx email=xxxx@mail.com password=xxxx
* LOGIN- this will return a jwt token to authenticate you as a user to continue using the application
http -p HBhb POST localhost:8000/authenticate email=xxxx@mail.com password=xxxx
* POST a destination
http -p HBhb POST localhost:8000/users/your id/destinations name=Mexico 'Authorization:Bearer xxxxxxxxxxxxxxxxxxxx'

* GET a destination you can decode the jwt token at https://jwt.io/ to find your user Id if you wish to add destinations to your board
http -p HBhb GET localhost:8000/users/your id/destinations 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'

* DELETE  a destination
http -p HBhb DELETE localhost:8000/destinations/destinationId 'Authorization:Bearer xxxxxxxxxxxxxxxxxxxx'




