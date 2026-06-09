Connecting to Multiple SSH Servers
Problem

Suppose you manage multiple servers:

Server 1 → Development
Server 2 → Staging
Server 3 → Production

Typing full commands every time:

ssh nishu@192.168.1.10
ssh nishu@192.168.1.20
ssh nishu@192.168.1.30

is inconvenient.

Solution: SSH Config File

Create/Edit:

nano ~/.ssh/config
Example Configuration
Host dev
HostName 192.168.1.10
User nishu

Host staging
HostName 192.168.1.20
User nishu

Host prod
HostName 192.168.1.30
User nishu
Connect Using Aliases

Instead of:

ssh nishu@192.168.1.10

just use:

ssh dev

Similarly:

ssh staging
ssh prod
Different SSH Keys

You can assign different keys to different servers:

Host github
HostName github.com
User git
IdentityFile ~/.ssh/github_key

Host office
HostName 192.168.1.50
User nishu
IdentityFile ~/.ssh/office_key
Real-World Example
Laptop
├─ dev server
├─ staging server
└─ production server

Each server can have:

Different IP
Different username
Different SSH key

and all can be managed from one SSH config file.

Your Practice Setup

You currently have:

Windows
↓
WSL Ubuntu (SSH Server)

You can create an alias:

Host localubuntu
HostName localhost
User nishu

Then connect with:

ssh localubuntu

instead of:

ssh nishu@localhost
Benefits

✅ Shorter commands

✅ Easier management

✅ Multiple identities/keys

✅ Useful for DevOps and cloud servers
