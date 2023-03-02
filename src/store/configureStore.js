import { combineReducers, compose, legacy_createStore } from "redux";
import reducerForm from "../reducers/reducerForm";
import reducerServiceList from "../reducers/reducerServiceList";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  return legacy_createStore(
    combineReducers({
      item: reducerForm,
      serviceList:reducerServiceList,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
};

export default configureStore;
