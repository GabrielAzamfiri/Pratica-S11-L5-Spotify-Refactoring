import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";

import RowSongs from "./RowSongs";
import { useDispatch, useSelector } from "react-redux";
import { getSongsAction, HIPHOP, POP_CULTURE, ROCK_CLASSIC } from "../redux/actions";

const MyMain = () => {
  const dispatch = useDispatch();
  const queen = useSelector(state => state.fetchResponse.list1);
  const katyperry = useSelector(state => state.fetchResponse.list2);
  const eminem = useSelector(state => state.fetchResponse.list3);

  useEffect(() => {
    dispatch(getSongsAction("queen", "homeDispatch", ROCK_CLASSIC ));
    dispatch(getSongsAction("katyperry","homeDispatch", POP_CULTURE ));
    dispatch(getSongsAction("eminem", "homeDispatch", HIPHOP));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <RowSongs artist={queen} listName="Rock Classics" />
        <RowSongs artist={katyperry} listName="Pop Culture" />
        <RowSongs artist={eminem} listName="#HipHop" />
      </Col>
    </main>
  );
};

export default MyMain;
