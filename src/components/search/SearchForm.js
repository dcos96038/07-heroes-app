import React from "react";
import { useForm } from "../../hooks/useForm";

export const SearchForm = ({ handleSearch, query }) => {
  const [{ search }, handleInputChange] = useForm({
    search: query,
  });

  return (
    <form onSubmit={(e) => handleSearch(e, search)}>
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
          Buscar
        </button>
      </div>
    </form>
  );
};
