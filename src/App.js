import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { persons } from "./data";
import DatesCount from "./components/DatesCount";
import DatesList from "./components/DatesList";
import DatesAction from "./components/DatesAction";

function App() {
  const [personsList, setPersonsData] = useState(persons);
  const onDeleteAll = () => {
    setPersonsData([]);
  };
  const onGetAll = () => {
    setPersonsData(persons);
  };
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount persons={personsList} />
        <DatesList persons={personsList} />
        <DatesAction deleteData={onDeleteAll} getData={onGetAll} />
      </Container>
    </div>
  );
}

export default App;
