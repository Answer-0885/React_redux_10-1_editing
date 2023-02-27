import { combineReducers, compose, legacy_createStore } from "redux";
import reduserForm from "../reducers/reduserForm";
import reducerServiceList from "../reducers/reducerServiceList";

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  return legacy_createStore(
    combineReducers({
      item: reduserForm,
      serviceList:reducerServiceList,
    }),
    undefined,
    compose(ReactReduxDevTools)
  );
};

export default configureStore;
