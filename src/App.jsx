import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row } from "react-bootstrap";
import AsideBar from "./components/AsideBar";
import MyMain from "./components/MyMain";
import MyPlayer from "./components/MyPlayer";
import SearchedArtist from "./components/SearchedArtist";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <AsideBar />
            <Routes>
              <Route path="/" element={<MyMain />} />
              <Route path="/search/:artist" element={<SearchedArtist/>} />
            </Routes>
          </Row>
        </Container>
        <MyPlayer />
      </BrowserRouter>
    </>
  );
}

export default App;
