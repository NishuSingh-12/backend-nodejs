# Implementing Google Login with Passport.js

**Passport.js** is a Node.js middleware used to simplify authentication.

### Basic Code

```javascript
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      done(null, profile);
    },
  ),
);
```

### Routes

```javascript
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
  }),
  (req, res) => {
    res.redirect("/dashboard");
  },
);
```

### Flow

```text
Login → Google → Callback → Passport → User Login
```

### Remember

> **Passport.js handles the Google authentication flow using `GoogleStrategy`.**

### Interview Answer

> **Passport.js is used to simplify Google authentication in Node.js.**
