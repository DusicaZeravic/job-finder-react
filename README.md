# Job Finder App

[DEMO](http://DusicaZeravic.github.io/job-finder-react)

 The Job Finder App is an application that was created as a final project within the ITBootcamp course. The application is a simple version of the job search portal. It is possible to log in and register new users. Logged-in users can view jobs, while admin has the ability to add a new job, as well as delete existing ones.

## Technologies & Tools
    - JavaScript
    - React - 17.0.1
        - react-router-dom - 5.2.0.
        - styled components - 5.2.1
        - react-redux - 7.2.4
    - Node.js
        - Express.js
    - MongoDB
        - Mongoose ODM
    - Redux - 4.1.0
    - axios - 0.21.1
    - Git
    - VSCode
    - Heroku

## Instructions on how to run it on your computer:

Install following:

- node (version 12.19.0 or higher) - [Download node](https://nodejs.org/en/)
- npm - node package manager (version 6.14.8 or higher)

Next, clone following git repository (`git clone ` https://github.com/DusicaZeravic/job-finder-react)
* In your terminal, go to the root directory and run command: `npm install`
* Next command (in the same directory): `npm start`

Next, clone following git repository (that is server repo) (`git clone` https://github.com/DusicaZeravic/job-finder-server)
* Open new terminal and keep the prevous one running
* In this terminal, go to the root directory and run command: `npm install`
* Next command (in the same directory): `npm run dev`

## Functionalities
    - Login and Logout
    - Registration - creating new account
    - List all jobs
    - See more info about one job item
    - See info about company
    - Multiple filter
    - Create new job / delete job (only for admin)
    - Pagination - show 5 ads per page
    - Profile for every user and possibility of saving ads on users profile
