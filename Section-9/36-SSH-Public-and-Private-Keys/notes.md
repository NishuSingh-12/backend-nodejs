SSH Public and Private Keys
Why Do We Need SSH Keys?

Instead of logging in with a password every time:

Client → Password → Server

we can use SSH keys:

Client → SSH Key → Server

This is more secure and convenient.

Two Keys
Private Key
Keep it secret.
Never share it.

Stored on your computer.

Example:

~/.ssh/id_rsa

or

~/.ssh/id_ed25519
Public Key
Safe to share.

Stored on the server.

Example:

~/.ssh/id_rsa.pub

or

~/.ssh/id_ed25519.pub
How It Works?
Laptop (Private Key)
↓
SSH Login
↓
Server (Public Key)

The server verifies that you own the matching private key.

Generate SSH Keys
ssh-keygen -t ed25519

Press Enter for the default location.

Files created:

~/.ssh/id_ed25519
~/.ssh/id_ed25519.pub
View Public Key
cat ~/.ssh/id_ed25519.pub

Example:

ssh-ed25519 AAAAC3Nza... nishu@Nishu

This can be shared.

Copy Public Key to Server
ssh-copy-id username@server-ip

Example:

ssh-copy-id nishu@192.168.1.10

The public key gets added to:

~/.ssh/authorized_keys

on the server.

Login Without Password

After setup:

ssh nishu@192.168.1.10

No password needed.

Real-World Usage

SSH keys are commonly used for:

Linux servers
VPS management
GitHub authentication
Automated deployments
CI/CD pipelines
Your Practice Setup

You can even practice on your WSL machine:

Generate keys:

ssh-keygen -t ed25519

Copy your public key to localhost:

ssh-copy-id nishu@localhost

Now test:

ssh nishu@localhost

If it logs in without asking for a password, SSH key authentication is working. 🎉
