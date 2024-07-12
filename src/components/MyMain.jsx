import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

import RowSongs from "./RowSongs";

const MyMain = () => {
  const [artist1, setArtist1] = useState([]);
  const [artist2, setArtist2] = useState([]);
  const [artist3, setArtist3] = useState([]);

  const fillMusicSection = async (artistName, setArtist) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName);
      if (response.ok) {
        let { data } = await response.json();
        const arrSongs = [];
        for (let index = 0; index < 4; index++) {
          arrSongs.push(data[index]);
        }
        setArtist(arrSongs);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
  useEffect(() => {
    fillMusicSection("queen", setArtist1);
    fillMusicSection("katyperry", setArtist2);
    fillMusicSection("eminem", setArtist3);
  }, []);

  return (
    <main>
      <Col xs={12} md={9} className="offset-md-3 mainPage pb-5 mb-5">
        <Row>
          <Col xs={9} lg={11} className=" mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <RowSongs artist={artist1} listName="Rock Classics" />
        <RowSongs artist={artist2} listName="Pop Culture" />
        <RowSongs artist={artist3} listName="#HipHop" />
      </Col>
    </main>
  );
};

export default MyMain;
