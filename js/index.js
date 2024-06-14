import { Cardcomponent } from "../component/CardComponent.js";
import { getData } from "../store/fetchAPI.js";

const renderTocardProduct = document.getElementById("RENDER_PRODUCT");
    try {
        const products = await getData("products");
        console.log("Here product data:", products);

        products.forEach(product => {
            renderTocardProduct.innerHTML += Cardcomponent(product);
        });
    } catch (error) {
        console.error("Error fetching products:", error);
    }