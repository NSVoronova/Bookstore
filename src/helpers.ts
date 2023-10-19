import instance from "./axiosConfig/axiosConfig";
import { IbookAPI } from "./components/BookCardFull/BookCardFull";


export const fetchBook = async (id: string, func: React.Dispatch<React.SetStateAction<IbookAPI | null>>) => {
  try {
    if (id) {
      const url = `volumes/${id}`;
      const response = await instance.get(url);
      const bookData = response.data;
      console.log(bookData);
      func(bookData.volumeInfo);
    }
  } catch(err) {
    console.log(err)
  }
}

export const fetchRandomBooks = async (func: React.Dispatch<React.SetStateAction<never[]>>) => {
  try {
    const url = "volumes"
    const params = {
      q: 'subject:fiction',
      maxResults: 5,
      startIndex: Math.floor(Math.random() * 100),
    }
    const response = await instance.get(url, {params});
    const randomBooks = response.data.items;
    console.log(randomBooks);
    func(randomBooks);
  } catch (err) {
    console.log(err)
  }
}
export const fetchSearch = async (str: string, func: React.Dispatch<React.SetStateAction<string>>) => {
  try {
    let response = await instance.get(`volumes?q=${str}`);
    func(response.data.items);
    console.log(response.data.items)
  } catch (err) {
    console.log(err);
  }
}