import React from "react";
import ReactDOM from "react-dom";
import FirstApp from "./App";

import './index.css'

 const $divRoot = document.getElementById("root");

ReactDOM.render(<FirstApp gretings="Buenas dias" persona='Alfonso' />, $divRoot);
