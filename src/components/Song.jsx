import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { Heart, HeartFill } from "react-bootstrap-icons";

import { selectSongAction } from "../redux/actions";

const Song = ({ singleSong }) => {
  const dispatch = useDispatch();
  // const favorite = useSelector(state => state.addRemoveFavorite.content);

  // const isInFavorite = favorite.some(song => song.id === singleSong.id);

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
      {/* {isInFavorite ? (
          <HeartFill
            
            fill="red"
          />
        ) : (
          <Heart
            onClick={() => {
              dispatch(addToFavoriteAction(data));
            }}
          />
        )} */}
    </Col>
  );
};

export default Song;
