import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = ({ history }) => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);

  if (!hero) {
    return <Redirect to="/" />;
  }

  const handleReturn = () => {
    history.length > 0 && history.goBack();
  };

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`../assets/heroes/${heroId}.jpg`}
          alt={heroId}
          className="img-thumbnail animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="col md-8 ps-5 animate__animated animate__fadeIn">
        <h3 className="display-6 text-start">{hero.superhero}</h3>
        <p>
          <small className="text-sm-start text-muted">{hero.publisher}</small>
        </p>
        <hr />
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Alter ego: </strong>
            {hero.alter_ego}
          </li>
          <li className="list-group-item">
            <strong>Primera aparicion: </strong>
            {hero.first_appearance}
          </li>
          {hero.characters && (
            <li className="list-group-item">
              <strong>Personajes: </strong>
              {hero.characters}
            </li>
          )}
          <button
            className="btn btn-outline-info mt-3 fw-normal text-black w-25 ms-0"
            onClick={handleReturn}
          >
            Regresar
          </button>
        </ul>
      </div>
    </div>
  );
};
