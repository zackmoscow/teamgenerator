const Engineer = require("../lib/./engineer");

function createEngineer(name, id, email, github){
  let newEngineer = new Engineer(name, id, email, github);
  return (
    `<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">Engineer</div>
        <div class="card-body">
            <h5 class="card-title text-center">${newEngineer.getName()}</h5>
            <p class="card-text">ID: ${newEngineer.getId()}</p>
            <p class="card-text">Email: ${newEngineer.getEmail()}</p>
            <p class="card-text">GitHub: ${newEngineer.getGithub()}</p>
        </div>
    </div>`
  );
}

module.exports = createEngineer