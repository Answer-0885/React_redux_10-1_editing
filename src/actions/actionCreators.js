import { nanoid } from "nanoid";
import {
  CHANGE_FIELD_VALUE,
  RESET_FORM,
  COMPLETE_FORM,
  NEW_ITEM_LIST,
  REMOVE_ITEM_LIST,
  EDIT_ITEM_LIST,

} from "./actionTypes";

export const changeFieldValue = (name, value) => {
  return { type: CHANGE_FIELD_VALUE, payload: { name, value } };
};
export const resetForm = () => {
  return { type: RESET_FORM };
};

export const addServiceList = (name, price) => {
  return { type: NEW_ITEM_LIST, payload: { id: nanoid(8), name, price } };
};

export const removeItemServiceList = (id) => {
  return { type: REMOVE_ITEM_LIST, payload: id };
};

export const completeFormsField = (data) => {
  return { type: COMPLETE_FORM, payload: data };
};

export const editItemList = (data) => {
  return { type: EDIT_ITEM_LIST, payload: data };
};
