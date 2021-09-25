import React, {useMemo} from "react";

import {getHeroesByPublisher} from "../../selectors/getHeroesByPublisher";

import {HeroCard} from "./HeroCard";

export const HeroList = ({publisher}) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="d-flex row justify-content-center align-items-center">
      {heroes.map((hero) => (
        <div key={hero.id} className="col-lg-4 m-2 animate__animated animate__fadeIn">
          <HeroCard {...hero} />
        </div>
      ))}
    </div>
  );
};
