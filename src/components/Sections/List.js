import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { removeItemServiceList, completeFormsField, resetForm } from "../../actions/actionCreators";
import filtered from "../../utils/filtered";
import ListItem from "./ListItem";

const List = ({ type }) => {
  const { serviceList } = useSelector((state) => state);
  const { item } = useSelector((state) => state);

  const dispatch = useDispatch();
  const list = filtered(serviceList, item.name);

  const onClickEdit = (id) => {
    const data = serviceList.find((item) => item.id === id);
    dispatch(completeFormsField(data));
  };
  const onClickRemove = (id) => {
    dispatch(removeItemServiceList(id));
    dispatch(resetForm());
  };
  return (
    <React.Fragment>
      <ul className={type + "-list"}>
        {list.map((o) => (
          <ListItem
            key={o.id}
            element={o}
            className={type + "-list"}
            onClickEdit={onClickEdit}
            onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    </React.Fragment>
  );
};

export default List;
