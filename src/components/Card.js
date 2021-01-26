import React from 'react';
import { Card, Accordion, Button, Badge } from 'react-bootstrap';
const _ = require("lodash"); 

const stripTags = (str) => {
  return str.replace(/<[^>]+>/g, '');
}

const ResultCard = (result) => {

  if ( result.company_name === "") {
    return null
      } else {

    return (
    <Card 
      href={result.link || result.url} 
      target="_blank" 
      className="result-item"
      variant="success">
        <Card.Img variant="top" src={result.company_logo} />
            <Card.Body>
              <Card.Title className="job-title">
                <i>{result.company_name}</i> | {result.position || result.title}
                  <h5>
                    <Badge 
                      className="location"
                      variant="secondary">
                        {result.location || result.candidate_required_location}                
                    </Badge>
                  </h5>
              </Card.Title>

      <Card.Text>
        <h6 className="tags">
          <i>
            #{result.tags[0]} #{result.tags[1]} #{result.tags[2]}
          </i>
        </h6> 
              
        <div className="date">
          <i className="far fa-clock"></i>
            <h6 className="posted-on">Posted on {result.posted_on || result.publication_date }</h6>
        </div>                                  
      </Card.Text>

      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle
              as={Button} 
              variant="link" 
              eventKey="0" 
              className="learn-more">
                Learn More                      
            </Accordion.Toggle>
          </Card.Header>

          <Accordion.Collapse eventKey="0">
            <Card.Body
            className="result_description">
              {  stripTags(result.description)}
                <br></br><br></br>
                  <Button 
                    variant="primary" 
                    size="sm"
                    href={result.link}
                    target="_blank">
                      Apply
                 </Button>                                          
            </Card.Body> 
          </Accordion.Collapse>

          <Card.Footer>
            <small>
              Source: <i>{result.source}</i>
            </small>
          </Card.Footer>
        </Card>
      </Accordion>
    </Card.Body>
  </Card>
    )
  }
}

export default ResultCard;