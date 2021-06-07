import React from "react";
//import React , { Fragment } from "react"; el importar el fragment y ponerlo en la etiqueta
//es opcional si lo dejamos vacío lo detecta como fragment
const FirstApp = ({gretings="Buenas",persona="User"}) => {

  return (
    <>
      <h1>{gretings} de {persona}</h1>
      <p>Buenas a todos</p>
    </>
  );
};

export default FirstApp;
