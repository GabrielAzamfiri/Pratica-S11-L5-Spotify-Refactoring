import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { selectSongAction } from "../redux/actions";

const Song = ({ singleSong }) => {
  const dispatch = useDispatch();
  return (
    <Col
      className="text-center song py-2"
      onClick={() => {
        dispatch(selectSongAction(singleSong));
      }}
    >
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" />
      <p>Track: {singleSong.title}</p>
      <p>Artist: {singleSong.artist.name}</p>
    </Col>
  );
};

export default Song;
