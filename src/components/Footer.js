import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './Footer.css'


const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <Row>
        {/* Column 1 */}
          <Col>
              <ul className="list-unstyled">
              <li><a href="https://github.com/dyudis314/remoteUp" target="_blank" rel="noreferrer">Contribute</a></li>
              <li><a href="https://www.producthunt.com/posts/remote-jobs-api" target="_blank" rel="noreferrer">Remote OK API</a></li>               
              </ul>
          </Col>
        {/* Column 2 */}
        <Col>

          </Col>
        {/* Column 3 */}
        <Col>
              <ul className="list-unstyled">
                <li><a href="https://www.dylanyudis.com/" target="_blank" rel="noreferrer">Dylan Yudis</a></li>
                <li><a href="https://twitter.com/dylanyudis" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://github.com/dyudis314" target="_blank" rel="noreferrer">GitHub</a></li>
              </ul>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <p className="col-sm">
            &copy; {new Date().getFullYear()} Dylan Yudis | All Rights Reserved.
          </p>
        </Row>
      </div>     
    </div>
  )
}

export default Footer;