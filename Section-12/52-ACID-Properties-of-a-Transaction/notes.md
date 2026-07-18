ACID Properties of a Transaction

ACID is a set of properties that ensures database transactions are reliable and maintain data integrity.

A - Atomicity
A transaction is treated as a single unit.
Either all operations succeed or all fail.
Example
Transfer ₹1000

Account A → -1000 ✓
Account B → +1000 ✗

Result → Rollback

Meaning: No partial changes are allowed.

C - Consistency
The database must remain in a valid state before and after a transaction.
Example
Before Transfer

A = 5000
B = 2000
Total = 7000

After Transfer

A = 4000
B = 3000
Total = 7000

Meaning: Data remains correct and consistent.

I - Isolation
Multiple transactions should not interfere with each other.
Example
User 1 → Transfer Money
User 2 → Transfer Money

Both transactions work independently.

Meaning: One transaction should not see incomplete changes from another transaction.

D - Durability
Once a transaction is committed, the data is permanently saved.
Example
Transaction Committed ✓

Server Crashes ✗

Data Still Exists ✓

Meaning: Committed data is not lost.

Quick Revision
A → Atomicity
All Success or All Fail

C → Consistency
Data Remains Valid

I → Isolation
Transactions Don't Interfere

D → Durability
Committed Data is Permanent
Easy Memory Trick
A → All or Nothing
C → Correct Data
I → Independent Transactions
D → Data Stays Saved

Q. What are the ACID properties of a transaction?

A.

Atomicity
Consistency
Isolation
Durability

These properties guarantee reliable and safe database transactions. ✅
