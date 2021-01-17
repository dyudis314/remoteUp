import React from 'react'; 
import './Results.css'
import { Alert, Container, Col, Row } from 'react-bootstrap';
import ResultCard from './Card';
import Select from 'react-select';
import { groupedOptions } from '../data';
import TypeWriter from './Typewriter';
const _ = require("lodash"); 

class Search extends React.Component {


  constructor( props ) {
      super( props );
      
      this.state = {
        query: '',
        results: [],
        loading: false,
        message: '',
        featuredJob: [],
        //activePage: 1
      };
      
      this.remoteJobs = this.props.jobs;
  }

  findResults(query) {
    this.setState({
      loading: true
    })
    let queryLowerCase = query.toLowerCase();
    let foundJobs = [];
    this.props.jobs.forEach((j) => {
        let validFields = [
          j.position
        ]
        // Add all of the tags individually to validFields,
        // e.g. this way you end up with ["developer", "golang", "js"] instead of ["developer", ["golang", "js"]]
       // validFields = validFields.concat(j.tags);
        //console.log("searching fields", validFields, "for job", j);
        validFields.forEach((f) => {
            f = f.toLowerCase();
            if (f.includes(queryLowerCase) || queryLowerCase.includes(f)) { 
              foundJobs.push(j);
            }
        });
    });

    let totalResults = foundJobs.length;
    console.log("Setting state, this is", this);
    this.setState( {
      results: foundJobs,
      totalResults: totalResults,
      loading: false,
  } )
}

  handleOnInputChange = (event) => {
  const query = event.value;
  if (! query ) {
    this.setState( {query, results: {}, message: '' });
   } else { 
      this.findResults(query);
    }
  };
  
  renderSearchResults = () => {
    const { results } = this.state;
    
    if (results.length === 0) {
      return;
    }
    
      return (          
            <Container
             className="results-container">
               <Alert variant="primary" className="results-alert">
                Browse {results.length} job results below!
               </Alert>
              {_.uniqBy(results).map((result) => {
                return <div>
                        {ResultCard(result)}
                       </div>
              })}             
            </Container>
      )
  };

        /* Featured Job */
    renderFeaturedJob = () => {
      console.log('Here is your featured job:', this.props.jobs[0]);
      /*
      const { results } = this.state.results.slice(0, 5).map(result => {    
        return (       
          <Container
          className="results-container">
            Today's Featured Jobs:
                    <div>
                     {ResultCard(result)}
                    </div>
          </Container>
          
      )
    }
    */
  };


                /* Pagination Component */
  /*
          <Pagination bsName="test" size="sm">

        {_.uniqBy(results).map((result, index) => {
            <Pagination.Item 
              key={index} 
              active={(index + 1 === this.state.activePage)}>
                    {ResultCard(result)}
            </Pagination.Item>
          </Pagination>
  */
  

  render() {

    /* Searchbar Autocomplete */
    const groupStyles = {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    };
    
    const groupBadgeStyles = {
      backgroundColor: '#EBECF0',
      borderRadius: '2em',
      color: '#172B4D',
      display: 'inline-block',
      fontSize: 12,
      fontWeight: 'normal',
      lineHeight: '1',
      minWidth: 1,
      padding: '0.16666666666667em 0.5em',
      textAlign: 'center',
    };

    const formatGroupLabel = data => (
      <div style={groupStyles}>
        <span>{data.label}</span>
        <span style={groupBadgeStyles}>{data.options.length}</span>
      </div>
    );
  
    return (
      <div>
        {/* Heading */}
        <div className="heading">
            <div className="heading-text">              
          <h1>remoteUp</h1>
          <h6>Find a remote job in<h2>{TypeWriter()}</h2></h6>
          <h6>Work in tech, from anywhere.</h6>
      </div>
        {/* Search Input */}
            <Col>  
              <Select 
              className="searchbox"
              type="text"
              name="query"
              value={this.query}
              id="search-input"
              onChange= {_.debounce(this.handleOnInputChange, 250)}           
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}/>
            </Col>  
        </div>

        {/* Featured Job 
        <Row>
            { ! this.renderSearchResults() ? this.renderFeaturedJob() : '' }
        </Row>
*/}

      {/* Results Row */}
        <Row>
          { this.renderSearchResults() }       
        </Row>
        
      </div>
    )
  }
}

export default Search;