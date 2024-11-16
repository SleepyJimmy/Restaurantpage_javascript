import { loadTab1 } from "./tab1.js";
import { loadTab2 } from "./tab2.js";
import "./styles.css";

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");

tab1.addEventListener("click", () => {
    loadTab1();
});

tab2.addEventListener("click", () => {
    loadTab2();
});