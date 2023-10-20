import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { IAppState } from "../interfaces";


const initialState: IAppState = {
  headerName: "romance",
  mainBooks: [],
  favoriteBooks: [],
  basketBooks: [],
  currentPage: 1,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_MAIN_BOOKS": {
      return {
        ...state,
        mainBooks: action.payload,
      };
    }
    case "SET_HEADER_NAME": {
      return {
        ...state,
        headerName: action.payload,
      };
    }
    case "SET_CURRENT_PAGE": {
      return {
        ...state,
        currentPage: action.payload,
      };
    }
    case "ADD_TO_BASKET": {
      return {
        ...state,
        basketBooks: [...state.basketBooks, action.payload],
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
