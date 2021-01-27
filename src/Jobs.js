import axios from 'axios';

  class Job {
    constructor(company_name, company_logo, position, description, location, posted_on, link, tags, source, id) {
        this.company_name = company_name;
        this.company_logo = company_logo;
        this.position = position;
        this.description = description;
        this.location = location;
        this.posted_on = posted_on;
        this.link = link;
        this.source = source;
        this.tags = tags;
        this.id = id;
      }
    }

  const jobSources = {


  'Remote OK': [
    () => {
      return new Promise((resolve, reject) => {
        axios.get('https://remoteok.io/api', {mode: 'no-cors'}).then((res) => {
          if (res.status === 200){
          resolve(res.data.slice(1));
          console.log(res.data.slice(1));
          } else {
            reject(res.status);
          }
        })
      })
    }, 
    
    (j) => {
      // Transform a remoteok job into a Job object
      let timeStamp = new Date();
      let job_date =  timeStamp.toDateString();
        return new Job(j.company, j.company_logo, j.position, j.description, j.location, job_date, j.url, j.tags, 'Remote OK')
    }
  ],

  'Remotive': [
    () => {
      return new Promise((resolve, reject) => {
        axios.get('https://remotive.io/api/remote-jobs', {mode: 'no-cors'}).then((res) => {
          if (res.status === 200){
          resolve(res.data);
          console.log(res.data);
          } else {
            reject(res.status);
          }
        })
      })
    }, 
    
    (j) => {
      // Transform a remoteok job into a Job object
      let timeStamp = new Date();
      let job_date =  timeStamp.toDateString();
        return new Job(j.company, j.company_logo, j.position, j.description, j.location, job_date, j.url, j.tags, 'Remotive')
    }
  ]

}


  const cachedJobs = {};

  const FetchJobs = () => { 
    return new Promise((resolve, reject) => {
      let foundJobs = [];
      Object.entries(jobSources).forEach(([sourceName, sourceUtils]) => {
     
        if (sourceName in cachedJobs) {
          console.log(`Found cached jobs from ${sourceName}`);
          resolve(cachedJobs[sourceName]);
          //resolve(cachedJobs[sourceName]);
          // add cachedJobs[sourceName] to found jobs
        } else {
            console.log(`Fetching jobs from ${sourceName}...`);
            sourceUtils[0]().then((jobData) => {
            const sourceJobs = jobData.map(sourceUtils[1]);
            cachedJobs[sourceName] = sourceJobs;
            resolve(sourceJobs);
             //resolve(sourceJobs)
            // add sourceJobs to foundJobs
          }).catch((err) => {
            console.error(`Error retrieving jobs from ${sourceName}`);
            reject(err);
          })
        }
        resolve(foundJobs);
      });
    });
  }

export default FetchJobs;