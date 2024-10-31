#PetStore app
This is an app for pets

#How to install
Open a terminal
Run the comand line git clone 'https://github.com/VirginiaZambudio770/petStore.git'
Go to the main folder
Run npm install
Run npm install testcafe@latest --save-dev

#Technologies used to build it
Javascript
Node.js
Testcafe
Dotenv

#Folder structure:
pom/data for Constants file
pom/tests for all the test cases 
pom/pages for all the pages
.env for restricted data

#How to run it
Run npx testcafe firefox pom/tests/LoginTests.js
or use the following scripts:
npm run test:smoke to run smoke tests
npm run test:regression to run regression tests


