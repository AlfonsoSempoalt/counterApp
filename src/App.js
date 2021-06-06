import React from "react";
//import React , { Fragment } from "react"; el importar el fragment y ponerlo en la etiqueta
//es opcional si lo dejamos vacío lo detecta como fragment
const FirstApp = () => {
  const saludo = "hola mundo";
  const human = {
    nombre: "juan",
    edad: 30,
  };
  return (
    <>
      <h1>{saludo}</h1>
      <p>Buenas a todos</p>
      <pre>{JSON.stringify(human,null,3)}</pre>
    </>
  );
};

export default FirstApp;
