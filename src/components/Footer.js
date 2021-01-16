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
            <h4>Thicc Memes Inc</h4>
              <ul className="list-unstyled">
                <li>123-456-7891</li>
                <li>Moscow, Russa</li>
                <li>555 Johnson Drive</li>
              </ul>
          </Col>
        {/* Column 2 */}
        <Col>
            <h4>Dank Memes Inc</h4>
              <ul className="list-unstyled">
                <li>123-456-7891</li>
                <li>Moscow, Russa</li>
                <li>555 Johnson Drive</li>
              </ul>
          </Col>
        {/* Column 3 */}
        <Col>
            <h4>Yup Memes Inc</h4>
              <ul className="list-unstyled">
                <li>123-456-7891</li>
                <li>Moscow, Russa</li>
                <li>555 Johnson Drive</li>
              </ul>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Dylan Yudis | All Rights Reserved.
          </p>
        </Row>
      </div>     
    </div>
  )
}

export default Footer;