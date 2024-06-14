import { getData } from "../store/fatchApi.js";
import { CardComponent } from "../components/CardComponent.js";

const renderArea = document.querySelector("#renderArea");
const url = "http://127.0.0.1:5500/data/products.json";

async function fetchData() {
  try {
    const response = await fetch(url);
    const products = await response.json();
    products.forEach((product) => {
      renderArea.innerHTML += CardComponent(product);
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
