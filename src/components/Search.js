import React from 'react'; 
import './Search.css';
import './Results.css'
import { Container, Form, Col, Row } from 'react-bootstrap';
import ResultCard from './Card';
import Select from 'react-select';
import { colourOptions, groupedOptions } from '../data';
const _ = require("lodash"); 

class Search extends React.Component {


  constructor( props ) {
      super( props );
      
      this.state = {
        query: '',
        results: [],
        loading: false,
        message: '',
        activePage: 1
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
        console.log("searching fields", validFields, "for job", j);
        validFields.forEach((f) => {
            f = f.toLowerCase();
            if (f.includes(queryLowerCase) || queryLowerCase.includes(f)) { 
              foundJobs.push(j);
            }
        });
    });

    let totalResults = foundJobs.length;
    let message = `Found ${totalResults} jobs that match query ${query}`
    console.debug(message);
    console.log("Setting state, this is", this);
    this.setState( {
      results: foundJobs,
      message: message,
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
    console.log("Rendering search results with results", typeof(results));
    if (results.length === 0) {
      return;
    }
    
      return (   
        
            <Container
             className="results-container">
              {_.uniqBy(results).map((result, index) => {
                return <div>
                        {ResultCard(result)}
                       </div>
              })}             
            </Container>
      )
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
          <h5>Work In Tech From Anywhere</h5>
            </div>
        {/* Search Input */}
            <Col>  
              <Select 
              className="searchbox"
              type="text"
              name="query"
              value={this.query}
              id="search-input"
              onChange = {_.debounce(this.handleOnInputChange, 150)}           
              options={groupedOptions}
              formatGroupLabel={formatGroupLabel}/>
              {/*<i className="fas fa-search search-icon"/>*/}
            </Col>  
        </div>

      {/* Results Row */}
        <Row>
            {this.renderSearchResults()}
        </Row> 

      </div>
    )
  }
}

export default Search;