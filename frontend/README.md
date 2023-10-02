# Development Set Up
## Frontend
### Repo Setup
- clone the repo using ```git clone https://github.com/JoelJaison/cram.git```
- run ```cd cram/frontend``` to go into the frontend directory
- run ```npm install``` to install all third party packages
- to start the dev server, run npm start

### Editing Your Page
- Let's say I'm working on the login page and I want to add a button
- Currently, all source files are located in ```frontend/src/components```
- Since I'm doing login, the Javascript file I need to modify is in the Login folder, Login.js
- I can go in and edit the file using my text editor
- After editing, if I want to see the changes, run ```npm start```
- This will run the react page in your browser
- If I want to see the login page, I can go to http://localhost:3000/login
	- If you're working on the user page, you need to type in http://localhost:3000/user/1234
	- If you're working on the chatbot page, you need to type in http://localhost:3000/chat/1234/1234 
- After making changes, save and refresh the page and you can see your updates
