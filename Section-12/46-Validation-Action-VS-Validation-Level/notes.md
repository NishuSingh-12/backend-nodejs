- Validation Action vs Validation Level
  When using $jsonSchema validation, MongoDB provides two important options:
  validationAction → What should MongoDB do when validation fails?

validationLevel → Which documents should MongoDB validate?

1. validationAction

Determines MongoDB's behavior when a document violates validation rules.

error (Default)
validationAction: "error"
Rejects invalid documents.
Insert/Update operation fails.
Example
Invalid Document
↓
Error
↓
Not Inserted
warn
validationAction: "warn"
Allows invalid documents.
Shows a warning in the logs.
Example
Invalid Document
↓
Warning
↓
Inserted 2. validationLevel

Determines which documents are validated.

strict (Default)
validationLevel: "strict"
Validates all inserts and updates.
Every document must follow the schema.
moderate
validationLevel: "moderate"
New documents must follow validation rules.
Existing invalid documents can still be updated.
Example
db.createCollection("users", {
validator: {
$jsonSchema: {
bsonType: "object",
required: ["name"]
}
},
validationAction: "error",
validationLevel: "strict"
})

Quick Revision
validationAction

error → Reject Invalid Document
warn → Allow + Warning

validationLevel

strict → Validate All Documents
moderate → Validate New Documents
Easy Memory Trick
Action = What to Do?

error → Stop
warn → Warn

Level = How Much to Check?

strict → Check Everything
moderate → Check New Documents

Q. Difference between validationAction and validationLevel?

A.

validationAction decides what happens when validation fails (error or warn).
validationLevel decides which documents are validated (strict or moderate). ✅
