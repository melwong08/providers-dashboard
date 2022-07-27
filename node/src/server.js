import express from 'express';
//import {providers, jobs} from './data/data';
//const data = import("./data/data")

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.get("/jobs/:id", (req, res) => {
  console.log(req.query);
  const jobId = req.query.id;
  res.send(jobId);
  });
  
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });



//create jobs routes & display all jobs and provider info on server page
//query the jobs for scheduled jobs
//can also query for   
//start separating out functions and layers, carve out single path for routes