export interface IBook {
  id: string,
  title?: string,
  imageSrc: string;
  price: number;
  description?: string,
  author?: string,
  isFavorite?: boolean,
  isAdded?: boolean
  onDeleteBook?: () => void,
}

export interface IAppState {
  headerName: string;
  mainBooks: IBook[]; 
  favoriteBooks: IBook[];
  basketBooks: IBook[];
  currentPage: number;
  countBasket: number;
  countFavorites: number
}