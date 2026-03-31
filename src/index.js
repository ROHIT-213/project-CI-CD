const express = require("express");
const app = express();

app.use(express.json());

let profile = { name: "John Doe", email: "user@example.com", bio: "Hello!" };

app.get("/profile", (req, res) => {
  res.send(`
    <html>
      <body style="font-family:Arial;max-width:400px;margin:50px auto;padding:20px;border:1px solid #ddd;border-radius:8px">
        <h2>👤 User Profile</h2>
        <p><b>Name:</b> ${profile.name}</p>
        <p><b>Email:</b> ${profile.email}</p>
        <p><b>Bio:</b> ${profile.bio}</p>
      </body>
    </html>
  `);
});

app.put("/profile", (req, res) => {
  const { name, email, bio } = req.body;
  if (name) profile.name = name;
  if (email) profile.email = email;
  if (bio) profile.bio = bio;
  res.json({ message: "Profile updated", profile });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
