import React, { useState } from 'react';
import './App.css';
import { Spinner } from 'react-bootstrap';
import Search from './components/Search';
import FetchJobs from './Jobs';
import './Header.css';
import Footer from './components/Footer';

const LoadingSpinner = () => 
<Spinner 
  animation="border" 
  role="status"
  className="spinner">
  <span 
  className="sr-only"
  >
    Loading...
  </span>
</Spinner>;

const App = () => {
  const [jobData, setJobs] = useState(false);

  FetchJobs().then((jobs) => {
      setJobs(jobs);
  })

  return (
   <div className="container">
    <div>
      {jobData ? <Search jobs={jobData}/> : <LoadingSpinner />}
    </div>
      <Footer/>   
    </div>
  );
}

export default App;