- Implementing Transactions in MongoDB (Node.js)
  MongoDB transactions are used when multiple operations must succeed together.
  If any operation fails, all changes are rolled back.

  Steps

1. Start Session
2. Start Transaction
3. Perform Operations
4. Commit Transaction
5. If Error → Abort Transaction
6. End Session
   Example
   const session = client.startSession();

try {
session.startTransaction();

await db.collection("accounts").updateOne(
{ name: "A" },
{ $inc: { balance: -1000 } },
{ session }
);

await db.collection("accounts").updateOne(
{ name: "B" },
{ $inc: { balance: 1000 } },
{ session }
);

await session.commitTransaction();

console.log("Transaction Successful");
} catch (error) {
await session.abortTransaction();

console.log("Transaction Failed");
} finally {
await session.endSession();
}
What Happens?
Success Case
Account A → -1000 ✓
Account B → +1000 ✓

Commit Transaction

Changes are saved.

Failure Case
Account A → -1000 ✓
Account B → Error ✗

Abort Transaction
Rollback Changes

No changes are saved.

Important Methods
Method Purpose
startSession() Create a session
startTransaction() Begin transaction
commitTransaction() Save changes
abortTransaction() Rollback changes
endSession() Close session

Quick Revision
Transaction Code Flow

startSession()
↓
startTransaction()
↓
Database Operations
↓
commitTransaction()

Error?
↓
abortTransaction()

endSession()

Q. Which methods are used to implement transactions in MongoDB?

A.

startSession()
startTransaction()
commitTransaction()
abortTransaction()
endSession()

✅ Remember: Transactions require a session, and all operations inside the transaction must use that same session.
