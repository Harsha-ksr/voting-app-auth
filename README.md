# voting-app

This is a simple voting application that is used to save questions and allow diverse concurrent users to vote on them.
 
The main objective of this application is to allow a
diverse group of users to define questions to vote on, vote yes or no on the questions, and view the
results of the votes. 

The UI is a single-page application developed using Angular. 

The middleware layer is implemented using Javascript to create a mock server with mock APIs to interact with this voting application.

The application by defaults starts at `http://localhost:4200`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.3.

This is a mock-server used by voting application to save/retrieve data.
This server needs to be up and running before running the actual voting-application.

## Steps To Run the Mock Server

Open terminal and navigate to `mock-server` folder.

Run `npm install` and make sure all dependent packages are installed.

Once the project is loaded, run `npm run mock:server` to start up the server.

The server starts on localhost port 3000.

## Test the APIs

Use Postman or any other testing tool to test the APIs. Below are the Curl commands provided which you can import into postman and run.

### Get Results By question:
`curl --location 'http://localhost:3000/api/getResultsByQuestion'`

### Cast Vote
`curl --location 'http://localhost:3000/api/castVote' \
--header 'Content-Type: application/json' \
--data '{
    "votedQuestions": [
        {
            "question": "Who is gonna win world-war 3?",
            "userId": "mkoride",
            "vote": "Yes"
        }
    ]
}'`

### Get All Questions
`curl --location 'http://localhost:3000/api/questions'`

### Create a question
`curl --location 'http://localhost:3000/api/createQuestion' \
--header 'Content-Type: application/json' \
--data '{
    "question": "This is a test questiosssn"
}'`


## Steps to run the voting application

Make sure `mock-server` is up and running.

Go to the `voting-app` folder path and run `npm install` to make sure all dependencies are installed.

Start the application by running `ng serve`
