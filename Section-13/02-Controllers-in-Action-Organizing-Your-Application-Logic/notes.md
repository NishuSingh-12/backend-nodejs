- Controllers in Action: Organizing Your Application Logic

  Definition
  A Controller is a part of the MVC architecture that handles user requests, processes application logic, communicates with the Model, and sends a response to the View or client.

Controller = Request Handler + Application Logic

Responsibilities of a Controller
Receives client requests.
Calls the Model to access data.
Processes business logic.
Sends the response to the client.
Why Use Controllers?
Keeps routes clean.
Separates business logic from routing.
Makes code reusable and easier to maintain.
Improves project structure.
Without Controller
Route → Business Logic → Database

Everything is written inside the route, making the code difficult to manage.

With Controller
Route
↓
Controller
↓
Model
↓
Database

Routes only define the URL, while Controllers handle the logic.

Example
// Route
router.get("/users", getUsers);
// Controller
function getUsers(req, res) {
// Fetch users from database
res.send("Users List");
}
Advantages
Clean code
Better code organization
Reusable logic
Easy maintenance
Easier testing

Q1. What is a Controller in MVC?
Ans: A Controller handles client requests, interacts with the Model, and returns the response.

Q2. Why do we use Controllers?
Ans: To separate application logic from routes, making the code clean and maintainable.

Q3. Does a Controller communicate directly with the database?
Ans: No. It communicates with the Model, and the Model interacts with the database.

Revision (10 Seconds)
Controller
• Handles Requests
• Contains Business Logic
• Calls Model
• Sends Response

Flow:
Route → Controller → Model → Database
