EC2 Instance Server on AWS
What is EC2?
EC2 = Elastic Compute Cloud

EC2 is a virtual computer (virtual server) provided by AWS.

Think of it as
Your Laptop
↓
AWS Data Center
↓
Virtual Laptop (EC2)

You get a machine with:

CPU
RAM
Storage
Public IP
Operating System
Example

Create an Ubuntu EC2 instance:

Ubuntu Server
2 vCPU
2 GB RAM
Public IP

Now you can SSH into it from anywhere.

How to Connect?
ssh -i my-key.pem ubuntu@public-ip

Example:

ssh -i aws-key.pem ubuntu@13.233.100.25
What Can You Do on EC2?
Host a Website
EC2
↓
Nginx
↓
Website
Run Node.js Server
EC2
↓
Node.js
↓
Port 3000
Host APIs
EC2
↓
Express.js API
Run Databases
EC2
↓
MySQL
PostgreSQL
MongoDB
EC2 Security Group

A Security Group acts like a firewall.

Example:

Port 22 → SSH
Port 80 → HTTP
Port 443 → HTTPS

If Port 22 is closed:

SSH ❌

If Port 22 is open:

SSH ✅
Public IP

When AWS creates an EC2 instance:

Private IP → 172.x.x.x
Public IP → 13.x.x.x

You connect using the Public IP.

Real-World Flow
Your Laptop
↓ SSH
AWS EC2
↓
Node.js Server
↓
Website/API
Why EC2 is Important?
Most common cloud server service
Used for hosting websites and applications
Supports Linux and Windows servers
Great for learning Linux, SSH, networking, and deployment
