import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  return <SearchBar />;
}

function SearchBar() {
  const initialSuggestions = [
    "야채",
    "과일",
    "유제품",
    "오늘의 특가",
    "오늘의 공구",
    "베스트 상품",
    "신선 식품",
  ];

  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const onSuggestionsFetchRequested = ({ value }) => {
    const filteredSuggestions = initialSuggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {};

  const renderSuggestion = (suggestion) => {
    return <div>{suggestion}</div>;
  };

  const handleSearch = () => {
    console.log("Search:", value);
  };

  return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={(suggestion) => suggestion}
        renderSuggestion={renderSuggestion}
        inputProps={{
          placeholder: "찾으시는 상품을 입력해주세요",
          value: value,
          onChange: (event, { newValue }) => setValue(newValue),
        }}
      />
      <button onClick={handleSearch}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
}
