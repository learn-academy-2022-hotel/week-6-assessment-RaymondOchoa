# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort that has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The issue of forgetting to add a foreign key can be solved by 
adding a column using the rails generate migrate command to further edit the database.

Researched answer: This is correct but only partially, it is missing the next few steps that follow the rails generate migrate command. Once the rails generate migrate add_cohort_id command has been ran we need to run a db:migrate to make the changes happen and create a new column that holds the id (the foreign key).

2. Which RESTful routes must always be passed params? Why?

Your answer: The Show, Edit, Update, and Delete RESTFUL routes must always be passed params because they must have an id key to identify them so that the actions are handed down to the proper values.

Researched answer: The RESTful routes that must always be passed params are show, edit, update, and delete. These routes have to be passed params so that the actions are being acted onto the corresponding keys. For example if you have a model called Login, each account with log in information will have a unique id attached to it. If you wanted to delete a specific account you would have to access it by referencing that id. 

3. Name three rails generator commands. What is created by each?

Your answer: $ rails generate model info:string 
- This will create a new model which is basically its a table that will have colums with information based on the data types and information placed in them after the rails generate model command.
             $ rails generate controller info:string
- This command will create a new controller which is responsible for handling the routing of the rails app. 
Currently these commands are the only ones i can recall, my researched answer will contain a third command.

Researched answer:
$ rails generate migration migration_name
- This command will create a migration, this allows you to edit the database by editing/adding a colum or the data in it.

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students
- action performed: displays a list of all students
- controller method: index

action: "POST" location: /students
- action performed: creates a new instance of a student 
- controller method: create

action: "GET" location: /students/new
- action performed: returns an html form for creating a new student 
- controller method: new

action: "GET" location: /students/2
- action performed: displays a specific student
- controller method: show

action: "GET" location: /students/2/edit
- action performed: returns an html form for editing a specific student
- controller method: edit 

action: "PATCH" location: /students/2
- action performed: updates a specific student
- controller method: update

action: "DELETE" location: /students/2
- action performed: deletes a specific student 
- controller method: destroy

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. Read more about [user stories](https://www.atlassian.com/agile/project-management/user-stories).
- As a user i should be able to see all my tasks in a list 
- As a user i should be able to check off tasks once i complete them 
- As a user i should be able to delete tasks
- As a user i should be able to update/edit tasks 
- As a user i should be able to organize tasks by priority 
- As a user i should be able to click on a task a reveal a description of the task 
- As a user i should be able to create a new task 
- As a user i should be able to create a new list
- As a user i should be able to create a folder that can hold other tasks 
- As a user i should be able to share my list with others