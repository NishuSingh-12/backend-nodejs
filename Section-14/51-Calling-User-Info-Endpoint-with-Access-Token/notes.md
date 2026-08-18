# Calling User Info Endpoint with Access Token

After getting an **Access Token** from Google, we can use it to request the user's information from Google's **UserInfo endpoint**.

> **Access Token → UserInfo API → User Information**

### Flow

```text
Authorization Code
        ↓
Google Token Endpoint
        ↓
Access Token
        ↓
UserInfo Endpoint
        ↓
User Information
```

### 1. Get Access Token

```javascript
const { tokens } = await client.getToken(code);

const accessToken = tokens.access_token;
```

### 2. Call UserInfo Endpoint

```javascript
const response = await fetch(
  "https://openidconnect.googleapis.com/v1/userinfo",
  {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  },
);

const userInfo = await response.json();

console.log(userInfo);
```

Example response:

```json
{
  "sub": "123456789",
  "name": "Nishu",
  "email": "nishu@gmail.com",
  "picture": "https://..."
}
```

### 3. Find/Create User

```javascript
const user = await User.findOne({
  googleId: userInfo.sub,
});
```

If the user doesn't exist:

```javascript
await User.create({
  googleId: userInfo.sub,
  name: userInfo.name,
  email: userInfo.email,
  profileImage: userInfo.picture,
});
```

### Important

```text
ID Token
→ Used to identify/authenticate the user

Access Token
→ Used to access authorized APIs/resources
```

Don't confuse them.

### ⭐ Quick Revision

```text
Access Token
     ↓
Authorization: Bearer <token>
     ↓
UserInfo Endpoint
     ↓
User Profile Data
```

### Interview Answer

> **After receiving an access token, we send it as a Bearer token in the Authorization header to Google's UserInfo endpoint. Google then returns the user's authorized profile information.**
