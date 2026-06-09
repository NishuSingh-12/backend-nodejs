Transferring Files Using SCP
What is SCP?
SCP = Secure Copy Protocol

SCP is used to securely transfer files between computers using SSH.

Basic Syntax
Copy a File to a Remote Machine
scp file.txt username@ip:/destination/path

Example:

scp notes.txt nishu@192.168.1.10:/home/nishu
Copy a File from a Remote Machine
scp username@ip:/path/file.txt .

Example:

scp nishu@192.168.1.10:/home/nishu/notes.txt .

The . means the current directory.

Copy a Directory
scp -r project username@ip:/destination/path

Example:

scp -r project nishu@192.168.1.10:/home/nishu

-r stands for recursive copy.

SCP Using Localhost

Since you already have SSH running:

scp demo.txt nishu@localhost:/tmp

After entering the password, the file will be copied to /tmp.

Verify:

ssh nishu@localhost
ls /tmp
How SCP Works
Computer A
|
SCP/SSH
|
Computer B

Files are transferred through an encrypted SSH connection.

SCP vs SSH
SSH SCP
Remote terminal access File transfer
Execute commands remotely Copy files and folders
Uses Port 22 Uses Port 22
Practice Example

Create a file:

echo "Hello SCP" > demo.txt

Transfer it:

scp demo.txt nishu@localhost:/tmp

Verify:

ssh nishu@localhost
cat /tmp/demo.txt

Output:

Hello SCP
