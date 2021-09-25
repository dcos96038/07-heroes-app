import React from "react";

import {useForm} from "../../hooks/useForm";

export const SearchForm = ({handleSearch, query}) => {
  const [{search}, handleInputChange] = useForm({
    search: query,
  });

  return (
    <form onSubmit={(e) => handleSearch(e, search)}>
      <div className="d-flex">
        <input
          autoComplete="off"
          className="form-control me-2"
          name="search"
          placeholder="Find your hero"
          type="text"
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
