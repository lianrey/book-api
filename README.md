# Book API Demo
This is a NodeJS demo 

## Technologies and packages
NodeJS
MongoDB
Express
Babel
Jest
IsbnValidator

## Test Locally
`npm start`

## Send a request with Rest Client in VSCode
```
POST http://localhost:3000/books
Content-Type: application/json

{
  "name": "Cracking the coding interview 4",
  "author": "Unknow",
  "isbn": "0984782869",
  "numberOfPages": 1000,
  "bookEdition": "first",
  "bookFormat": "hardcopy"
}
```