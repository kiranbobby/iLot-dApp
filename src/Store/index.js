import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import loginModal from "./ducks/loginModal";
import swipeableDrawer from "./ducks/swipeableDrawer";

const reducers = combineReducers({
  loginModal,
  swipeableDrawer,
});

const rootReducer = (state, action) => {
  return reducers(state, action);
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
