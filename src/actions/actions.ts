import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig/axiosConfig";


export const FETCH_MAIN_BOOKS = (str: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch(SET_LOADING_CREATOR());
    try {
      let response = await  instance.get(`volumes?q=genre:${str}&orderBy=newest&maxResults=5`, {
          headers: {
    'Content-Type': 'application/json',
  },
      });
      console.log(response.data.items)
      dispatch({ type: "SET_MAIN_BOOKS", payload: response.data.items });
      dispatch({ type: "SET_HEADER_NAME", payload: str})
    } catch (err) {
      console.log(err);
    } finally {
      // dispatch(SET_LOADING_CREATOR());
    }
  };
};

