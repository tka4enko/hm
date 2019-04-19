import configureStore from "./configureStore";
import rootReducer from "./reducers";

const store = configureStore({
  reducer: rootReducer
});

export default store;
