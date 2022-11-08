# TestCafé - E2E Suite

TestCafe frees you from the need to insert manual timeouts and use cumbersome boilerplate expressions. You’ll spend less time tracking down annoying issues and more time doing what matters most.

Open source documentation: [TestCafé](https://testcafe.io/)

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

   Update with your information and validate correct URL used locally, consider next base example:

   `URL_TESTPAGE=`
   `USER_PAGE=`
   `PASSWORD=`

4. Open the .env file and add the next variables. In BASE_URL add the home page url, in USER_SUCCESS and PASSWORD_SUCCESS add a valid email and password to login successfully in the todoist application:

   `BASE_URL=https://baseurl.com/`

   `USER_SUCCESS=validuser@email.com`

   `PASSWORD_SUCCESS=validpassword`

## Run the Test Cases Scripts:

5. Open the terminal and add the next commands to run the test scripts:

   `npm test` : run existing test scripts