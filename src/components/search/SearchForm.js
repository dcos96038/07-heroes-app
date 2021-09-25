import React from "react";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { useLocation } from "react-router";

export const SearchForm = ({ handleSearch }) => {
  const location = useLocation;
  const { q: query = "" } = queryString.parse(location.search);

  const [{ search }, handleInputChange] = useForm({
    search: query,
  });

  return (
    <form
      onSubmit={(e) => handleSearch(e, search)}
      className="animate__animated animate__fadeInLeft"
    >
      <div className="d-flex">
        <input
          type="text"
          placeholder="Find your hero"
          className="form-control me-2"
          name="search"
          autoComplete="off"
          value={search}
          onChange={handleInputChange}
        />

        <button className="btn btn-outline-primary" type="submit">
          Search...
        </button>
      </div>
    </form>
  );
};
