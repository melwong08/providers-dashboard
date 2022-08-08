import express from 'express';
import { providers, jobs } from './data/data.js';
// const data = import("./data.js")
// const jobs = import("../data/jobs.js");
// const providers = import("../data/providers.js")

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/jobs/scheduled", (req, res) => {
  const currentStatus = req.params.status;
  const scheduled = findStatus(jobs, currentStatus);

  res.json(scheduled)
})

app.get("/jobs/:id", (req, res) => {
  //console.log(req.params.id);
  const jobId = req.params.id;
  const job = findJobId(jobs, jobId);
  // const scheduledJob = findScheduledJob();

  if (job === null) res.status(404).send("Not Found");

  res.json(job);
});

app.get("/jobs", (req, res) => {
  res.json(jobs);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function findJobId(jobs, id) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id == id) return jobs[i];
  }
  return null;
}

function findStatus(jobs, scheduled) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status === "SCHEDULED") return jobs[i];
  }
  return null;
}

//create jobs routes & display all jobs and provider info on server page
//query the jobs for scheduled jobs
//can also query for   
//start separating out functions and layers, carve out single path for routes
//steno.com/jobs/?id=1