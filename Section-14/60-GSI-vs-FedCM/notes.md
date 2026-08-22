# GSI vs FedCM

**GSI (Google Identity Services)** is Google's library for implementing Google Sign-In.
**FedCM (Federated Credential Management)** is a browser API that helps manage federated login more privately and securely.

### Main Difference

| GSI                                 | FedCM                                          |
| ----------------------------------- | ---------------------------------------------- |
| Google-provided JavaScript library  | Browser-level API                              |
| Provides Google Sign-In / One Tap   | Provides privacy-preserving identity mediation |
| Handles Google authentication UI    | Browser controls the authentication experience |
| Works with Google Identity Services | Can be used by GSI internally                  |

### Simple Flow

**GSI:**

```text
Your Website
    ↓
Google Identity Services
    ↓
Google Account
    ↓
ID Token
```

**FedCM:**

```text
Your Website
    ↓
Browser (FedCM)
    ↓
Identity Provider
    ↓
Credential
```

### Why FedCM?

FedCM reduces the need for websites and identity providers to directly track users across sites and gives the **browser more control over federated identity**.

### Quick Revision

> **GSI is Google's Sign-In solution, while FedCM is a browser API designed to make federated authentication more private and secure.**

**Interview:**

> **GSI provides Google Sign-In features such as One Tap, while FedCM is a browser-level privacy API that can mediate federated authentication.**
