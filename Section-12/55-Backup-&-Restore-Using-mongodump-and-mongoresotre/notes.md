- Backup & Restore Using mongodump and mongorestore

MongoDB provides two command-line tools:

mongodump → Create a backup of MongoDB data.
mongorestore → Restore data from a backup.

1. mongodump (Backup)
   Used to create a backup of databases, collections, and documents.
   Stores data in BSON files.
   Backup Entire Database
   mongodump --db collegeDB

Use: Creates a backup of collegeDB.

Backup All Databases
mongodump

Use: Creates backups of all databases.

Backup to a Specific Folder
mongodump --db collegeDB --out ./backup

Use: Saves the backup inside the backup folder.

2. mongorestore (Restore)
   Used to restore data from a backup created by mongodump.
   Restore Database
   mongorestore ./backup

Use: Restores data from the backup folder.

Restore a Specific Database
mongorestore --db collegeDB ./backup/collegeDB

Use: Restores only collegeDB.

Backup & Restore Flow
MongoDB Database
↓
mongodump
↓
Backup Files
↓
mongorestore
↓
MongoDB Database
Why Use Backup?
Protect against accidental deletion.
Recover data after crashes.
Migrate data to another server.

Quick Revision
Backup

mongodump --db collegeDB

Restore

mongorestore ./backup

Tools

mongodump → Backup
mongorestore → Restore

Q. What is the difference between mongodump and mongorestore?

A.

mongodump creates a backup of MongoDB data.
mongorestore restores data from that backup.
One-Line Revision

mongodump = Backup MongoDB data, mongorestore = Restore MongoDB data. ✅
