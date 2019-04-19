import { combineReducers } from "redux";
import buttons from "../components/Button/reducers";

export default combineReducers({
  buttons
});

/*

export default (state, action) => {
  for (const key in obj) {
    obj[key](state, action);
  }
}

*/
