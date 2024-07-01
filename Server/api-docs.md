# Pokemart API Documentation

## Endpoints :

List of available endpoints:

- `POST /users/register`
- `POST /users/login`
- `POST /users/googleLogin`

//---//

- `POST /order/:pokemonId/payment/midtrans/initiate`
- `GET /order/payment/success`

//---//

- `GET /pokemon`
- `POST /pokemon`
- `GET /pokemon/:id`
- `PUT /pokemon/:id`
- `DELETE /pokemon/:id`

&nbsp;

## 1. POST /users/register

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- body:

```json
{
  "fullName": "string",
  "email": "string",
  "password": "string",
  "phoneNumber": "string",
  "address": "string"
}
```

_Response (201 - Created)_

```json
{
  "fullName": "string",
  "email": "string",
  "phoneNumber": "integer",
  "address": "Jl sinisini"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email is already used"
}
OR
{
  "message": "Email format is invalid"
}
OR
{
  "message": "Password is required"
}
OR
{
  "message": "Phonenumber is required"
}
OR
{
  "message": "Address is required"
}
```

&nbsp;

## 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (401 - Bad Request)_

```json
{
  "message": "Please insert your email/password"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

## 3. - GET /pokemon

Description:

- Get all pokemon from database

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

_Response (200 - OK)_

```json
[
  {
        "id": 1,
        "name": "Charizard",
        "stat": "109",
        "type": "Flying",
        "ability": "Blaze",
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
        "price": 200000,
        "createdAt": "2024-04-18T09:43:49.271Z",
        "updatedAt": "2024-04-18T09:43:49.271Z"
    },
    {
        "id": 2,
        "name": "Blastoise",
        "stat": "105",
        "type": "Water",
        "ability": "Torrent",
        "imageUrl": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png",
        "price": 200000,
        "createdAt": "2024-04-18T09:43:49.271Z",
        "updatedAt": "2024-04-18T09:43:49.271Z"
    },
  ...,
]
```

## 4. - POST /pokemon

Description:

- Create pokemon to database

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- body:

```json
{
  "name": "string",
  "stat": "string",
  "type": "string",
  "imageUrl": "string",
  "price": "integer"
}
```

_Response (201 - Created)_

```json
{
  {
    "id": 26,
    "name": "string",
    "stat": "integer",
    "type": "string",
    "ability": "stringp",
    "imageUrl": "string",
    "price": "integer",
    "updatedAt": "2024-04-25T09:37:36.526Z",
    "createdAt": "2024-04-25T09:37:36.526Z"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Stat is required"
}
OR
{
  "message": "Type is required"
}
OR
{
  "message": "Ability is required"
}
OR
{
  "message": "Price is required"
}
```

&nbsp;

## 5. - GET /pokemon/:id

Description:

- Get pokemon based on params id from database

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - OK)_

```json
{
  "id": 1,
  "name": "string",
  "stat": "integer",
  "type": "string",
  "ability": "string",
  "imageUrl": "string",
  "price": "integer",
  "createdAt": "2024-04-18T09:43:49.271Z",
  "updatedAt": "2024-04-18T09:43:49.271Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. - PUT /pokemon/:id

Description:

- Update data pokemon based on params id to database

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

- body:

```json
{
  "name": "string",
  "stat": "string",
  "type": "string",
  "ability": "integer",
  "imageUrl": "string",
  "price": "integer"
}
```

_Response (200 - Created)_

```json
{
  "id": 27,
  "name": "string",
  "stat": "string",
  "type": "string",
  "ability": "integer",
  "imageUrl": "string",
  "price": "integer",
  "updatedAt": "2024-04-25T09:45:31.905Z",
  "createdAt": "2024-04-25T09:45:31.905Z"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Name is required"
}
OR
{
  "message": "Stat is required"
}
OR
{
  "message": "Ability is required"
}
OR
{
  "message": "Type is required"
}
OR
{
  "message": "Price is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "You are not authorized"
}
```

_Response (403 - Forbiden)_

```json
{
  "message": "You aren't authorized"
}
```

&nbsp;

## 7. - DELETE /pokemon/:id

Description:

- Delete pokemon based from id params from database

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - Created)_

```json
{
  "message": "<entity name> success to delete"
}
```

_Response (403 - Forbiden)_

```json
{
  "message": "You aren't authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;

## 8. - GET /pokemon/:pokemonId/payment/midtrans/initiate

Description:

- Initiating payment to buy pokemon based from id pokemon from database

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (200 - Ok)_

```json
{
  "message": "string",
  "transactionToken": "string"
}
```

_Response (403 - Forbiden)_

```json
{
  "message": "You aren't authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;


## 8. - PATCH /pokemon/payment/success

Description:

- Doing payment to buy pokemon based from transaction token

Request:

- headers:

```json
{
  "Authorization": "Bearer <access_token>"
}
```

_Response (200 - Ok)_

```json
{
   "message":"Thanks for catching"
}
```

_Response (403 - Forbiden)_

```json
{
  "message": "You aren't authorized"
}
```

_Response (404 - Not Found)_

```json
{
  "message": "Data not found"
}
```

&nbsp;


## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal server error"
}
```