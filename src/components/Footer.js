import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return ( 
<MDBFooter color="blue" className="footer font-small pt-4 mt-4">
<MDBContainer fluid className="text-center text-md-left">
  <MDBRow>
    <MDBCol md="6">
      <p>
        This application is powered by the <a target="_blank" href="https://www.producthunt.com/posts/remote-jobs-api" rel="noreferrer">Remote OK Jobs API.</a>
        <br></br>
      </p>
    </MDBCol>
    <MDBCol md="6">
      <ul>
        <li className="list-unstyled">
          
        </li>
        <li className="list-unstyled">
          <a target="_blank" href="https://twitter.com/home" rel="noreferrer">Twitter</a>
        </li>
        <li className="list-unstyled">
          <a target="_blank" href="https://github.com/dyudis314" rel="noreferrer">GitHub</a>
        </li>
        <li className="list-unstyled">
          <a target="_blank" href="https://github.com/dyudis314/remoteup" rel="noreferrer">Contribute</a>
        </li>
             
        </ul>
    </MDBCol>
  </MDBRow>
</MDBContainer>
<div className="footer-copyright text-center py-3">
  <MDBContainer fluid>
    &copy; {new Date().getFullYear()} Copyright: <a href="https://dylanyudis.com/"
    target="_blank" rel="noreferrer"> Dylan Yudis</a> | remoteUp
  </MDBContainer>
</div>
</MDBFooter>
  )
}

export default Footer;