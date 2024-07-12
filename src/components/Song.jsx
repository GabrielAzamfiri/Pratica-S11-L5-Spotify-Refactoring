import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction, removeFromFavoriteAction, selectSongAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Song = ({ singleSong }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.addRemoveFavorite.content);

  const isInFavorite = favorite?.some(songID => songID === singleSong.id);

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
      <Row >
        <Col>
          <span>Artist: {singleSong.artist.name} </span>
        </Col>
        <Col >
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
      </Row>
    </Col>
  );
};

export default Song;
