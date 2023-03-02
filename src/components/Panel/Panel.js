import React from "react";
import Form from "../Form/Form";
import List from "../Sections/List";
import { nanoid } from 'nanoid'


const Panel = () => {
  return (
    <React.Fragment>
      <div className="panel-header">
        <Form type={"repair"} />
      </div>
      <List key={nanoid()} type={"service"}></List>
    </React.Fragment>
  );
};
export default Panel;
