import { Col, Row } from "react-bootstrap";

const DatesList = ({ persons }) => {
  return (
    <Row className="justify-content-center">
      <Col sm="8">
        <div className="rectangle p-2 ">
          {persons.length ? (
            persons.map((person) => (
              <div key={person.id} className="d-flex border-bottom mx-3 my-2">
                <img
                  className="img-avatar"
                  src={person.img}
                  alt={person.name}
                />
                <div className="px-3">
                  <p className="d-inline fs-5">{person.name}</p>
                  <p className="fs-6"> {person.date}</p>
                </div>
              </div>
            ))
          ) : (
            <h2 className="p-5 text-center">لا يوجد بيانات</h2>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default DatesList;
