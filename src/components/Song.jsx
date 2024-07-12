import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToFavoriteAction, removeFromFavoriteAction, selectSongAction } from "../redux/actions";
import { Heart, HeartFill } from "react-bootstrap-icons";

const Song = ({ singleSong }) => {
  const dispatch = useDispatch();
  const favorite = useSelector(state => state.addRemoveFavorite.content);

  const isInFavorite = favorite?.some(songID => songID === singleSong.id);

  return (
    <Col
      className="text-center song py-2"
      
    >
      <img className="img-fluid" src={singleSong.album.cover_medium} alt="track" onClick={() => {
        dispatch(selectSongAction(singleSong));
      }}/>
      <p>Track: {singleSong.title}</p>
      <span>Artist: {singleSong.artist.name} </span>
      <span className="ms-5">{isInFavorite ? (
          <HeartFill
            className="fs-3"
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
        )}</span>
   
      
    </Col>
  );
};

export default Song;
