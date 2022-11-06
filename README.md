# TestCafe-Suite

## Pre-Conditions:

- [Install Node.js](https://nodejs.org/en/download/current/)
- [Install Git](https://git-scm.com/downloads)

## Set Up the Project:

1. Clone the project:

   `git clone https://github.com/carlos-cerv/TestCafe-Suite.git`

2. Open the project and run the next command in the terminal to install the libraries from package.json:

   `npm i`

3. In the root folder create a new file with the next name:

   `.env`

4. Open the .env file and add the next variables. In BASE_URL add the home page url, in USER_SUCCESS and PASSWORD_SUCCESS add a valid email and password to login successfully in the todoist application:

   `BASE_URL=https://baseurl.com/`

   `USER_SUCCESS=validuser@email.com`

   `PASSWORD_SUCCESS=validpassword`

## Run the Test Cases Scripts:

5. Open the terminal and add the next commands to run the test scripts:

   `npm test` : run existing test scripts