Installing MongoDB on AWS EC2 Ubuntu Instance
EC2 (Elastic Compute Cloud) is a virtual server provided by AWS.
MongoDB can be installed on an Ubuntu EC2 instance to host databases in the cloud.
Prerequisites
AWS Account
Ubuntu EC2 Instance
SSH Access
Internet Connection
Step 1. Connect to EC2
ssh -i my-key.pem ubuntu@<EC2-Public-IP>

Use: Connect to the Ubuntu server using SSH.

Step 2. Update Packages
sudo apt update

Use: Updates the package list.

Step 3. Install Required Packages
sudo apt install -y gnupg curl

Use: Installs tools required to add the MongoDB repository.

Step 4. Add MongoDB GPG Key
curl -fsSL https://pgp.mongodb.com/server-8.0.asc | \
sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
--dearmor

Use: Adds MongoDB's official signing key.

Step 5. Add MongoDB Repository
echo "deb [ signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | \
sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

Use: Adds the MongoDB repository for Ubuntu.

Step 6. Install MongoDB
sudo apt update
sudo apt install -y mongodb-org

Use: Installs the MongoDB server and tools.

Step 7. Start MongoDB
sudo systemctl start mongod

Use: Starts the MongoDB service.

Step 8. Enable Auto Start
sudo systemctl enable mongod

Use: Starts MongoDB automatically after every reboot.

Step 9. Check Status
sudo systemctl status mongod

Use: Verifies that MongoDB is running.

Step 10. Connect to MongoDB
mongosh

Use: Opens the MongoDB Shell.

Installation Flow
Launch EC2
↓
SSH Login
↓
Update Packages
↓
Add MongoDB Repository
↓
Install MongoDB
↓
Start mongod
↓
Check Status
↓
Connect with mongosh

Quick Revision
EC2 Ubuntu Setup

1. SSH into EC2
2. sudo apt update
3. Install gnupg & curl
4. Add MongoDB GPG Key
5. Add MongoDB Repository
6. Install mongodb-org
7. systemctl start mongod
8. systemctl enable mongod
9. systemctl status mongod
10. mongosh

Q. How do you install MongoDB on an Ubuntu EC2 instance?

A.

Connect to the EC2 instance via SSH.
Add the MongoDB repository and GPG key.
Install mongodb-org.
Start and enable the mongod service.
Verify with systemctl status mongod and connect using mongosh. ✅
