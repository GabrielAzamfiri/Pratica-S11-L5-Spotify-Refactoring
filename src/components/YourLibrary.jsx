import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Song from "./Song";

const YourLibrary = ()=>{
  const myList = useSelector(state => state.addRemoveList.list);

    return (
<Col xs={9} className="offset-md-2 text-white pb-5 mb-5">
    <Row className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3">
      {myList &&
        myList.map((song, index) => {
         return( <Song key={index} singleSong={song} />);
        })}
    </Row>
    </Col>
    )
}

export default YourLibrary;