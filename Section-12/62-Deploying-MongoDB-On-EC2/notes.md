Deploying MongoDB on AWS EC2
Deploying MongoDB means making your MongoDB server available on an AWS EC2 instance so applications can connect to it.
Prerequisites
AWS EC2 Ubuntu Instance
MongoDB Installed
SSH Access
Step 1. Connect to EC2
ssh -i my-key.pem ubuntu@<EC2-Public-IP>

Use: Connect to the EC2 server.

Step 2. Start MongoDB
sudo systemctl start mongod

Use: Starts the MongoDB service.

Step 3. Enable MongoDB on Boot
sudo systemctl enable mongod

Use: Starts MongoDB automatically after server restart.

Step 4. Verify MongoDB Status
sudo systemctl status mongod

Use: Checks if MongoDB is running.

Step 5. Allow Remote Connections

Edit the MongoDB configuration file.

sudo nano /etc/mongod.conf

Change:

bindIp: 127.0.0.1

to

bindIp: 0.0.0.0

Use: Allows MongoDB to accept connections from other machines.

Step 6. Restart MongoDB
sudo systemctl restart mongod

Use: Applies the configuration changes.

Step 7. Open Port 27017 in EC2 Security Group

Allow:

Type : Custom TCP

Port : 27017

Source : Your IP (Recommended)

Use: Allows external clients to connect to MongoDB.

Step 8. Connect from Another Machine
mongosh "mongodb://<EC2-Public-IP>:27017"

Use: Connect to the MongoDB server running on EC2.

Deployment Flow
Launch EC2
↓
Install MongoDB
↓
Start mongod
↓
Enable Auto Start
↓
Set bindIp = 0.0.0.0
↓
Restart mongod
↓
Open Port 27017
↓
Connect Using mongosh

Quick Revision
Deploy MongoDB on EC2

1. Install MongoDB
2. Start mongod
3. Enable Auto Start
4. Edit mongod.conf
5. bindIp = 0.0.0.0
6. Restart mongod
7. Open Port 27017
8. Connect with mongosh

Q. What configuration changes are required to access MongoDB remotely on EC2?

A.

Change bindIp to 0.0.0.0 in mongod.conf.
Restart MongoDB.
Open TCP port 27017 in the EC2 Security Group.
Connect using the EC2 public IP.
One-Line Revision

Deploying MongoDB on EC2 means configuring MongoDB to run on an AWS server and allowing secure remote connections through port 27017. ✅
