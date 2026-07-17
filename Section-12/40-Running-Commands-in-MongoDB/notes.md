Running Commands in

=> Commands are special operations used to get information about the database or perform administrative tasks.
=> They are executed using the db.runCommand() method.

Syntax
db.runCommand({
commandName: value
})
Get Database Information
db.runCommand({
dbStats: 1
})

Use: Shows database statistics such as collections, documents, and storage size.

Ping the Server
db.runCommand({
ping: 1
})

Use: Checks whether the MongoDB server is running.

Output
{
ok: 1
}
Get Server Status
db.runCommand({
serverStatus: 1
})

Use: Displays information about the MongoDB server.

Why Use Commands?
Check database status.
Monitor server health.
Retrieve statistics and configuration details.
server.

Quick Revision
Run Command

db.runCommand({...})

Common Commands

dbStats → Database Statistics
ping → Check Server
serverStatus → Server Information
Most Used Examples
db.runCommand({ ping: 1 })

Check if MongoDB is running.

db.runCommand({ dbStats: 1 })

Get database statistics.

Remember
CRUD Operations → Work with Documents

runCommand() → Work with Database/Server

✅ Keyword: db.runCommand() = Execute MongoDB administrative commands.
