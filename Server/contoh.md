# Movie API Documentation

## Endpoints :

List of available endpoints:

- `POST /users/register`
- `POST /users/login`


- `POST /lodgings`
- `GET /lodgings`
- `GET /lodgings/:id`
- `PUT /lodgings/:id`
- `DELETE /lodgings/:id`
- `PATCH /lodgings/:id`


- `GET /types`
- `POST /types`
- `PUT /types/:id`
- `DELET /types/:id`


- `GET /publics`
- `GET /publics/:id`

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
  "username": "string",
  "email": "string",
  "password": "string",
  "phoneNumber":"string",
  "address":"string"
}
```

_Response (201 - Created)_
```json
{
  "id": "integer",
  "email": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Username is required"
}
OR
{
  "message": "Email is required"
}
OR
{
  "message": "Email must be unique"
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
  "message": "Email/password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;


## 3. - GET /lodgings

Description:
- Get all lodgings from database

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
        "name": "namenya",
        "facility": "ini fasilitasnya",
        "roomCapacity": 4,
        "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "location": "surabayalah",
        "price": 1200,
        "typeId": 2,
        "authorId": 3,
        "createdAt": "2024-02-27T09:38:43.063Z",
        "updatedAt": "2024-02-27T09:38:43.063Z",
        "User": {
            "id": 3,
            "username": "cust1",
            "email": "1cust@mail.com",
            "password": "$2a$10$s5sS0yhbJFWjJV425FV7oujLDLGP/hq1e.NVarpob9U0Z3imEY/O2",
            "role": "Staff",
            "phoneNumber": "12345123",
            "address": "Jl. customer no 123",
            "createdAt": "2024-02-27T09:37:24.645Z",
            "updatedAt": "2024-02-27T09:37:24.645Z"
        }
    },
    {
        "id": 2,
        "name": "namenya lagi",
        "facility": "ini fasilitasnya bang",
        "roomCapacity": 5,
        "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "location": "surabayalah",
        "price": 1500,
        "typeId": 3,
        "authorId": 3,
        "createdAt": "2024-02-27T09:39:22.184Z",
        "updatedAt": "2024-02-27T09:39:22.184Z",
        "User": {
            "id": 3,
            "username": "cust1",
            "email": "1cust@mail.com",
            "password": "$2a$10$s5sS0yhbJFWjJV425FV7oujLDLGP/hq1e.NVarpob9U0Z3imEY/O2",
            "role": "Staff",
            "phoneNumber": "12345123",
            "address": "Jl. customer no 123",
            "createdAt": "2024-02-27T09:37:24.645Z",
            "updatedAt": "2024-02-27T09:37:24.645Z"
        }
    },
  ...,
]
```

## 4. - POST /lodgings

Description:
- Create lodgings to database

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
  "facility": "string",
  "imgUrl": "string",
  "location":"string",
  "price":"integer",
  "typeId":"integer",
  "authorId":"integer",
}
```

_Response (201 - Created)_
```json
{
  {
    "id": 9,
    "name": "checklist api",
    "facility": "ini fasilitasnya bang",
    "roomCapacity": 3,
    "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "location": "surabayalah",
    "price": 1500,
    "typeId": 4,
    "authorId": 1,
    "updatedAt": "2024-03-05T01:12:17.290Z",
    "createdAt": "2024-03-05T01:12:17.290Z"
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
  "message": "Facility is required"
}
OR
{
  "roomCapacity": "roomCapacity is required"
}
OR
{
  "imgUrl": "imgUrl is required"
}
OR
{
  "location": "location is required"
}
OR
{
  "price": "price is required"
}
OR
{
  "message": "Minimum price is 100_000"
}
OR
{
  "typeId": "type is required"
}
```
&nbsp;

## 5. - GET /lodgings/:id

Description:
- Get lodging based on params id from database

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
    "id": 4,
    "name": "gass lah ",
    "facility": "ini fasilitasnya bang",
    "roomCapacity": 3,
    "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "location": "surabayalah",
    "price": 1500,
    "typeId": 3,
    "authorId": 3,
    "createdAt": "2024-02-27T09:44:44.581Z",
    "updatedAt": "2024-02-27T09:44:44.581Z"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

&nbsp;

## 6. - PUT /lodgings/:id

Description:
- Update data logding based on params id to database

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
  "facility": "string",
  "imgUrl": "string",
  "location":"string",
  "price":"integer",
  "typeId":"integer",
  "authorId":"integer",
}
```

_Response (200 - Created)_
```json
{
  {
    "id": 9,
    "name": "checklist api",
    "facility": "ini fasilitasnya bang",
    "roomCapacity": 3,
    "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "location": "surabayalah",
    "price": 1500,
    "typeId": 4,
    "authorId": 1,
    "updatedAt": "2024-03-05T01:12:17.290Z",
    "createdAt": "2024-03-05T01:12:17.290Z"
  }
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
  "message": "Facility is required"
}
OR
{
  "roomCapacity": "roomCapacity is required"
}
OR
{
  "imgUrl": "imgUrl is required"
}
OR
{
  "location": "location is required"
}
OR
{
  "price": "price is required"
}
OR
{
  "typeId": "type is required"
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

//----------------------------------------------------------

## 7. - DELETE /lodgings/:id

Description:
- Delete lodging based from id params from database

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

## 8. - PATCH /lodgings/:id

Description:
- Update 1 field in lodgings from database

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
  "photo": "file",
}
```

_Response (201 - Created)_
```json
{
  "message": "image <entity name> success to update"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "File is required"
}
```

_Response (400 - File Is Required)_
```json
{
  "message":"Please insert your file"
}
```

_Response (401 - Unauthorized)_
```json
{
    "message": "You are not authorized"
}

_Response (403 - Forbiden)_
```json
{
    "message": "You are not authorized"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

&nbsp;

## 9. - GET /types

Description:
- Get all types from database

Request:

- headers: 

```json
{
  "Authorization": "Bearer <access_token>"
}
```

_Response (200 - Ok)_
```json
[
  {
            "id": 1,
            "name": "Hotel",
            "createdAt": "2024-02-27T09:20:36.587Z",
            "updatedAt": "2024-02-27T09:20:36.587Z"
        },
        {
            "id": 2,
            "name": "Cottage",
            "createdAt": "2024-02-27T09:20:36.587Z",
            "updatedAt": "2024-02-27T09:20:36.587Z"
        },
        {
            "id": 3,
            "name": "Villa",
            "createdAt": "2024-02-27T09:20:36.587Z",
            "updatedAt": "2024-02-27T09:20:36.587Z"
        },
        ...,
]
```

_Response (400 - Bad Request)_
```json
{
  "message": ""
}
```

&nbsp;

## 10. - POST /types

Description:
- Add new type to database

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
  "name": "string",
}
```

_Response (201 - Created)_
```json
{
    "id": 17,
    "name": "new two",
    "updatedAt": "2024-03-05T04:09:06.422Z",
    "createdAt": "2024-03-05T04:09:06.422Z"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Name is Required"
}
```

&nbsp;

## 11. - PUT /types/id

Description:
- Update type based from id params from database

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
}
```

_Response (201 - Created)_
```json
{
    "id": 17,
    "name": "new to strike back",
    "createdAt": "2024-03-05T04:09:06.422Z",
    "updatedAt": "2024-03-05T04:13:11.117Z"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Name is Required"
}
```

&nbsp;

## 12. - DELETE /types/id

Description:
- Delete type based from id params from database

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
}
```

_Response (201 - Created)_
```json
{
  "message": "<entity name> success to delete"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Name is Required"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Data not found"
}
```

&nbsp;

## 13. - GET /publics

Description:
- Get all public lodgings from database

Request:
- (no request)

_Response (200 - Ok)_
```json
[
  {
        "id": 1,
        "name": "namenya",
        "facility": "ini fasilitasnya",
        "roomCapacity": 4,
        "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "location": "surabayalah",
        "price": 1200,
        "typeId": 2,
        "authorId": 3,
        "createdAt": "2024-02-27T09:38:43.063Z",
        "updatedAt": "2024-02-27T09:38:43.063Z",
        "User": {
            "id": 3,
            "username": "cust1",
            "email": "1cust@mail.com",
            "password": "$2a$10$s5sS0yhbJFWjJV425FV7oujLDLGP/hq1e.NVarpob9U0Z3imEY/O2",
            "role": "Staff",
            "phoneNumber": "12345123",
            "address": "Jl. customer no 123",
            "createdAt": "2024-02-27T09:37:24.645Z",
            "updatedAt": "2024-02-27T09:37:24.645Z"
        }
    },
    {
        "id": 2,
        "name": "namenya lagi",
        "facility": "ini fasilitasnya bang",
        "roomCapacity": 5,
        "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "location": "surabayalah",
        "price": 1500,
        "typeId": 3,
        "authorId": 3,
        "createdAt": "2024-02-27T09:39:22.184Z",
        "updatedAt": "2024-02-27T09:39:22.184Z",
        "User": {
            "id": 3,
            "username": "cust1",
            "email": "1cust@mail.com",
            "password": "$2a$10$s5sS0yhbJFWjJV425FV7oujLDLGP/hq1e.NVarpob9U0Z3imEY/O2",
            "role": "Staff",
            "phoneNumber": "12345123",
            "address": "Jl. customer no 123",
            "createdAt": "2024-02-27T09:37:24.645Z",
            "updatedAt": "2024-02-27T09:37:24.645Z"
        }
    },
  ...,
]
```

&nbsp;

## 14. - GET /publics/:id

Description:
- Get public lodgings based from id params from database

Request:
- params:
```json
{
  "id": "integer (required)"
}
```

_Response (200 - Ok)_
```json
{
    "id": 6,
    "name": "gass lah  x",
    "facility": "ini fasilitasnya bang",
    "roomCapacity": 3,
    "imgUrl": "https://images.unsplash.com/photo-1708923738047-7a4a98affb5a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "location": "surabayalah",
    "price": 1500,
    "typeId": 3,
    "authorId": 1,
    "createdAt": "2024-02-27T09:52:45.961Z",
    "updatedAt": "2024-02-27T09:52:45.961Z"
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
