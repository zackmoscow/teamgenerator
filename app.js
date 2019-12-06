const inquirer = require("inquirer");
const createHTML = require("./templates/createHTML")

const init = async () => {
    const inputs = await getEmployeeInfo();
    createHTML(inputs);
    console.log("It works!")
};

const getManagerInfo = async () => {
    let data;
    await inquirer.prompt([
        {
            message: "Congrats on assembling your dream team! What is the manager's name?",
            name: "name",
        },
        {
            message: "What is the manager's ID number?",
            name: "id",
        },
        {
            message: "What is the manager's email?",
            name: "email",
        },
        {
            message: "What is the manager's office number?",
            name: "officeNumber",
        },
    ])
    .then(answers => {
        answers.title = "Manager";
        data = answers;
    });
    console.log("OK, you're now ready to add some employees!");
    return data;
} 

const getEmployeeInfo = async (inputs = []) => {
  
    if (inputs.length === 0) {
        const managerData = await getManagerInfo();
        inputs.push(managerData);
    }

    const employeeQuestions = [
        {
            type:"list",
            message:"What class of employee would you like to add to your team?",
            choices: ["Engineer", "Intern"],
            name:"title",
        },
        {
            message: "What is the employee's name?",
            name: "name",
        },
        {
            message: "What is the employee's ID number?",
            name: "id",
        },
        {
            message: "What is the employee's email?",
            name: "email",
        },
        {
            message: "What is the employee's GitHub username?",
            name: "github",
            when: function( answers ) 
                {if ( answers.title == "Engineer" ) {return !!answers.title; }},
        },
        {
            message: "Where is the employee in school?",
            name: "school",
            when: function( answers ) 
                {if ( answers.title == "Intern" ) {return !!answers.title; }},
        },
        {
            type: "confirm",
            message: "Would you like to add another employee?",
            default: true,
            name: "addAnother",
        },
    ];

    const { addAnother, ...answers } = await inquirer.prompt(employeeQuestions);
    const newInputs = [...inputs, answers];
    return addAnother ? getEmployeeInfo(newInputs) : newInputs;
};

init();


