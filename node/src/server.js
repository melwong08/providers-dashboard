import express, { application } from 'express';
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
  const job = findJobById(jobs, jobId);

  if (job === null) res.status(404).send("Job Not Found");

  res.json(job);
});

app.get("/providers/:id", (req, res) => {
  const jobId = req.params.id;
  const job = findJobById(jobs, jobId);
  const sortedProviders = findProvidersForJob(providers, job);

  if (sortedProviders.length === 0) res.status(404).send("Provider Not Found");

  res.json(sortedProviders);
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

function findJobById(jobs, id) {
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].id == id) return jobs[i];
  }
  return null;
}

function findProvidersForJob(providers, job) {
    if (job.locationType === 'REMOTE') {
      return providers
    }
  
  let providersRanked = [];
  for (let i = 0; i < providers.length; i++) {
    const provider = providers[i];
    const lat = provider.latitude - job.latitude;
    const long = provider.longitude - job.longitude;
    providersRanked.push({score: lat+long, provider})
  }
  return providersRanked.sort((a, b) => a.score - b.score);
}

function findStatus(jobs, status) {
  let statusAll = [];
  for (let i = 0; i < jobs.length; i++) {
    if (jobs[i].status.toLowerCase().replace(' ','') == status) 
    statusAll.push(jobs[i]);
  }
  return statusAll;
}