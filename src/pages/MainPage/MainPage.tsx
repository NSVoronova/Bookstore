import React, { useEffect, useState } from "react";
import book_img from "../../assets/images/book.gif";
import main_img from "../../assets/images/main_image.jpg";
import folder_img from "../../assets/icons/folder.svg";
import path_img from "../../assets/icons/path.svg";
import book_cover from "../../assets/images/book_cover.jpg";
import Input from "../../components/Input/Input";
import {
  StyledBookGif,
  StyledDashedDiv,
  StyledExploreButton,
  StyledFlexDiv,
  StyledGrid,
  StyledMainHeader,
  StyledMainImg,
  StyledMainText,
  StyledMainWrapper,
} from "./styledMainPage";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";
import BookCard from "../../components/BookCard/BookCard";
import { StyledSimpleDiv } from "../../styledConstants";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { FETCH_MAIN_BOOKS } from "../../actions/actions";
import { useNavigate } from "react-router-dom";
import { IBook } from "../../interfaces";
import { getLocalBooks } from "../../helpers";
import Loader from "../../components/Loader/Loader";


const MainPage = () => {
  const isLoading = useSelector(({isLoading}) => isLoading);
  const [selectedCategory, setSelectedCategory] = useState("romance");
  const mainBooks = useSelector(({ mainBooks }) => mainBooks);
  const currentPage = useSelector(({ currentPage }) => currentPage);
  const basketBooks = useSelector(({basketBooks}) => basketBooks)
  // const basketBooks = getLocalBooks("basket")
  const favoriteBooks = useSelector(({favoriteBooks}) => favoriteBooks)
  const navigate = useNavigate();
  const [dataSearch, setDataSearch] = useState("");

  const headerName = useSelector(({ headerName }) => headerName);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  useEffect(() => {
    dispatch(FETCH_MAIN_BOOKS("romance", 1));
  }, []);
  const handleClick = (str: string) => {
    dispatch(FETCH_MAIN_BOOKS(str, 1));
    setSelectedCategory(str);
    dispatch({type: 'SET_CURRENT_PAGE', payload: 1})
  };

  const loadMoreBooks = () => {
    const newPage = currentPage + 1;
    dispatch({type: 'SET_CURRENT_PAGE', payload: newPage})
    dispatch(FETCH_MAIN_BOOKS(headerName, newPage));
  };
  
  const handleClickSearch = () => {
    localStorage.setItem("search", dataSearch);
    navigate(`/search`);
  }
//   const [renderCount, setRenderCount] = useState(0);
// const forceRerender = () =>{
//   setRenderCount((count) => count + 1);
//   dispatch(FETCH_MAIN_BOOKS(headerName, 1))
//   console.log(mainBooks);
// } 
  return (
    <>
      <StyledMainWrapper>
        <div>
          <StyledMainHeader>What book you looking for?</StyledMainHeader>
          <StyledBookGif src={book_img} alt="book" />
          <StyledMainText>
            Explore our catalog and find your next read.
          </StyledMainText>
          <Input onChange={setDataSearch} value={dataSearch} onClick={handleClickSearch}/>
          <StyledExploreButton type="button" onClick={handleClickSearch} />
          <StyledDashedDiv></StyledDashedDiv>
        </div>
        <StyledMainImg src={main_img} alt="main_image" />
      </StyledMainWrapper>
      <SectionHeader headerName="Categories" imageSrc={folder_img} />
      <StyledFlexDiv>
        <Button
          text="Romance"
          onClick={() => handleClick("romance")}
          $checked={selectedCategory === "romance"}
        />
        <Button
          text="Adventure"
          onClick={() => handleClick("adventure")}
          $checked={selectedCategory === "adventure"}
        />
        <Button
          text="Fantasy"
          onClick={() => handleClick("fantasy")}
          $checked={selectedCategory === "fantasy"}
        />
        <Button
          text="History"
          onClick={() => handleClick("history")}
          $checked={selectedCategory === "history"}
        />
        <Button
          text="Biography"
          onClick={() => handleClick("biography")}
          $checked={selectedCategory === "biography"}
        />
        <Button
          text="Fiction"
          onClick={() => handleClick("fiction")}
          $checked={selectedCategory === "fiction"}
        />
      </StyledFlexDiv>
      <SectionHeader
        headerName={headerName.charAt(0).toUpperCase() + headerName.slice(1)}
        imageSrc={path_img}
      />
      {/* <button onClick={forceRerender}>rerender {renderCount}</button> */}
      <StyledGrid>
        {Array.isArray(mainBooks) &&
          mainBooks.map((book) => (
            <BookCard
              isFavorite={!!favoriteBooks.find((item: IBook) => item.id === book.id)}
              isAdded={!!basketBooks.find((item: IBook) => item.id === book.id)}//book.isAdded}
              key={book.id}
              id={book.id}
              imageSrc={book.volumeInfo.imageLinks?.medium ||book.volumeInfo.imageLinks?.small || book.volumeInfo.imageLinks?.thumbnail || book_cover}
              price={book.saleInfo?.listPrice?.amount || 30}
              author={(Array.isArray(book?.volumeInfo.authors) && book && book.volumeInfo.authors.join(", ")) || ""}
              title={(book && book.volumeInfo.title) || ""}
            />
          ))}
      </StyledGrid>
      <StyledSimpleDiv><Button onClick={loadMoreBooks} text={isLoading ? <Loader/> : "Load More.."}></Button></StyledSimpleDiv>
    </>
  );
};

export default MainPage;

//book.saleInfo.listPrice.amount
