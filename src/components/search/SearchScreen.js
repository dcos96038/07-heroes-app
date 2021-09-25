import React, { useState } from "react";

import { HeroCard } from "../heroes/HeroCard";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { SearchForm } from "./SearchForm";

export const SearchScreen = ({ history }) => {
  const [heroesFiltered, setHeroesFiltered] = useState([]);

  const handleSearch = (e, search) => {
    e.preventDefault();
    history.push(`?q=${search}`);
    const heroes = getHeroesByName(search);
    setHeroesFiltered(heroes);
  };

  return (
    <div>
      <div className="row">
        <div className="col-5">
          <h4>SearchForm</h4>
          <hr />

          <SearchForm handleSearch={handleSearch} />
        </div>
        {heroesFiltered.length > 0 && (
          <div className="col-7">
            <h4>Resultados:</h4>
            <hr />
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
