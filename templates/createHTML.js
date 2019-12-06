const fs = require('fs');
const createManager = require('./managerhtml');
const createEngineer = require('./engineerhtml');
const createIntern = require('./internhtml');

let createEmployeeHTML = (inputs) => {
  
    let employees = [];
  
    inputs.forEach((input) => {
    
        let name = input.name;
        let id = input.id;
        let email = input.email;
    
        if (input.title === 'Manager') {
            let officeNumber = input.officeNumber
            employees.push(createManager(name, id, email, officeNumber));
        } else if(input.title === 'Engineer') {
            let github = input.github;
            employees.push(createEngineer(name, id, email, github));
        } else {
            let school = input.school;
            employees.push(createIntern(name, id, email, school));
        }
    })

  return employees.join("");
};

function createHTML(inputs) {
    let content = 
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4 text-center">The Dream Team</h1>
                    <blockquote class="blockquote">
                        <p class="lead text-center">The finest collection of fearless engineers and interns, led by our beloved manager.</p>
                    </blockquote>                
                </div>
            </div>
            <div class="container container-fluid">
                <div class="card-deck">
                    ${createEmployeeHTML(inputs)}  
                </div>
            </div>
        </body>
        </html>`

    fs.writeFile("./output/index.html", content, function (err) {
        if (err) throw err;
    });
}

module.exports = createHTML
