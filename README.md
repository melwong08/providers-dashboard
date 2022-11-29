# Steno Providers Dashboard

## Task
Create monorepo with JavaScript - React, Node, Express, PostgreSQL

Instructions: If job is marked scheduled, show job. If provider id is empty,

1) search location - remote vs. in person, location of (provider - job)
2) search turn over time - time of (materials provided - datetime)
3) search cost - lower is better
4) provider rating - higher is better

Frontend
- create a board listing each job that still needs providers assigned
- within each job, show a list of which providers best fit that job

Backend
- parse the csv files for jobs and providers
- create routes using API calls to display data on frontend

## Screenshot
![provider_dashboard](https://github.com/melwong08/providers-dashboard/blob/main/images/provider_dashboard.png)

## Built with: 
- React.js
- JavaScript
- HTML 

## Lessons Learned: 
- how to use correct proxy scripts for proper networking
- how to create sorting logic in backend files and call to frontend using fetch
