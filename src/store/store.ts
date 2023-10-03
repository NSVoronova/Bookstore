import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  theme: "light"
};

const rootReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case "TOGGLE_THEME" : {
      return {
        ...state,
        theme: action.payload,
      }
    }
    default :
    return state;
  }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;