import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import AsideBar from "./components/AsideBar";
import MyMain from "./components/MyMain";
import MyPlayer from "./components/MyPlayer";

function App() {
  return (
    <>
      <Container fluid>
        
        <Row >
          <AsideBar/>
          <MyMain/>
        </Row>
      </Container>
      <MyPlayer/>
    </>
  );
}

export default App;
