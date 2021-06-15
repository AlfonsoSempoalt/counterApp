import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("pruebas dentro del archivo de funciones.js", () => {
  test("getUser should return an object", () => {
    const userTest = { uid: "ABC123", username: "El_Papi1502" };

    const user = getUser();
    expect(user).toEqual(userTest);
  });

  test("getActiveUser should return an object of an active user", () => {
    const userTest = { uid: "ABC567", username: "Alfonso" };
    const user = getUsuarioActivo("Alfonso");

    expect(user).toEqual(userTest);
  });
});
