# teamgenerator

## lib
- base class Employee constructs for name, id, email, and title... and returns these values with "get" functions
- subclasses Engineer, Intern, and Manager extend Employee class, add unique properties, and override getRole()
- all properties designed specifically to pass provided tests

## templates
- engineer/intern/managerhtml files all create unique objects using our subclasses defined in /lib/ and data passed in from inquirer prompts in app.js. they then generate bootstrap "card" html elements (color coded based on the employee's role)
- createHTML triggers the engineer/intern/managerhtml functionality and puts these "cards" together in an array, then imports this array into a HTML file construct, then writes the final html file

## app.js
- init() starts the application by triggering inquirer prompts (unique for manager vs. intern/engineer)
- in addition to getting needed data, getEmployeeInfo() combines both the manager and employees created into an array of objects
- this array is then passed to createHTML
