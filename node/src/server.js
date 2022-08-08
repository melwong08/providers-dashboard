import express from 'express';
import { providers, jobs } from './data/data.js';

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/jobs/status/:status", (req, res) => {
  const currentStatus = req.params.status;
  const status = findStatus(jobs, currentStatus);

  if (status === null) res.status(404).send("Status Not Found");

  res.json(status)
})

app.get("/jobs/:id", (req, res) => {
  const jobId = req.params.id;
  const job = findJobId(jobs, jobId);

  if (job === null) res.status(404).send("Job Not Found");

  res.json(job);
});

app.get("/providers/:id", (req, res) => {
  const providerId = req.params.id;
  const provider = findProviderId(providers, providerId);

  if (provider === null) res.status(404).send("Provider Not Found");

  res.json(provider);
});

app.get("/jobs", (req, res) => {
  res.json(jobs);
})

app.get("/providers", (req, res) => {
  res.json(providers);
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

function findProviderId(providers, id) {
  for (let i = 0; i < providers.length; i++) {
    if (providers[i].id == id) return providers[i];
  }
  return null;
}

function findJobId(jobs, id) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id == id) return jobs[i];
  }
  return null;
}

function findStatus(jobs, status) {
  let statusAll = [];
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status.toLowerCase().replace(' ','') == status) 
    statusAll.push(jobs[i]);
  }
  return statusAll;
}

//create jobs routes & display all jobs and provider info on server page
//query the jobs for scheduled jobs
//can also query for   
//start separating out functions and layers, carve out single path for routes
//steno.com/jobs/?id=1