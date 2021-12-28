# Fullstack EchoBot Assignment

Here is the Fullstack Chatbot which includes two things 
 1. Room without echo
 2. Room with echo


### Backend

The backend is an API that contains the logic for the Chatbot. It allows one to send a request containing a message.

1. It will help multiples users to join the room and communicate
2. It will respond by echoing that message back as the response

I am using socket.io and express.
Using Nodes.js as language.


### Frontend

I have used ReactJS for Frontend

Chat widget that will allow the user to join room with echo OR without echo.

You can see below components:
- a **form** with :
    - a **text input fields** for users to enter their username and room id
    - a **Join Room button** for users to enter the room without Echo
    - a **Join Echo Room button** for users to enter the room with Echo
- a **chat window** with :
    - a **text input field** for users to enter their message
    - a **send button** allowing users to send the message to the Room
    - a **list of messages**, printing historical messages from all users in the room and also echo message.



### Instrution to run the project 
Please refer README.md file inside client and server folders.


