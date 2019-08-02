# Dad-Jokes-BackEnd


Minimum Viable Product

1. All the jokes should be displayed, and everyone should have an ability to view them. Whether they are registered or not.

2. User must be able to Register & Login.

3. Once Logged In, You should have a `Profile Page`, where the data for the user that is logged in, will be displayed.

4. Once Logged In, an user should have an ability to add their own joke.

5. Once Logged In, an user should have an ability to edit/delete ALL the jokes, by ANY user, as well as Like/Dislike the jokes (Once you press the like button, likes should INCREMENT, and once you press Dislike, vice-versa. For the MVP it's ok if your increment/decrement is infinite. The server sums up all the likes and dislikes, so only the total number is showing. You can NOT show the like number and dislike number separately).

6. Once Logged In, an user should have a separate page, where only the jokes that THEY posted THEMSELVES are displayed.

7. You are welcome to get as creative as you wish. Add new functionalities, I created a bunch of ENDPOINTS for you to play around with. You have a lot to play with :P


STRETCH GOALS

1. Implement a search functionality, where user can look for a joke itself, by typing part of the joke itself (could be a letter that is in the joke, could be a word, or a whole joke text).

2. On your profile page, user should be able to Edit their own user details. EXCEPT for their password. (Passwords are a little more complicated, since they are hashed, so leave that out)

3. Make it so that, before someone Logs In, there is a `Log In` button on the Nav Bar, and once someone Logs In, it switches to `Log Out` button. (You can use the same logic for most of the nav buttons if need be).

4. User must ONLY be able to edit/delete their OWN joke. They should NOT be able to edit/delete jokes that were created by other users.

5. Like/Dislike buttons should act like UpVote/DownVote buttons. For Example: Let's say you have two jokes. They both start with zero likes. Now let's say `Joke 1` is displayed above `Joke 2` by default. Now let's say `Joke 2` gets a like, it should now be displayed above `Joke 1`, because now, `Joke 2` has more likes than `Joke 1`

6. Look into "What is a difference between PATCh and PUT, and why would we use one over another. Then refractor your PUT calls to PATCH, and demonstrate the use of them in it's own unique way.


STRETCH ON TOP OF STRETCH

1. In your search functionality, people should be able to search for jokes by text, by the author, by the number of likes it has, and as well, they should be able to search by a built in filter. (Reference movie streaming websites, where they filter movies by Genre, or by Rating above a certain number, or below a certain number. Get Creative with it)

2. You should have a functioning `Log Out` button. Where when user presses it, user is being logged out, rather than having to go to local storage, and erase the token. (HINT: look into how to destroy the Token from local storage)

AAAAANNNNNDDD Finally!!! The toughest one of all:
3. Like/Dislike button should NOT be infinite. When an user presses a like, it should Increment once, and when they press it again, it should UNLIKE it. Same thing with the Dislike button. But here is also another trick... When an user logges out, and logs back in, that like or dislike, should be memorized by the server. So basically, logging out and loggin back in, should NOT reset the process. I've made an endpoint, for an array called `liked`, it has it's own key-value pairs, but it's empty at first. Look into it, and it should help you get this Stretch, Try to figure out what those key-value pairs be used as, and if you can't I will try to explain this as much as i can. 



API DOCUMENTATIONS:

==================== LOGIN && REGISTER ENDPOINTS START HERE =======================

### **Register a user**
*method url*: `/api/auth/register`

*http method*: **[POST]**

#### Body

| name           | type   | required | description                             |
| -------------- | ------ | -------- | ----------------------------------------|
| `firstName`    | String | Yes      |                                         |
| `lastName`     | String | Yes      |                                         |
| `password`     | String | Yes      |                                         |
| `email`        | String | Yes      | Must be unique/ Must include `@` symbol |

#### Example

```
{
    firstName: 'Elan',
    lastName: 'Riznis',
    email: 'elan@gmail.com',
    password: 'pass'
}
```
#### Response
##### 201 (created)


=========================================================================
### **Login a user**
*method url*: `/api/auth/login`

*http method*: **[POST]**

#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `email`        | String | Yes      | must be registered email |
| `password`     | String | Yes      |                          |


#### Example
```
  {
    email: 'elan@gmail.com',
    password: 'pass',
  }
  ```
#### Response
##### 200 (ok)

```
{
    message: 'Logged In! Your ID is 5',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJlbWFpbCI6ImJwb2x0bEBnbWFpbC5jb20iLCJpYXQiOjE1NTU5NzAyMjMsImV4cCI6MTU1NjA1NjYyM30.lWi9hhalGt2ftr4Ju_jP12dCavZgXAMwABGYPzltwr8'
}
```
##### 401 (Unauthorized)
###### Example response
  ```
 { 
 message: "Please Provide Correct Credentials"
 }
 ```


 =========================== USERS ENDPOINTS START HERE ===========================


======================================================================
### **get ALL the users information**
*method url*: `/api/users/all`

*http method*: **[GET]**
#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |

#### Response
##### 200 (ok)

###### Example response
```
[
    {
        "id": 5,
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
    {
        "id": 6,
        "email": "kimberky@gmail.com",
        "firstName": "Kimberly",
        "lastName": "Swinton",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
    {
        "id": 7,
        "email": "Stacy@gmail.com",
        "firstName": "Stacy",
        "lastName": "Williams",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
    {
        "id": 8,
        "email": "scott@gmail.com",
        "firstName": "Scott",
        "lastName": "Prins",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    }
]
```


=======================================================================================
### **get logged in user's information**
*method url*: `/api/users/individual`

*http method*: **[GET]**
#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |

#### Response
##### 200 (ok)

###### Example response
```
[
    {
        "id": 5,
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG"
    },
]
```


===================================================================================
### **get logged in user's information, with their jokes included**
*method url*: `/api/users/userWithJokes`

*http method*: **[GET]**
#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |

#### Response
##### 200 (ok)

###### Example response
```
[
    {
        "id": 5,
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG",
        jokes: [
            {
                id: 1,
                author: 'Elan Riznis',
                joke: 'Kimberky ain't funny!',
                likes: 0,
                user_id: 5
            }
        ]
    },
]
```

Keep in mind... The `jokes` property in this endpoint is an ARRAY!!!!!! It returns the user, and the jokes that BELONG to that user!


============================================================================================================
### **Edit a User Account using PUT. You do NOT need to Match IDs**
*method url*: `/api/users/updatePUT`

*http method*: **[PUT]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |
#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `name`         | String | yes      |                          |
| `lastName`     | String | yes      |                          |
| `password`     | String | yes      |                          |
| `email`        | String | yes      |                          |

#### Example
```
{
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG",
}
  ```
#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Your Profile has been sucessfully updated!"
}
```
##### 404 (Not Found)
###### Example Response
```
  {
  message: 'User with an ID of 4 does NOT exist'
  }
```

WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!


========================================================================================================================
### **Edit a User Account using PATCH. You do NOT need to Match IDs**
*method url*: `/api/users/updatePUT`

*http method*: **[PATCH]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |
#### Body

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `name`         | String | yes      |                          |
| `lastName`     | String | yes      |                          |
| `password`     | String | yes      |                          |
| `email`        | String | yes      |                          |

#### Example
```
{
        "email": "elan@gmail.com",
        "firstName": "Elan",
        "lastName": "Riznis",
        "password": "$2a$04$FgiiacNirmVECdixfj8xau8rhnRAML6OfLPCPN1UCiq3xKO9m46UG",
}
  ```
#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Your Profile has been sucessfully updated!"
}
```
##### 404 (Not Found)
###### Example Response
```
  {
  message: 'User with an ID of 4 does NOT exist'
  }
```

WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!


=================================================================================================================================
### **Delete an Account (AKA user). You do NOT need to Match IDs**
*method url*: `/api/users/delete`

*http method*: **[DELETE]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |

#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "User has been Deleted"
}
```
##### 404 (not found)

WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!



==================================== JOKES ENDPOINTS START HERE ===================================================

==================================================================================================================
### **Get All the JOKES**
*method url*: `/api/jokes`

*http method*: **[GET]**
#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | NOOOOO   | NO Token required        |

#### Response
##### 200 (ok)

###### Example response
```
[
    {
        id: 1,
        author: 'Elan Riznis',
        joke: 'Kimberly ain't funny',
        likes: 0,
        user_id: 5
    },
    {
        id: 2,
        author: 'Stacy Williams',
        joke: 'I also think Kimberly ain't funny!',
        likes: 0,
        user_id: 3
    }
]
```


===================================================================================================================
### **Get only the JOKES that belong to the currently logged in user! You do NOT have to match the IDs**
*method url*: `/api/jokes/userJokes`

*http method*: **[GET]**
#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | Web Token Required       |

#### Response
##### 200 (ok)

###### Example response
```
[
    {
        id: 1,
        author: 'Elan Riznis',
        joke: 'Kimberly ain't funny',
        likes: 0,
        user_id: 5
    }
]
```
WATCH OUT!!!! I made it so that you don't need to match the ID to edit an user, so BE CAREFUL when creating your AXIOS call!!!!!


====================================================================================================================================================
### **Add a JOKE**
*method url*: `/api/jokes/add`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | Web Token Required       |

#### Body

| name           | type    | required | description                          |
| -------------- | ------- | -------- | ------------------------------------ |
| `author`       | String  | yes      |                                      |
| `joke`         | String  | yes      |                                      |
| `likes`        | integer | yes      |                                      |
| `user_id`      | integer | yes      | Connects to the User with the same ID|

#### Example

```
{
    author: 'Elan Riznis',
    joke: 'Kimberly ain't funny!!!!!!!!!!',
    likes: 0,
    user_id: 1
}
```
#### Response
##### 201 (created)

=======================================================================================================================
### **Edit a JOKE using PUT. This time, You DOOO need to Match IDs**
*method url*: `/api/jokes/editPUT/:id`

*http method*: **[PUT]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |
#### Body

| name           | type    | required | description                          |
| -------------- | ------- | -------- | ------------------------------------ |
| `author`       | String  | yes      |                                      |
| `joke`         | String  | yes      |                                      |
| `likes`        | integer | yes      |                                      |
| `user_id`      | integer | yes      | Connects to the User with the same ID|

#### Example
```
{
    author: 'Elan Riznis',
    joke: 'Kimberly ain't funny!!!!!!!!!!',
    likes: 0,
    user_id: 1
}
  ```
#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Your Joke has been sucessfully updated!"
}
```
##### 404 (Not Found)
###### Example Response
```
  {
  message: 'User with an ID of 4 does NOT exist'
  }
```

WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

======================================================================================
### **Edit a JOKE using PATCH. This time, You DOOO need to Match IDs**
*method url*: `/api/jokes/editPATCH/:id`

*http method*: **[PATCH]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |
#### Body

| name           | type    | required | description                          |
| -------------- | ------- | -------- | ------------------------------------ |
| `author`       | String  | yes      |                                      |
| `joke`         | String  | yes      |                                      |
| `likes`        | integer | yes      |                                      |
| `user_id`      | integer | yes      | Connects to the User with the same ID|

#### Example
```
{
    author: 'Elan Riznis',
    joke: 'Kimberly ain't funny!!!!!!!!!!',
    likes: 0,
    user_id: 1
}
  ```
#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Your Joke has been sucessfully updated!"
}
```
##### 404 (Not Found)
###### Example Response
```
  {
  message: 'User with an ID of 4 does NOT exist'
  }
```

WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

===========================================================================
### **Delete a JOKE. This time, you DOOOO Need to match the IDs**
*method url*: `/api/jokes/delete/:id`

*http method*: **[DELETE]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |

#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "User has been Deleted"
}
```
##### 404 (not found)

WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!



======================= LIKED ARRAY ENDPOINTS START HERE =========================


### **Get the LIKED array**
*method url*: `/api/liked`

*http method*: **[GET]**
#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | Web Token Required       |

#### Response
##### 200 (ok)

###### Example response
```
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
```

========================================================================================
### **Creates a new object in the array**
*method url*: `/api/liked/add`

*http method*: **[POST]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | Web Token Required       |

#### Body

| name           | type    | required | description                          |
| -------------- | ------- | -------- | ------------------------------------ |
| `liked`        | boolean | yes      |                                      |
| `disliked`     | boolean | yes      |                                      |
| `user_id`      | integer | yes      | Connects to the User with the same ID|
| `joke_id`      | integer | yes      | Connects to a Joke with the same ID  |

#### Example

```
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
```
#### Response
##### 201 (created)

=====================================================================================
### **Edits the Object using PUT. You DOOO NEED to match the IDs**
*method url*: `/api/liked/editPUT/:id`

*http method*: **[PUT]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |
#### Body

| name           | type    | required | description                          |
| -------------- | ------- | -------- | ------------------------------------ |
| `liked`        | boolean | yes      |                                      |
| `disliked`     | boolean | yes      |                                      |
| `user_id`      | integer | yes      | Connects to the User with the same ID|
| `joke_id`      | integer | yes      | Connects to a Joke with the same ID  |

#### Example
```
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
  ```
#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Your Object has been sucessfully updated!"
}
```
##### 404 (Not Found)
###### Example Response
```
  {
  message: 'Table with an ID of 4 does NOT exist'
  }
```

WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

========================================================================
### **Edits the Object using PATCH. You DOOO NEED to match the IDs**
*method url*: `/api/liked/editPATCH/:id`

*http method*: **[PATCH]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |
#### Body

| name           | type    | required | description                          |
| -------------- | ------- | -------- | ------------------------------------ |
| `liked`        | boolean | yes      |                                      |
| `disliked`     | boolean | yes      |                                      |
| `user_id`      | integer | yes      | Connects to the User with the same ID|
| `joke_id`      | integer | yes      | Connects to a Joke with the same ID  |

#### Example
```
[
    {
        id: 1,
        liked: 'false',
        disliked: 'false',
        user_id: 1,
        joke_id: 7

    }
]
  ```
#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Your Object has been sucessfully updated!"
}
```
##### 404 (Not Found)
###### Example Response
```
  {
  message: 'Table with an ID of 4 does NOT exist'
  }
```

WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!

=================================================================================
### **Delete a Liked object. This time, you DOOOO Need to match the IDs**
*method url*: `/api/liked/delete/:id`

*http method*: **[DELETE]**

#### Headers

| name           | type   | required | description              |
| -------------- | ------ | -------- | ------------------------ |
| `authorization`| String | Yes      | token to Authorize user  |

#### Response
##### 200 (ok)
###### Example Response
```
{
    "message": "Table has been Deleted has been Deleted"
}
```
##### 404 (not found)

WATCH OUT!!!! This time you actually DO NEED to MATCH the IDs!!!!!!!!!!!




