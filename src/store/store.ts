import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  headerName: "romance",
  mainBooks: [],
};

const rootReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case 'SET_MAIN_BOOKS':  {
      return {
          ...state,
          mainBooks: action.payload
      };
    }
    case 'SET_HEADER_NAME':  {
      return {
          ...state,
          headerName: action.payload
      };
    }
    default :
    return state;
  }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;