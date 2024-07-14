import { Col, Row } from "react-bootstrap";
import Song from "./Song";

const RowSongs = ({artist, listName})=>{

    return(
        <Row className="d-flex justify-content-center">
        <Col
         xs={10} >
          <div id="rock">
            <h2>{listName}</h2>
            <Row className=" row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
              {artist.map((singleSong, index) => {
                return (
                    <Song key={index} singleSong={singleSong} />
                  
                );
              })}
            </Row>
          </div>
        </Col>
      </Row>

    )
}

export default RowSongs;