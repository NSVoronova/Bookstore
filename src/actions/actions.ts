import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig/axiosConfig";
import { apiKey } from "../key";


export const FETCH_MAIN_BOOKS = (str: string, currentPage: number) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch(SET_LOADING_CREATOR());
    try {
      const maxRes = currentPage  * 5;
      const apiUrl = `volumes?q=subject:${str}&orderBy=newest&maxResults=${maxRes}`;
      const params = {
        api_key: apiKey
      }
      let response = await instance.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        params
      });
      dispatch({ type: "SET_MAIN_BOOKS", payload: response.data.items });
      dispatch({ type: "SET_HEADER_NAME", payload: str})
    } catch (err) {
      console.log(err);
    } finally {
      // dispatch(SET_LOADING_CREATOR());
    }
  };
};

