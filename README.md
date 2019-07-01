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


STRETCH ON TOP OF STRETCH

1. In your search functionality, people should be able to search for jokes by text, by the author, by the number of likes it has, and as well, they should be able to search by a built in filter. (Reference movie streaming websites, where they filter movies by Genre, or by Rating above a certain number, or below a certain number. Get Creative with it)

2. You should have a functioning `Log Out` button. Where when user presses it, user is being logged out, rather than having to go to local storage, and erase the token. (HINT: look into how to destroy the Token from local storage)

AAAAANNNNNDDD Finally!!! The toughest one of all:
3. Like/Dislike button should NOT be infinite. When an user presses a like, it should Increment once, and when they press it again, it should UNLIKE it. Same thing with the Dislike button. But here is also another trick... When an user logges out, and logs back in, that like or dislike, should be memorized by the server. So basically, logging out and loggin back in, should NOT reset the process. I've made an endpoint, for an array called `liked`, it has it's own key-value pairs, but it's empty at first. Look into it, and it should help you get this Stretch, Try to figure out what those key-value pairs be used as, and if you can't I will try to explain this as much as i can. 



API DOCUMENTATIONS:

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



