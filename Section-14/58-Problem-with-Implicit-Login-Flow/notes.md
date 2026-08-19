# Problems with Implicit Login Flow

The **Implicit Grant** directly returns the access token to the browser/client.

### Main Problems

- 🔴 **Token exposure** — Access token is directly available to the browser.
- 🔴 **Token leakage risk** — Tokens can leak through browser history, extensions, logs, or other client-side mechanisms.
- 🔴 **No Authorization Code** — There is no secure code-exchange step.
- 🔴 **Harder to secure** — Client-side token handling increases security risks.
- 🔴 **Not recommended today** — Modern OAuth applications should use **Authorization Code + PKCE**.

### Better Approach

```text
❌ Implicit:
Google → Access Token → Browser

✅ Authorization Code + PKCE:
Google → Code → Client → Access Token
```

### Quick Revision

> **The main problem with Implicit Grant is that the access token is delivered directly to the client, increasing the risk of token exposure.**

**Interview:**

> **Implicit Grant is deprecated for modern applications because directly exposing access tokens to the client creates unnecessary security risks. Authorization Code Flow with PKCE is preferred.**
