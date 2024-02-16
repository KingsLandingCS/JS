const list = document.querySelector(".list");


async function fetchListOfData() {

    try {

        const response = await fetch("https://dummyjson.com/quotes/random",
            {
                method: "GET"
            })

        const result = await response.json();

        console.log(result);


        if (result && result.products && result.products.length) renderProducts(result.products)

    } catch (e) {

        console.log(e);
    }

}

function renderProducts(getProducts) {

    list.innerHTML = getProducts.map((item) => `<p>${item.title}</p>`).join(" ");
}  


fetchListOfData();