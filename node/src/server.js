const PORT = process.env.PORT || 3001;

const app = require("./app");

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });

//create jobs routes & display all jobs and provider info on server page
//query the jobs for scheduled jobs
//can also query for   
//start separating out functions and layers, carve out single path for routes