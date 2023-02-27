import {
  CHANGE_FIELD_VALUE,
  RESET_FORM,
  COMPLETE_FORM,
} from "../actions/actionTypes";

const initialState = {
  name: "",
  price: "",
};

const reducerForm = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      const { name, value } = action.payload;

      return { ...state, [name]: value };
    case COMPLETE_FORM:
      const copyState = action.payload;
      return copyState;
    case RESET_FORM:
      return { name: "", price: "" };

    default:
      return state;
  }
};

export default reducerForm;
