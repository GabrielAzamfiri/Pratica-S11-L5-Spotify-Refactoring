import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction, addToListAction, removeFromFavoriteAction, removeFromListAction, selectSongAction } from "../redux/actions";
import { Heart, HeartFill, PlusCircle, PlusCircleFill } from "react-bootstrap-icons";

const Song = ({ singleSong }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.addRemoveFavorite.content);
  const list = useSelector(state => state.addRemoveList.list);

  const isInFavorite = favorite?.some(songID => songID === singleSong.id);
  const isInList = list?.some(song => song.id === singleSong.id);

  return (
    <Col className="text-center song py-2">
      <img
        className="img-fluid"
        src={singleSong.album.cover_medium}
        alt="track"
        onClick={() => {
          dispatch(selectSongAction(singleSong));
        }}
      />

      <p>Track: {singleSong.title}</p>
      <Row className="justify-content-center">
        <Col xs={10} className="mb-2">
          <span>Artist: {singleSong.artist.name} </span>
        </Col>
        <Col className="d-flex justify-content-center">
          <Button variant="outline-danger" className="bg-transparent border-0 rounded-circle h-100 d-flex align-items-center justify-content-center">
            {isInFavorite ? (
              <HeartFill
                className="fs-3 "
                fill="red"
                onClick={() => {
                  dispatch(removeFromFavoriteAction(singleSong.id));
                }}
              />
            ) : (
              <Heart
                className="fs-3"
                onClick={() => {
                  dispatch(addToFavoriteAction(singleSong.id));
                }}
              />
            )}
          </Button>
        </Col>
        <Col className="d-flex justify-content-center">
        <Button variant="outline-light" className="bg-transparent border-0 rounded-circle h-100 d-flex align-items-center justify-content-center">
            {isInList ? (
              <PlusCircleFill
                className="fs-3 "
                fill="white"
                onClick={() => {
                  dispatch(removeFromListAction(singleSong));
                }}
              />
            ) : (
              <PlusCircle
                className="fs-3"
                onClick={() => {
                  dispatch(addToListAction(singleSong));
                }}
              />
            )}
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default Song;
