import { Button, Col, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const AsideBar = () => {
  return (
    <aside>
      <Col xs={2}>
        <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img src="src\assets\logo\logo.png" alt="Spotify Logo" width="131" height="40" />
            </a>
            <Button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center gap-3" href="#">
                      <HouseDoorFill className="fs-3" /> Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center  gap-3" href="#">
                      <BookFill className="fs-3" /> Your Library
                    </a>
                  </li>
                  <li>
                    <InputGroup  className=" mt-3">
                      <Form.Control type="text"  placeholder="Search" aria-label="Search" />
                      <div className="input-group-append">
                        <Button variant="outline-secondary" className="btn-sm h-100">GO</Button>
                      </div>
                    </InputGroup >
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className="nav-btn">
            <Button className="btn signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
            <p><a href="#">Cookie Policy</a> |<a href="#"> Privacy</a></p>
            
          </div>
        </Nav>

        
      </Col>
      
    </aside>
  );
};
export default AsideBar;