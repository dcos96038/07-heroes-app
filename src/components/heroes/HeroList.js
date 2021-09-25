import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  // const heroes = getHeroesByPublisher(publisher);

  return (
    <div className="d-flex row justify-content-center align-items-center">
      {heroes.map((hero) => (
        <div
          className="col-lg-4 m-2 animate__animated animate__fadeIn"
          key={hero.id}
        >
          <HeroCard {...hero} />
        </div>
      ))}
    </div>
  );
};
