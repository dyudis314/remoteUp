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
            <h4></h4>
              <ul className="list-unstyled">
              <li><a href="https://github.com/dyudis314/remoteUp" target="_blank">Contribute</a></li>
              <li><a href="https://www.producthunt.com/posts/remote-jobs-api" target="_blank">Remote OK API</a></li>               
              </ul>
          </Col>
        {/* Column 2 */}
        <Col>

          </Col>
        {/* Column 3 */}
        <Col>
            <h4></h4>
              <ul className="list-unstyled">
                <li><a href="https://www.dylanyudis.com/" target="_blank">Dylan Yudis | Work</a></li>
                <li><a href="https://twitter.com/dylanyudis" target="_blank">Twitter</a></li>
                <li><a href="https://github.com/dyudis314" target="_blank">GitHub</a></li>
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