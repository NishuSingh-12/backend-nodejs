HTTP Request Methods
GET

Definition: Used to retrieve data from the server.

GET /users

Example: Fetch all users.

Interview Answer:

GET is used to retrieve data from the server without modifying it.

POST

Definition: Used to create a new resource on the server.

POST /users

Example: Create a new user.

Interview Answer:

POST is used to send data to the server and create a new resource.

PUT

Definition: Used to completely update or replace an existing resource.

PUT /users/1

Example: Update all details of a user.

Interview Answer:

PUT is used to replace an existing resource with new data.

PATCH

Definition: Used to partially update an existing resource.

PATCH /users/1

Example: Update only the user's email or age.

Interview Answer:

PATCH is used to update specific fields of an existing resource.

DELETE

Definition: Used to remove a resource from the server.

DELETE /users/1

Example: Delete a user account.

Interview Answer:

DELETE is used to remove a resource from the server.

HEAD

Definition: Similar to GET, but returns only the response headers and not the response body.

Interview Answer:

HEAD is used to retrieve response headers without the response body.

OPTIONS

Definition: Used to discover which HTTP methods are supported by a resource.

Interview Answer:

OPTIONS returns the HTTP methods supported by a resource.

CRUD Mapping
Operation HTTP Method
Create POST
Read GET
Update PUT / PATCH
Delete DELETE
Quick Revision
GET → Retrieve Data
POST → Create Data
PUT → Replace Data
PATCH → Partial Update
DELETE → Remove Data
HEAD → Headers Only
OPTIONS → Supported Methods
Most Asked Interview Question
Difference Between PUT and PATCH

PUT

Replaces the entire resource.
Requires sending the complete updated resource.

PATCH

Updates only specific fields.
Requires sending only the fields that need to change.

Interview Answer:

PUT replaces the entire resource, whereas PATCH updates only the specified fields of a resource.
