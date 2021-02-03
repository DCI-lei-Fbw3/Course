Express - Exercise1: # Create a basic express application with the following routes:

# Exercise 1

1- / --> send "Welcome to my fancy website ;)" to the client
2- "/message" --> send your favorite quote message (anything)
3- "/profile" --> send your name
4- "/exit" --> send "Bye Bye...!"

# instructions

1. cd yourProjectFolder
2. npm init -y
3. touch/cat index.js
4. npm i -D nodemon
5. > package.json "scripts": { "dev": "nodemon ./index.js" },
6. npm i express Then write your code!

# Exercise 2

change your previous exercise so that:

1- On the homepage (i.e., "/") --> load an HTML file, containing 4 fancy (bootstrap preferred) buttons (Profile, Message, Exist, Home)
2- when you click on the buttons you will be redirected to the correspond route (e.g., Message Button --> "http://localhost/message")
3- then you can either show the message via (send/ write) or load another HTML file containing the message
