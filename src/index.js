import React from "react";
import ReactDOM from "react-dom";
import Primeiro from "./components/Primeiro"
import Hello from "./components/Bemvindo"

const el = document.getElementById("root")

ReactDOM.render(
  <div class="app">
  <Hello/>,
  <Primeiro aluno="Roberto" nota="9.5"></Primeiro>
  </div>
  , el)