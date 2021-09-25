import React from "react";
import {Link} from "react-router-dom";

export const HeroCard = ({id, superhero, alter_ego, first_appearance}) => {
  return (
    <div className="card ms-3 animate__animated animate__fadeIn" style={{maxWidth: "540px"}}>
      <div className="row">
        <div className="col-sm-4">
          <img alt={superhero} className="card-img h-100" src={`./assets/heroes/${id}.jpg`} />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{superhero}</h5>
            <p className="card-text">{alter_ego}</p>
            <p className="card-text">
              <small className="text-muted">{first_appearance}</small>
            </p>
            <Link to={`./hero/${id}`}>Mas...</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
