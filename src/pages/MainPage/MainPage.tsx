import React from "react";
import book_img from "../../assets/images/book.gif";
import main_img from "../../assets/images/main_image.jpg";
import folder_img from "../../assets/icons/folder.svg";
import path_img from "../../assets/icons/path.svg";
import book_cover from "../../assets/images/book_cover.jpg";
import Input from "../../components/Input/Input";
import {
  StyledBookImg,
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
import { StyledSimpleDiv } from "../../components/BookCard/styledBookCard";

const handleClick = () => {
  alert("click");
};

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
  return (
    <>
      <StyledMainWrapper>
        <div>
          <StyledMainHeader>What book you looking for?</StyledMainHeader>
          <StyledBookImg src={book_img} alt="book" />
          <StyledMainText>
            Explore our catalog and find your next read.
          </StyledMainText>
          <Input />
          <StyledExploreButton type="button" onClick={handleClick} />
          <StyledDashedDiv></StyledDashedDiv>
        </div>
        <StyledMainImg src={main_img} alt="main_image" />
      </StyledMainWrapper>
      <SectionHeader headerName="Categories" imageSrc={folder_img} />
      <StyledFlexDiv>
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Romance" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
        <Button text="Adventure" onClick={handleClick} />
      </StyledFlexDiv>
      <SectionHeader headerName="Romance" imageSrc={path_img} />
      <StyledSimpleDiv>
        {Array.isArray(templateArray) && templateArray.map(({image, price}) => (
          <BookCard key={image} imageSrc={image} price={price}/>
        ))}
      </StyledSimpleDiv>
    </>
  );
};

export default MainPage;
