const Intern = require("../lib/./intern");

function createIntern(name, id, email, school){
  let newIntern = new Intern(name, id, email, school);
  return (
    `<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">Intern</div>
        <div class="card-body">
            <h5 class="card-title text-center">${newIntern.getName()}</h5>
            <p class="card-text">ID: ${newIntern.getId()}</p>
            <p class="card-text">Email: ${newIntern.getEmail()}</p>
            <p class="card-text">School: ${newIntern.getSchool()}</p>
        </div>
    </div>`
  );
}

module.exports = createIntern