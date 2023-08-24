import { Col, Row } from "react-bootstrap";

const DatesCount = ({ persons }) => {
  return (
    <Row className="justify-content-center my-3">
      <Col sm="8">لديك {persons.length} مواعيد اليوم</Col>
    </Row>
  );
};

export default DatesCount;
