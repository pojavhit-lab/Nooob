const express = require("express");
const app = express();

app.use(express.json());

// Home page
app.get("/", (req, res) => {
  res.send("Auth Reloaded System Online ✔️");
});

// Login API
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    return res.json({
      status: "success",
      token: "AUTH-RELOADED-KEY-999"
    });
  }

  return res.json({
    status: "failed",
    msg: "Invalid login"
  });
});

// Keep alive server (IMPORTANT for 24/7 trick)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Auth Reloaded running...");
});
