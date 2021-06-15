import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp.js";
import heroes from "../../data/heroes.js";

describe("tests to findByID", () => {
  test("must return a hero by id", () => {
    const id = 5;
    const hero = getHeroeById(id);
    const heroData = heroes.find((hero) => hero.id === id);
    expect(hero).toEqual(heroData);
  });

  test("must return undefined if the asked hero does not exist", () => {
    const id = 15;
    const hero = getHeroeById(id);
    expect(hero).toBe(undefined);
  });
});

describe("tests to getHeroesByOwner", () => {
  test("must return the heroes of DC", () => {
    const owner = "DC";
    const heroesData = heroes.filter((hero) => hero.owner === owner);
    const heroesByOwner = getHeroesByOwner(owner);
    expect(heroesByOwner).toEqual(heroesData);
  });

  test('must return the right size of the heroes in the array', () => {
    const owner = "Marvel";
    const heroesData = heroes.filter((hero) => hero.owner === owner);
    const heroesByOwner = getHeroesByOwner(owner);
    expect(heroesByOwner.length).toBe(heroesData.length);
  });
});
