import { providers, jobs } from './data.js'

for (let i = 0; i < providers.length; i++) {
    const provider = providers[i];
    console.log(provider.fullName)
}

for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i];
    console.log(job.id + ' = ' +job.status)
}
