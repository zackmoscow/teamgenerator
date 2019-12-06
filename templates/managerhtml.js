const Manager = require("../lib/./manager");

function createManager(name, id, email, officeNumber){
  let newManager = new Manager(name, id, email, officeNumber);
  return (
    `<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header text-center">Manager</div>
        <div class="card-body">
            <h5 class="card-title text-center">${newManager.getName()}</h5>
            <p class="card-text">ID: ${newManager.getId()}</p>
            <p class="card-text">Email: ${newManager.getEmail()}</p>
            <p class="card-text">Office #: ${newManager.getOfficeNumber()}</p>
        </div>
    </div>`
  );
}

module.exports = createManager