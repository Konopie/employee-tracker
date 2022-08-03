INSERT INTO departments
    (name)
VALUES 
    ('Sales'),
    ('Legal'),
    ('Engineering'),
    ('Finance');

INSERT INTO roles
    (title, departments_id, salary)
VALUES
    ('Sales Lead', 1, 100000),
    ('Salesperson', 1, 80000),
    ('Lead Engineer', 3, 150000),
    ('Software Engineer', 3, 120000),
    ('Account Manager', 4, 160000),
    ('Accountant', 4, 125000),
    ('Legal Team Lead', 2, 250000),
    ('Lawyer', 2, 190000);

INSERT INTO employee
    (first_name, last_name, roles_id, manager_id)
VALUES
    ('John', 'Doe', 1, null),
    ('Mike','Hunt', 2, 1),
    ('Harry', 'Balsich', 3, null),
    ('Mike', 'Oxlong', 4, 3),
    ('Anita', 'Dickens', 5, null),
    ('Hugh', 'Janus', 6, 5),
    ('Jenny', 'Tulworts', 7, null),
    ('Neil', 'Anblomi', 8, 7);



