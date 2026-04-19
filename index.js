const express = require("express");
const app = express();

app.get("/", (req, res) => {
<<<<<<< HEAD
  res.send("Hello from Azure CI/CD 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
=======
  res.send("Hello from Azure CI/CD Pipeline!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
>>>>>>> fc820e8fbf2b57b15667decb20fd48482c181c72
