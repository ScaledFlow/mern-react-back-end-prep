npm init
npm install express --save
npm install body-parser --save
npm install nodemon --save-dev
npm install uuid --save
npm install express-validator --save
npm install axios --save
npm install mongoose-unique-validator --save

npm install mongoose --save

GOOGLE API - google geocoding api
https://developers.google.com/maps/documentation/geocoding/overview


const {v4 : uuidv4} = require('uuid');
    
id: uuidv4(),


"start: 'nodemon app.js"


http://localhost:5000/api/places/p1

http://localhost:5000/api/places/user/u1

Postman - body raw json

ROUTES FOR PLACES

GET
http://localhost:5000/api/places/user/u2

http://localhost:5000/api/places/p1


POST
http://localhost:5000/api/places

{
    "title": "New York Stock Exchange",
    "description": "Where the money lives",
    "creator": "u2",
    "address": "11 Wall St, New York, NY 10005",
    "coordinates": {
        "lat": 40.7063069, 
        "lng": -70.010329
    }
}

PATCH
http://localhost:5000/api/places/p1
{
    "title": "New York Stock Crime Syndicate"
}

DELETE
http://localhost:5000/api/places/p1


ROUTES FOR USERS

GET
http://localhost:5000/api/users

POST - Create User
http://localhost:5000/api/users/signup

{
  "name": "Test Name",
  "email": "test2@test.com",
  "password": "testing" 
}

POST - Login
http://localhost:5000/api/users/login

{
  "email": "test2@test.com",
  "password": "testing" 
}

AFTER INSTALL OF AXIOS

POST
http://localhost:5000/api/places

{
    "title": "New York Stock Exchange",
    "description": "Where the money lives",
    "creator": "u2",
    "address": "11 Wall St, New York, NY 10005"
}

AFTER CONNECTION TO MONGO

GET
http://localhost:5000/api/places/5fd6cfb12f6a9234c0ca5551

http://localhost:5000/api/places/user/u2

PATCH
http://localhost:5000/api/places/5fd6cfb12f6a9234c0ca5551

{
    "title": "Test title change",
    "description": "Test description change"
}

DELETE
http://localhost:5000/api/places/5fd6cfb12f6a9234c0ca5551



USERS --- add user & check user---

POST - create a new users
http://localhost:5000/api/users/signup

{
  "name": "John",
  "email": "test2@test.com",
  "password": "test0001",
  "places": "p1"
}

result

{
    "user": {
        "_id": "5fd7aee5aa9878137479ced5",
        "name": "John",
        "email": "test2@test.com",
        "image": "https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg",
        "password": "test0001",
        "places": "p1",
        "__v": 0,
        "id": "5fd7aee5aa9878137479ced5"
    }
}

POST - test to see if logged in

http://localhost:5000/api/users/login

{
  "email": "test2@test.com",
  "password": "test0001"
}

GET - get all users

http://localhost:5000/api/users/


POST - create a new users - no dummy id
http://localhost:5000/api/users/signup

{
  "name": "John",
  "email": "test2@test.com",
  "password": "test0001"
}

result

{
    "user": {
        "places": [],
        "_id": "5fd7da50d868ef0f04bffc35",
        "name": "John",
        "email": "test2@test.com",
        "image": "https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg",
        "password": "test0001",
        "__v": 0,
        "id": "5fd7da50d868ef0f04bffc35"
    }
}

POST
http://localhost:5000/api/places

{
    "title": "New York Stock Exchange",
    "description": "Where the money lives",
    "creator": "5fd7da50d868ef0f04bffc35",
    "address": "11 Wall St, New York, NY 10005"
}

result

{
    "place": {
        "_id": "5fd7dbd960506d07c04e6067",
        "title": "New York Stock Exchange",
        "description": "Where the money lives",
        "address": "11 Wall St, New York, NY 10005",
        "location": {
            "lat": 40.7068661,
            "lng": -74.01131889999999
        },
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg",
        "creator": "5fd7da50d868ef0f04bffc35",
        "__v": 0
    }
}

DELETE
http://localhost:5000/api/places/5fd7dbd960506d07c04e6067

