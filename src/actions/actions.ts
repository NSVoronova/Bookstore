import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import instance from "../axiosConfig/axiosConfig";
import { apiKey } from "../key";
import { IBook } from "../interfaces";
import { IbookAPI } from "../components/BookCardFull/BookCardFull";
import { getLocalBooks } from "../helpers";

export const SET_LOADING_CREATOR = () => ({ type: "SET_LOADING" });

export const FETCH_MAIN_BOOKS = (str: string, currentPage: number) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
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
      const basketBooks = getLocalBooks("basket");
      let mainArray = response.data.items;
      const updatedMainArray = mainArray.map((mainObj: IbookAPI) => {
        const isAdded = basketBooks.some((basketObj: IBook) => basketObj.id === mainObj.id);
        return { ...mainObj, isAdded: isAdded };
      });
      dispatch({ type: "SET_MAIN_BOOKS", payload: updatedMainArray });
      dispatch({ type: "SET_HEADER_NAME", payload: str})
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  };
};

export const ADD_TO_BASKET = (book: IBook) => {
  return {
    type: "ADD_TO_BASKET",
    payload: book,
  };
};

export const FETCH_BOOK = (id: string, func: React.Dispatch<React.SetStateAction<IbookAPI | null>>) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      if (id) {
        const url = `volumes/${id}`;
        const params = {
          api_key: apiKey
        }
        const response = await instance.get(url, {
          headers: {
            'Content-Type': 'application/json',
          },
          params});
        const bookData = response.data;
        func(bookData);
      }
    } catch(err) {
      console.log(err)
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  }
}

export const FETCH_SEARCH = (str: string, func: React.Dispatch<React.SetStateAction<string>>, category: string, filter: string) => {
  return async (dispatch: ThunkDispatch<any, {}, AnyAction>) => {
    dispatch(SET_LOADING_CREATOR());
    try {
      let response;
      if (String(category) === "All" && String(filter) === "Not filtered") {
        response = await instance.get(`volumes?q=${str}`);
      func(response.data.items);
      } else if (String(category) === "All"){
        response = await instance.get(`volumes?q=${str}&orderBy=${filter.toLowerCase()}`);
      } else if (String(filter) === "Not filtered") {
        response = await instance.get(`volumes?q=${str}+subject:${category.toLowerCase()}`);
      } else {
        response = await instance.get(`volumes?q=${str}+subject:${category.toLowerCase()}&orderBy=${filter.toLowerCase()}`);
      }
      func(response.data.items);
      console.log(response.data.items)
    } catch (err) {
      console.log(err);
    } finally {
      dispatch(SET_LOADING_CREATOR());
    }
  }
}