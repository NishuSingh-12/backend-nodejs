- Enabling Authentication in a MongoDB Replica Set
  In a Replica Set, all MongoDB servers must authenticate each other.
  This is done using a Keyfile.
  Client users also authenticate using a username and password.
  - Why Enable Authentication?
    Secure the Replica Set.
    Prevent unauthorized access.
    Allow only trusted replica set members to communicate.
    Steps to Enable Authentication

1. Create a Keyfile
   openssl rand -base64 756 > mongodb-keyfile

Use: Creates a secret key shared by all replica set members.

2. Set File Permission (Linux/macOS)
   chmod 400 mongodb-keyfile

Use: Only the owner can read the keyfile.

3. Add Keyfile to mongod.cfg
   security:
   authorization: enabled
   keyFile: /path/to/mongodb-keyfile

Use:

authorization: enabled → Enables authentication.
keyFile → Allows replica set members to authenticate each other. 4. Restart MongoDB

Restart every replica set member after updating the configuration.

5. Create an Admin User
   use admin

db.createUser({
user: "admin",
pwd: "password123",
roles: [
{ role: "root", db: "admin" }
]
}) 6. Connect with Authentication
mongosh -u admin -p password123 --authenticationDatabase admin
Authentication Flow
Client
↓
Username + Password
↓
Primary MongoDB
↓
Keyfile Authentication
↓
Secondary Members

Quick Revision
Replica Set Authentication

1. Create Keyfile
2. Add keyFile in mongod.cfg
3. authorization: enabled
4. Restart MongoDB
5. Create Admin User
6. Login with Username & Password
   Easy Memory Trick
   Keyfile → Server-to-Server Authentication

Username + Password → Client-to-Server Authentication

Q. Why is a keyfile required in a MongoDB Replica Set?

A. A keyfile allows replica set members to authenticate each other securely, preventing unauthorized servers from joining the replica set. ✅
