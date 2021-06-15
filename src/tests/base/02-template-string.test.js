import { getSaludo } from "../../base/02-template-string";

describe("test in templateStrings.js", () => {
  test("getSaludo must return hola alfonso", () => {
    const name = "Alfonso";
    const saludo = getSaludo(name);
    expect(saludo).toBe("Hola " + name);
  });

  test("getSaludo must return hola carlos, no args method", () => {
      expect(getSaludo()).toBe('Hola Carlos');
  });
});
