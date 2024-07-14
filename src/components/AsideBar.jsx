import {  useState } from "react";
import { Button, Col, Container, Form, InputGroup, Nav } from "react-bootstrap";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { changeInputValue, getSongsAction, SEARCH_INPUT } from "../redux/actions";
import { Link, useNavigate } from "react-router-dom";
// import { changeInputValue } from "../redux/actions";

const AsideBar = () => {
    const [searchInput, setSearchInput] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();
 
  return (
    <aside>
      <Col xs={2}>
        <Nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <a className="navbar-brand" href="/">
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
                    <Link to="/" className="nav-item nav-link d-flex align-items-center gap-3">
                      <HouseDoorFill className="fs-3" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/Library" className="nav-item nav-link d-flex align-items-center  gap-3" >
                      <BookFill className="fs-3" /> Your Library
                    </Link>
                  </li>
                  <li>
                    <Form onSubmit={(e)=>{ 
                        e.preventDefault();
                        dispatch(changeInputValue(searchInput))
                        dispatch(getSongsAction(searchInput, "searchDispatch", SEARCH_INPUT ))
                        navigate("/search/" + searchInput)  }}>


                    <InputGroup  className=" mt-3">
                      <Form.Control type="text"  placeholder="Search" aria-label="Search" value={searchInput} onChange={(e)=> {
                        setSearchInput(e.target.value)
                      }}/>
                      <div className="input-group-append">
                        <Button variant="outline-secondary" className="btn-sm h-100">GO</Button>
                      </div>
                    </InputGroup >
                    </Form>
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
