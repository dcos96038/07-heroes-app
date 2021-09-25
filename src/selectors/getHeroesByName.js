import {heroes} from "../data/heroes";

export const getHeroesByName = (name) => {
  if (!name) return [];

  const heroesFiltered = heroes.filter((hero) =>
    hero.superhero.toLowerCase().includes(name.toLowerCase()),
  );

  return heroesFiltered;
};
