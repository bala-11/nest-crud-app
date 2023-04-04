 let's test if the app is running. Open Postman and create a new GET request.

Postman Get request to localhost:3000

Get all users
To get all users, we can make a GET request to localhost:3000/users.

If we see an empty array it means that its working.

Postman Get request to localhost:3000/users

Create a user
To create a user, we can make a POST request to localhost:3000/users.

In the body, we can use the raw JSON format and set the following data:
{
  "name": "aaa",
  "email": "aaa@mail"
}
Postman Post request to localhost:3000/users

You can create 2 more users with the following data:
{
  "name": "bbb",
  "email": "bbb@mail"
}
{
  "name": "ccc",
  "email": "ccc@mail"
}
Get all the three users
To get all the three users, we can make a GET request to localhost:3000/users.

Postman Get request to localhost:3000/users

Get a user by id
To get a single user, we can make a GET request to localhost:3000/users/2.

Postman Get request to localhost:3000/users/2

Update a user
To update a user, we can make a PUT request to localhost:3000/users/2.

Let's change the name from "bbb" to "Francesco" and the email from "bbb@mail" to "francesco@mail".
{
  "name":"Francesco",
  "email":"francesco@mail"
}
Postman PUT request to localhost:3000/users/2

Delete a user
Finally, to delete a user, we can make a DELETE request to localhost:3000/users/3.

Postman DELETE request to localhost:3000/users/3
