
import { Cardcomponent } from "../components/CardComponent.js";
import { getData } from "../store/fetchAPI.js";


const renderTocardProduct = document.getElementById("RENDER_PRODUCT");

    const products = await getData("products")
    
    products.map(product => {

        renderTocardProduct.innerHTML += Cardcomponent(product);

    });


    
