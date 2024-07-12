import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const MyPlayer = () => {
     const selected = useSelector(state => state.selectedSong.selectedSong);

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={10} className="offset-lg-2">
          <Row className={selected ? "h-100  justify-content-start align-items-center" : "h-100  justify-content-center align-items-center"}>
            {selected && <Col xs={4} className="text-white d-flex align-items-center">
            
               <img className="img-fluid me-3" src={selected.album.cover_medium} alt="track" width={80} />
                <p className="text-truncate">{selected.title}</p>
         
            
            
            </Col>}
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex ">
                <a href="#">
                  <img src="src\assets\playerbuttons\shuffle.png" alt="shuffle" />
                </a>
                <a href="#">
                  <img src="src\assets\playerbuttons\prev.png" alt="prev" />
                </a>
                <a href="#">
                  <img src="src\assets\playerbuttons\play.png" alt="play" />
                </a>
                <a href="#">
                  <img src="src\assets\playerbuttons\next.png" alt="next" />
                </a>
                <a href="#">
                  <img src="src\assets\playerbuttons\repeat.png" alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MyPlayer;