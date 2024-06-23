import instance from "./axiosConfig/axiosConfig";

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
    func(randomBooks);
  } catch (err) {
    console.log(err)
  }
}


export const getLocalBooks = (name: string) => {
  const str = localStorage.getItem(name);
  const obj = str ? JSON.parse(str) : {books: []};
  return obj.books;
}

