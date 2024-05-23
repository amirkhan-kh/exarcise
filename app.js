const result = document.querySelector("#result");
let products = [
    {
        id:1,
        name: 'pro1',
        price:200,
        photoURL: "https://picsum.photos/id/237/200/300"

    },
    {
        id:2,
        name: 'pro2',
        price:100,
        photoURL: "https://picsum.photos/id/238/200/300"

    },
    {
        id:3,
        name: 'pro3',
        price:400,
        photoURL: "https://picsum.photos/id/239/200/300"

    },
]
function renderProduct() {
   result.innerHTML = ""
    products.map(product => {
        const wrapperLi = document.createElement('li');
        const img = document.createElement('img');
        const h2 = document.createElement('h2');
        img.src = product.photoURL
        h2.innerText = product.name;
        wrapperLi.append(img, h2)
        wrapperLi.innerHTML +=`
        <div class="button-wrapper">
            <button data-product-id="${product.id}" class="delete-btn">Delete</button>
            <button>Sell</button>
        </div>
        `
        result.appendChild(wrapperLi)
    })
}
renderProduct()