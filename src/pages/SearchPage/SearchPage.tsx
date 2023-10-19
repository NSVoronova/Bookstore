import React, { useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import book_cover from "../../assets/images/book_cover.jpg";
import {
  StyledDashLine,
  StyledOption,
  StyledSelect,
} from "./styledSearch";
import { StyledSimpleDiv } from "../../styledConstants";
import BookCard from "../../components/BookCard/BookCard";
import { fetchSearch } from "../../helpers";

const SearchPage = () => {
  // const location = useLocation();
  const storageSearch = localStorage.getItem("search")
  const [dataSearch, setDataSearch] = useState(storageSearch || "");
  const [searchResult, setSearchResult] = useState("");

  useEffect(() => {
    if(storageSearch && storageSearch !== "") {
      fetchSearch(storageSearch, setSearchResult)
    }
  }, [])

  const handleSearch = () => {
   fetchSearch(dataSearch, setSearchResult)
   localStorage.setItem("search", dataSearch);
  }
  return (
    <>
      <StyledSimpleDiv>
        <Input onChange={setDataSearch} value={dataSearch || ""} onClick={handleSearch} />
      </StyledSimpleDiv>
      <StyledSimpleDiv $between style={{ marginTop: "60px" }}>
        <div>
          Results "<span>{dataSearch}</span>"
        </div>
        <StyledSimpleDiv $between>
          <StyledSelect $categories defaultValue="Categories">
          <StyledOption value="Categories" disabled hidden>
                Categories
              </StyledOption>
              <StyledOption  value="option1">All</StyledOption>
              <StyledOption value="option1">Romance</StyledOption>
              <StyledOption value="option2">Fantasy</StyledOption>
              <StyledOption value="option2">History</StyledOption>
              <StyledOption value="option2">Biography</StyledOption>
              <StyledOption value="option2">Fiction</StyledOption>
          </StyledSelect>
            <StyledSelect defaultValue="Filter By">
              <StyledOption value="Filter By" disabled hidden>
                Filter By
              </StyledOption>
              <StyledOption  value="option1">Not filtered</StyledOption>
              <StyledOption value="option1">Relevance</StyledOption>
              <StyledOption value="option2">Newest</StyledOption>
            </StyledSelect>
        </StyledSimpleDiv>
      </StyledSimpleDiv>
      <StyledDashLine />
      <StyledSimpleDiv $between>
        {Array.isArray(searchResult) &&
          searchResult.map((book) => (
            <BookCard
              key={book.id}
              id={book.id}
              imageSrc={book.volumeInfo.imageLinks?.medium ||book.volumeInfo.imageLinks?.small || book.volumeInfo.imageLinks?.thumbnail || book_cover}
              price={book.saleInfo?.listPrice?.amount || 30}
            />
          ))}
      </StyledSimpleDiv>
    </>
  );
};

export default SearchPage;
