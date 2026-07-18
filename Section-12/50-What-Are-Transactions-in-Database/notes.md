- What Are Transactions in Database?
  A Transaction is a group of database operations that are executed as a single unit.
  Either all operations succeed or all operations fail.
  This ensures data remains consistent.

Example: Bank Transfer

Suppose ₹1000 is transferred from Account A to Account B.

Step 1
Account A: 5000 → 4000
Step 2
Account B: 2000 → 3000

Both steps must succeed.

Problem
Account A: 5000 → 4000 ✓

Account B: 2000 → 3000 ✗

Money is lost!

Solution: Transaction
Step 1 ✓
Step 2 ✗

Rollback Step 1

Final:

Account A: 5000
Account B: 2000

No data inconsistency.

Transaction Properties (ACID)
A - Atomicity
All operations succeed or all fail.
Transfer Money

Debit ✓
Credit ✗

Result → Rollback
C - Consistency
Data remains valid before and after the transaction.
I - Isolation
Multiple transactions do not interfere with each other.
D - Durability
Once committed, data is permanently saved.
MongoDB Transaction Flow
Start Transaction
↓
Perform Operations
↓
Commit Transaction
↓
Save Changes

If an error occurs:

Start Transaction
↓
Error
↓
Abort Transaction
↓
Rollback Changes
Why Use Transactions?
Bank transfers
Payment systems
E-commerce orders
Inventory management

Anywhere multiple operations must succeed together.

Quick Revision
Transaction

All Success → Commit

Any Failure → Rollback

ACID

A → Atomicity
C → Consistency
I → Isolation
D → Durability

Q. What is a transaction?

A. A transaction is a set of database operations that are executed together. Either all operations succeed (commit) or all are reverted (rollback). ✅
