Accessing Remote Terminal Using SSH
What is SSH?
SSH = Secure Shell

SSH allows you to:

Access and control a remote computer securely over a network.
Example

Suppose:

Laptop A (Client)
↓ SSH
Laptop B (Server)

You can open the terminal of Laptop B from Laptop A.

Why Use SSH?
Remote server management
Access Linux machines
Run commands remotely
Transfer files securely
Basic Command
ssh username@ip-address

Example:

ssh nishu@192.168.0.101
What Happens?
SSH Client
↓
SSH Server (Port 22)
↓
Authentication
↓
Remote Terminal Access
Requirements

1. SSH Server Running

On the target machine:

sudo systemctl status ssh 2. Know the IP Address
ipconfig # Windows
ip addr # Linux

Example:

192.168.0.101 3. Same Network (for LAN practice)

Example:

Laptop
↓
TP-Link Router
↓
Phone / Another Laptop
Default SSH Port
22
Example Flow
ssh nishu@192.168.0.101

↓

Password:

↓

Welcome to Ubuntu
nishu@ubuntu:~$

Now you're controlling the remote machine.

Real-World Usage
Connecting to cloud servers
Managing Linux VPS
Deploying applications
DevOps and system administration

Practical for You

Since you have:

Laptop
Phone
TP-Link router

You can later practice:

Laptop (SSH Server)
↓
Phone (SSH Client)

or

Laptop A
↓ SSH
Laptop B

on the same LAN without needing the internet.
