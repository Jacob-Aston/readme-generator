# Town Crier   ![License badge](https://img.shields.io/badge/License-MIT-green)

## Description

Town Crier is a localized chat app where people are put into chatrooms with people from their city. You can post on your town page or you can open someones post to read or make a comment. This app features a session cookie for login authorization. Bootstrap for css. Socket.io for post notifications. And a database for post and user data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
    
## Installation

To set up a local server using a mysql database then follow these steps. You can also find our page live at: https://town-crier-app.herokuapp.com/.

For now you put your mysql database info into the .env file. Then open a terminal on server.js to run an "npm i" command. Open your mysql shell and run "SOURCE db/schema.sql". This sets up the database. Exit the shell and run "node seeds/index.js" in your terminal to seed your database. Finally enter "npm start" into your terminal to start the server. Open your browser and go to "localhost:3000/login" to find the login page in order to access the app.

## Usage

Click create new post to add a post to your town page. Or click on a post to open the post and see the comments. Click the create new comment button to add a comment to the post. To get back to the town page use your browsers back arrow until the town page comes back. You will be logged out automatically after 24 hours.

## License

This project uses a MIT license.

## Contributing

THE BOYS

## Tests



## Questions

Github profile page: [Jacob-Aston](https://github.com/Jacob-Aston)

If you have further questions feel free to send an email to: 

---