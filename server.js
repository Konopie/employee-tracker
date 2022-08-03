const db = require('./db/connection');
const inquirer = require('inquirer');

const promptUser = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: ['View All Employees', 'Add Employee', 'Update Employee', 'Remove Employee',
        'View All Roles', 'Add Role','Remove Role', 'View All Departments', 'Add Department','Remove Department', 'Quit']
        }
    ])
    .then(res => {
        if (res.action === 'View All Employees') {
            db.query('SELECT * FROM employee;', (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.table(data)
                return promptUser();
            })
        }
        if (res.action === 'Add Employee') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: 'What is their name?'
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: "What is their last name?"
                },
                {
                    type: 'input',
                    name: 'roles_id',
                    message: 'What is their role id?'
                },
                {
                    type: 'input',
                    name: 'manager_id',
                    message: 'What is their managers id? (if applicable)'
                }
            ])
            .then(res => {
            db.query(`INSERT INTO employee
            (first_name, last_name, roles_id, manager_id)
            VALUES 
            ('${res.first_name}', '${res.last_name}', ${res.roles_id}, ${res.manager_id});`, (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log(`Inserted ${res.first_name} succesfully`)
                return promptUser();
            })})
        }
        if (res.action === 'Update Employee') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their id?'
                },
                {
                    type: 'input',
                    name: 'role_id',
                    message: 'Whats the role id you want to change theirs to?'
                }
            ]).then(res => {
            db.query(`UPDATE employee SET roles_id=${res.role_id} WHERE id=${res.id};`, (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log(`Update Success`)
                return promptUser();
            })})
        }
        if (res.action === 'Remove Employee') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'id',
                    message: 'What is their id?'
                }
            ]).then(res => {
            db.query(`DELETE FROM employee WHERE id=${res.id};`, (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log('Remove Success')
                return promptUser();
            })})
        }
        if (res.action === 'View All Roles') {
            db.query('SELECT * FROM roles;', (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.table(data)
                return promptUser();
            })
        }
        if (res.action === 'Add Role') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'title',
                    message: 'What is the title?'
                },
                {
                    type: 'input',
                    name: 'department_id',
                    message: 'Whats the department id?'
                },
                {
                    type: 'input',
                    name: 'salary',
                    message: 'What is the salary?'
                }
            ]).then(res => {
            db.query(`INSERT INTO roles (title, departments_id, salary) VALUES ('${res.title}', ${res.department_id}, ${res.salary});`, (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log(`add ${res.title} Success`)
                return promptUser();
            })})}
            if (res.action === 'Remove Role') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the role id?'
                    }
                ]).then(res => {
                db.query(`DELETE FROM roles WHERE id=${res.id};`, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Remove Success')
                    return promptUser();
                })})}
        if (res.action === 'View All Departments') {
            db.query('SELECT * FROM Departments;', (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.table(data)
                return promptUser();
            })
        }
        if (res.action === 'Add Department') {
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'What is the name?'
                }
            ]).then(res => {
            db.query(`INSERT INTO Departments
            (name)
        VALUES ('${res.name}');`, (err, data) => {
                if (err) {
                    console.log(err);
                }
                console.log(`add ${res.name} Success`)
                return promptUser();
            })})}
            if (res.action === 'Remove Department') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the department id?'
                    }
                ]).then(res => {
                db.query(`DELETE FROM departments WHERE id=${res.id};`, (err, data) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log('Remove Success')
                    return promptUser();
                })})}
            if ( res.action === 'Quit') {
                db.query('quit', ()=> {
                    console.log('goodbye')
                })
            }
    })
}


// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    promptUser();
  });
  