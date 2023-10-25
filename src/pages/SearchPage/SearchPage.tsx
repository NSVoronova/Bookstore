import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import book_cover from "../../assets/images/book_cover.jpg";
import { StyledDashLine, StyledOption, StyledSelect } from "./styledSearch";
import { StyledSimpleDiv } from "../../styledConstants";
import BookCard from "../../components/BookCard/BookCard";
import { StyledCardFullTitle } from "../../components/BookCardFull/styledCardFull";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_SEARCH } from "../../actions/actions";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import NothingFound from "./NothingFound/NothingFound";
import { StyledGrid } from "../MainPage/styledMainPage";

const SearchPage = () => {
  const isLoading = useSelector(({ isLoading }) => isLoading);
  const storageSearch = localStorage.getItem("search");
  const [dataSearch, setDataSearch] = useState(storageSearch || "");
  const [searchResult, setSearchResult] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedFilter, setSelectedFilter] = useState("Not filtered");
  const dispatch = useDispatch<ThunkDispatch<any, {}, AnyAction>>();

  useEffect(() => {
    if (storageSearch && storageSearch !== "") {
      dispatch(
        FETCH_SEARCH(
          storageSearch,
          setSearchResult,
          selectedCategory,
          selectedFilter
        )
      );
    }
  }, []);

  const handleSearch = () => {
    dispatch(
      FETCH_SEARCH(
        dataSearch,
        setSearchResult,
        selectedCategory,
        selectedFilter
      )
    );
    localStorage.setItem("search", dataSearch);
  };
  console.log(searchResult);
  return (
    <>
      <StyledSimpleDiv>
        <Input
          onChange={setDataSearch}
          value={dataSearch || ""}
          onClick={handleSearch}
        />
      </StyledSimpleDiv>
      <StyledSimpleDiv $between style={{ marginTop: "60px" }}>
        <StyledCardFullTitle>
          Results "<span>{dataSearch}</span>"
        </StyledCardFullTitle>
        <StyledSimpleDiv $between>
          <StyledSelect
            $categories
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <StyledOption value="All">All categories</StyledOption>
            <StyledOption value="Romance">Romance</StyledOption>
            <StyledOption value="Fantasy">Fantasy</StyledOption>
            <StyledOption value="History">History</StyledOption>
            <StyledOption value="Biography">Biography</StyledOption>
            <StyledOption value="Fiction">Fiction</StyledOption>
          </StyledSelect>
          <StyledSelect
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <StyledOption value="Not filtered">Not filtered</StyledOption>
            <StyledOption value="Relevance">Relevance</StyledOption>
            <StyledOption value="Newest">Newest</StyledOption>
          </StyledSelect>
        </StyledSimpleDiv>
      </StyledSimpleDiv>
      <StyledDashLine />
      {isLoading ? (
        <Loader />
      ) : Array.isArray(searchResult) ? (
        <StyledGrid>
          {Array.isArray(searchResult) &&
            searchResult.map((book) => (
              <BookCard
                key={book.id}
                id={book.id}
                imageSrc={
                  book.volumeInfo.imageLinks?.medium ||
                  book.volumeInfo.imageLinks?.small ||
                  book.volumeInfo.imageLinks?.thumbnail ||
                  book_cover
                }
                price={book.saleInfo?.listPrice?.amount || 30}
              />
            ))}
        </StyledGrid>
      ) : (
        <NothingFound str="Nothing was found :\" />
      )}
    </>
  );
};

export default SearchPage;
