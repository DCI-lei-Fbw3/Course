## Instructions for students:

### Express Server
Our express server example does not do much at all. So it's time to change this. In the first step we want to have the following endpoints:

`/posts` -> returns all posts
`/users` -> returns all users

There is a database.json file in this directory with the data you have to use. But instead of reading the file directly with the fs module we want to use Lowdb for this job.
See [Lowdb Documentation](https://github.com/typicode/lowdb) for further instructions on how to implement it and read from the database.


**Bonuses**

- We not only want to recieve all posts at once but only one (identified by its id) when we request e.g. /posts/1. How can we do this?

- You also have some comments for the posts in the database file. Can you include these in your response for a single post? You must not change the database itself.

- Every post is linked to an author. Let's make sure they get the credits they deserve for their posts by including the name and email address in your single post response.


### Rules

-   This is an individual assignment.
-   Use **Git properly**
