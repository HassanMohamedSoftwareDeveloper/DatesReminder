import { Col, Row } from "react-bootstrap";

const DatesAction = ({ deleteData, getData }) => {
  return (
    <Row className="justify-content-center my-2 ">
      <Col sm="8" className="d-flex justify-content-between">
        <button className="btn-style p-2" onClick={getData}>
          عرض الكل
        </button>
        <button className="btn-style p-2" onClick={deleteData}>
          مسح الكل
        </button>
      </Col>
    </Row>
  );
};

export default DatesAction;
