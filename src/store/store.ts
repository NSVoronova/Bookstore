import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { IAppState } from "../interfaces";
import { getLocalBooks } from "../helpers";


const initialState: IAppState = {
  headerName: "romance",
  mainBooks: [],
  favoriteBooks: getLocalBooks("favorite"),
  basketBooks: getLocalBooks("basket"),
  currentPage: 1,
  countBasket: getLocalBooks("basket").length,
  countFavorites: getLocalBooks("favorite").length,
  isLoading: false,
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
        basketBooks: action.payload,
        countBasket: state.countBasket + 1
      };
    }
    case "REMOVE_FROM_BASKET": {
      return {
        ...state,
        basketBooks: action.payload,
        countBasket: action.payload.length
      }
    }
    case "ADD_TO_FAVORITE": {
      return {
        ...state,
        favoriteBooks: action.payload,
        countFavorites: state.countFavorites + 1
      };
    }
    case "REMOVE_FROM_FAVORITE": {
      return {
        ...state,
        favoriteBooks: action.payload,
        countFavorites: state.countFavorites - 1
      };
    }
    case "SET_LOADING" : {
      return {
        ...state,
        isLoading: !state.isLoading,
      }
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
