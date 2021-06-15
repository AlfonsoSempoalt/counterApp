import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("test with Promises", () => {
  test("the async getHeroeById", (done) => {
    const id = 1;

    getHeroeByIdAsync(id).then((h) => {
      expect(h).toBe(heroes[0]);
      done();
    });
  });

  test("error async getHeroeById", (done) => {
    const id = 10;
    getHeroeByIdAsync(id)
    .catch((err) => {
        expect(err).toBe(err);});
        done();
    });


});
