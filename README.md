# Bucketmapper-node
This is the back-end to the full stack application BucketMapper, which allows users store details about their dream places to visit. Easily organizes your travel details in a visually engaging manner with notes for each place!

React Front-End to BucketMapper can be found in the BucketMapper-react repo 


![bucketmapper-login](https://user-images.githubusercontent.com/24365319/35661142-0bccd0e2-06c5-11e8-8f0f-5746618b2f6a.png)
![bucketmapper-maui-adventurepage](https://user-images.githubusercontent.com/24365319/35661138-08408752-06c5-11e8-9d05-c8efa5b21b26.png)

## You can checkout out the video demo!
https://youtu.be/WHEZ7_zwioc
## Restful API Built With

* Node.js
* PostgreSQL
* knex
* express

## Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Please install:
* Node.js
* PostgreSQL
* Express
* Knex

### Installing

Once you have the prerequisites, run `npm install` and then `open setup-database`, followed by `npm run reset-db`.

Once you have your db ready, run the server using the `npm start` command

## Deployment

Once youve started the server by running `npm start`, you can make requests to localhost:8000.
Here are some routes you can play with!
###### REGISTER (POST)Password must be at least 6 digits
- `http -p HBhb POST localhost:8000/users name=xxxx email=xxxx@mail.com password=xxxxxx`
###### LOGIN- this will return a jwt token to authenticate you as a user to continue using the application. 
- `http -p HBhb POST localhost:8000/authenticate email=xxxx@mail.com password=xxxxxx`
###### POST a destination. You can decode the jwt token at https://jwt.io/ to find your user Id if you wish to add destinations
- `http -p HBhb POST localhost:8000/users/YOURID/destinations name=Mexico 'Authorization:Bearer xxxxxxxxxxxxxxxxxxxx'`
###### GET destinations.  to your board
- `http -p HBhb GET localhost:8000/users/YOURID/destinations 'Authorization: Bearer xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'`
###### DELETE a destination
- `http -p HBhb DELETE localhost:8000/destinations/destinationId 'Authorization:Bearer xxxxxxxxxxxxxxxxxxxx'`

# Thanks for checking out my project! 




