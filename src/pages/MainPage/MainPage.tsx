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
  StyledMainHeader,
  StyledMainImg,
  StyledMainText,
  StyledMainWrapper,
} from "./styledMainPage";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import Button from "../../components/Button/Button";
import BookCard, { IBook } from "../../components/BookCard/BookCard";
import { StyledSimpleDiv } from "../../styledConstants";
import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { FETCH_MAIN_BOOKS } from "../../actions/actions";

export const templateArray = [
  {
    image: book_cover,
    title: "Title",
    price: 30.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "Title",
    price: 30.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "Title",
    price: 30.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "Title",
    price: 30.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
  {
    image: book_cover,
    title: "Title",
    price: 30.0,
    author: "Author",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsam quibusdam est ut explicabo iste porro nisi, vel totam quis quam sit neque cumque facilis praesentium dignissimos tenetur culpa saepe quaerat rerum. Nesciunt doloremque alias, et unde corrupti tempora, necessitatibus quibusdam temporibus ipsum doloribus minus. Provident consequatur amet tempora porro?",
  },
];

const MainPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("romance");

  const mainBooks = useSelector(({ mainBooks }) => mainBooks);
  console.log(mainBooks);
  const headerName = useSelector(({ headerName }) => headerName);
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();
  useEffect(() => {
    dispatch(FETCH_MAIN_BOOKS("romance"));
  }, []);
  const handleClick = (str: string) => {
    dispatch(FETCH_MAIN_BOOKS(str));
    setSelectedCategory(str);
  };

  return (
    <>
      <StyledMainWrapper>
        <div>
          <StyledMainHeader>What book you looking for?</StyledMainHeader>
          <StyledBookGif src={book_img} alt="book" />
          <StyledMainText>
            Explore our catalog and find your next read.
          </StyledMainText>
          <Input />
          <StyledExploreButton type="button" onClick={() => {}} />
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
      <StyledSimpleDiv $between>
        {Array.isArray(mainBooks) &&
          mainBooks.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              imageSrc={book.volumeInfo.imageLinks?.small || book.volumeInfo.imageLinks?.thumbnail}
              price={book.saleInfo?.listPrice?.amount || 30}
            />
          ))}
      </StyledSimpleDiv>
    </>
  );
};

export default MainPage;

//book.saleInfo.listPrice.amount
