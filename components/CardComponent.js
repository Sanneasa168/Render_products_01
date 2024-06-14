export const  CardComponent = (product) => {
    const {
      image,
      title,
      price,
      description,
      rating: { rate, count } = {}
    } = product;
    
    return `
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
          <img class="p-8 rounded-t-lg h-[200px] w-auto object-cover mx-auto" src="${
            image || "../assets/placeholder-1.webp"
          }" alt="product image" />
      </a>
      <div class="px-5 pb-5">
          <a href="#">
              <h5 class="line-clamp-1 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${
                title || "No product title"
              }</h5>
          </a>
          <div class="flex items-center justify-between mt-2">
            <span class="text-lg font-bold text-gray-900 dark:text-white">${
              price ? `$${price}` : "Unavailable"
            }</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">${
              rate ? rate.toFixed(1) : "N/A"
            }</span>
          </div>
          <p class="text-gray-700 dark:text-gray-400 mt-2 line-clamp-3">${
            description || "No description available."
          }</p>
          <div class="flex items-center mt-2.5 mb-5">
              <span class="text-gray-600 dark:text-gray-400 text-sm">(${
                count || 0
              } reviews)</span>
          </div>
      </div>
      <div class="flex items-center justify-between px-5 pb-5">
          <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
      </div>
    </div>
    `;
  };
  