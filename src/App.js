import React, { useState } from 'react';
import FetchJobs from './Jobs';
import Footer from './components/Footer';
import { Spinner } from 'react-bootstrap';
import Search from './components/Search';
import './App.css';
import './Header.css';

  const LoadingSpinner = () => 
    <Spinner 
      animation="border" 
      role="status"
      className="spinner">
        <span className="sr-only">
          Loading...
        </span>
    </Spinner>;

  const App = () => {
    const [jobData, setJobs] = useState(false);
    FetchJobs().then((jobs) => {
        setJobs(jobs);
});

  return (
   <div className="container">
    <div>
      {jobData ? <Search jobs={jobData}/> : <LoadingSpinner/>}
    </div>
      <Footer/>   
    </div>
  );
};

export default App;