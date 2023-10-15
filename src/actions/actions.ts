import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig/axiosConfig";


export const FETCH_MAIN_BOOKS = (str: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    // dispatch(SET_LOADING_CREATOR());
    try {
      const apiKey = 'AIzaSyA_pSdSoJ5qvreyZHMCUlS5VseySDg3ap4'; 
      const apiUrl = `volumes?q=genre:${str}&orderBy=relevance&maxResults=5`;
      const params = {
        api_key: apiKey
      }
      let response = await instance.get(apiUrl, {
        headers: {
          'Content-Type': 'application/json',
        },
        params
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

