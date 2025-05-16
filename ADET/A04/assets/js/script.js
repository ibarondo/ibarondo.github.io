var products = [];
var categories = [];

const getAllCategories = async () => {
    fetch('http://localhost/ibarondo.github.io/ADET/A06/categories.php')
    .then(response => response.json())
    .then(data => {
        categories = data;
        loadCategories();
    });
}

const getAllProducts = async (categoryID)=> {
    fetch('http://localhost/ibarondo.github.io/ADET/A06/products.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ categoryID })
    })
    .then(response => response.json())
    .then(data => {
        products = data;
        loadProducts();
    });
}

getAllCategories();


let total = 0;
const taxRate = 0.01;

// loading categories
function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    categories.forEach((category) => {
        categoriesContainer.innerHTML +=
            `<div onclick="getAllProducts('` + category.categoryID + `')" class="card-icon">
                <div class="icon">
                    <img src="assets/images/products/` + category.categoryImage + `">
                </div>
                <span>` + category.categoryName + `</span>
            </div>`;
    });
}

// loading products
function loadProducts(categoryID) {
    var productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";

    products.forEach(product => {
        productContainer.innerHTML += `<div onclick="addToOrder('` + product.code + `', '` + product.price + `')" class="card-item">
        <img src="assets/images/products/`+ product.image + `" alt="` + product.name + `" class="img-fluid">
        <div class="card-label">
            <span class="name">`+ product.name + `</span>
            <span class="price">₱`+ product.price + `</span>
        </div>
    </div>`
    });
};

// add to order 
function addToOrder(code, price) {
    var receiptContainer = document.getElementById("receipt");

    total = parseFloat(total) + parseFloat(price);

    receiptContainer.innerHTML += `<div class="card-order">
                                    <span>`+ code + `</span>
                                    <span>₱`+ price + `</span>
                                </div>`;

    updatePaymentSummary();
};

// update summay or total payment
function updatePaymentSummary() {

    const subtotal = total;
    const vat = subtotal * taxRate;
    const totalPayment = subtotal + vat;

    document.getElementById("subtotal").innerText = "₱" + subtotal.toFixed(2);
    document.getElementById("VAT").innerText = "₱" + vat.toFixed(2);
    document.getElementById("totalPayment").innerText = "₱" + totalPayment.toFixed(2);
}

// changing logo depends on system theme
var body = document.getElementById("body");
var dark = document.getElementById("dark");
var light = document.getElementById("light");

function setThemeAndLogo(isDark) {
    const theme = isDark ? "dark" : "light";
    body.setAttribute("data-bs-theme", theme);

    if (isDark) {
        dark.style.display = "none";
        light.style.display = "block";
    } else {
        dark.style.display = "block";
        light.style.display = "none";
        
    }
}

setThemeAndLogo(window.matchMedia('(prefers-color-scheme: dark)').matches);

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    setThemeAndLogo(event.matches);
});


loadCategories();

