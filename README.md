# Plexxis Interview Exercise

TASK: Create a simple CRUD application that does the following:

1. Retrieves employees from a REST API
2. Has API endpoints for creating, retrieving, updating and deleting employees
3. Has UI mechanisms for creating, retrieving, updating and deleting employees
4. Stores employee data using a relational database
5. Displays the employees using React-Table

Libraries used:

- toastify
- axios
- cors
- react-table
- body-parser
- nodemon
- sqlite3

STEPS:

1. As I chose to build the application from scratch using Express on the backend,
   the initial phase of the project was simply file set up and getting the server up
   and running. This was definitely the simplest phase of app construction.

2. Next I chose to initialize a relational database, in this case using SQLite3.

3. The third phase was creating our API endpoints. The GET route was simple, but
   I admittedly had some difficulty with posting and especially deleting from the
   database. I initially used a library called Knex, using it to create functions
   for manipulating table data, then exporting these functions as an object back
   to my index file. Ultimately I decided this process was unnecessarily complex
   for the actual task. It turned out that some syntax inconsistencies and improper
   data calls were the root issues. The Postman application was very useful in
   resolving request and response errors.
  
4. The fourth phase included styling a preliminary table, populating it with employee info
   and creating buttons for our CRUD operations. The toastify library was used for
   style, there were however a number of road blocks in terms of button functionality.
   At this point in the project some major bugs were introduced, such as the app being
   unable to retrieve the list of employees upon returning from the edit page, a complete
   lack of delete button functionality, and the edit page fields not populating with
   current values.

5. The final phase was integrating my existing table with React-table. This included
   react-table installation and set up, reorganizing the directory and rerouting the app
   to run through the table module on loading the home page. There had already
   been quite extensive coding of the basic table, so after learning how react-table
   functions, integrating the two seemed quite daunting. However, by logging cell data
   in the console it was easier than anticipated to integrate my existing table functions, 
   for example those for rendering colors for the assigned and color fields.

CHALLENGES:

- The major challenges in this process definitely revolved around connecting my react
  buttons to the API endpoints on the backend, most notably the DELETE endpoint. While
  I was able to POST, either through sqlitebrowser, postman or eventually on the add
  employee page without too much difficulty, the delete button had virtually no
  functionality for a good deal of the project. After extensive troubleshooting and
  research and reconfiguring of my delete function, the root of the issue turned out
  to be in the way in which I was handling my data through the useState function. It
  was actually a very simple fix which seemingly fixed everything, but it forced me
  to think very critically about what type of data I was retrieving and in what form
  at each point of application.

OUTCOME:

- I'm pleased with the functionality of the table, and was very happy to find that I
  could maintain its style despite the migration to react-table. I developed a
  strong appreciation for react-table and the potential uses its functionality offers.
  I look forward to doing a deeper dive on it as well as react hooks. I know that a firmer
  understanding of these core concepts and react on the whole will allow me to contribute 
  to more complex and rewarding projects.  

