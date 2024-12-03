import { loadTab1 } from "./tab1.js";
import { loadTab2 } from "./tab2.js";
import { loadTab3 } from "./tab3.js";
import "./styles.css";

let tab1 = document.getElementById("tab1");
let tab2 = document.getElementById("tab2");
let tab3 = document.getElementById("tab3");

loadTab1();

tab1.addEventListener("click", () => {
    loadTab1();
});

tab2.addEventListener("click", () => {
    loadTab2();
});

tab3.addEventListener("click", () => {
    loadTab3();
});