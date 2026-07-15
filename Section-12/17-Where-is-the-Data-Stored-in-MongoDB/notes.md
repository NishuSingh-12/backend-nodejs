Where is the Data Stored in MongoDB?
MongoDB stores data on disk in BSON format.
The data is stored inside database files managed by the MongoDB Server (mongod).
By default, MongoDB stores collections and documents in a data directory.
Default Data Location

Windows

C:\data\db

Linux/macOS

/data/db
Flow of Data Storage
Database
↓
Collection
↓
Document
↓
Stored on Disk as BSON
How to Check the Database Path
db.serverCmdLineOpts()

Look for the dbPath value.

Quick Revision
MongoDB Stores Data → On Disk

Format → BSON (Binary JSON)

Managed By → mongod (MongoDB Server)

Default Path:
Windows → C:\data\db
Linux/macOS → /data/db

Keyword: MongoDB → BSON → Disk Storage → Managed by mongod ✅
