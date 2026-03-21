const express = require("express");
const app = express();

app.use(express.json());

let profile = { name: "John Doe", email: "user@example.com", bio: "Hello!" };

app.get("/profile", (req, res) => res.json(profile));

app.put("/profile", (req, res) => {
  const { name, email, bio } = req.body;
  if (name) profile.name = name;
  if (email) profile.email = email;
  if (bio) profile.bio = bio;
  res.json({ message: "Profile updated", profile });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
