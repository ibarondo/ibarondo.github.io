var products = [
    {
        "category": "Dresses",
        "categoryImg": "dress.png",
        "contents": [
            {
                "name": "Floral Print Dress",
                "code": "DR001",
                "price": "999",
                "image": "dress1.png"
            },
            {
                "name": "Off Shoulder Pleated Dress",
                "code": "DR002",
                "price": "950",
                "image": "dress2.png"
            },
            {
                "name": "Crisscross Tie Backless Dress",
                "code": "DR003",
                "price": "925",
                "image": "dress3.png"
            },
            {
                "name": "Mesh Strap Romantic Dress",
                "code": "DR004",
                "price": "899",
                "image": "dress4.png"
            },
            {
                "name": "Simple Strapless Dress",
                "code": "DR005",
                "price": "875",
                "image": "dress5.png"
            },
            {
                "name": "Black Maxi Dress",
                "code": "DR006",
                "price": "850",
                "image": "dress6.png"
            },
            {
                "name": "Brown Halter Neck Dress",
                "code": "DR007",
                "price": "825",
                "image": "dress7.png"
            },
            {
                "name": "Green Velvet Dress",
                "code": "DR008",
                "price": "799",
                "image": "dress8.png"
            },
            {
                "name": "High Slit Tie Dye Pink Dress",
                "code": "DR009",
                "price": "699",
                "image": "dress9.png"
            }
        ]
    },
    {
        "category": "Tops",
        "categoryImg": "top.png",
        "contents": [
            {
                "name": "Split Hem Tube Green Top",
                "code": "TP001",
                "price": "399",
                "image": "top1.png"
            },
            {
                "name": "Casual Sleeve Cropped Top",
                "code": "TP002",
                "price": "375",
                "image": "top2.png"
            },
            {
                "name": "Puff Sleeve",
                "code": "TP003",
                "price": "350",
                "image": "top3.png"
            },
            {
                "name": "Off-Shoulder Top",
                "code": "TP004",
                "price": "325",
                "image": "top4.png"
            },
            {
                "name": "Backless Halter Top",
                "code": "TP005",
                "price": "310",
                "image": "top5.png"
            },
            {
                "name": "Backless Bandana Top",
                "code": "TP006",
                "price": "299",
                "image": "top6.png"
            },
            {
                "name": "Knotted Front 2-In-1 T-Shirt",
                "code": "TP007",
                "price": "285",
                "image": "top7.png"
            },
            {
                "name": "Doll Bowknot Decor Puff Sleeve",
                "code": "TP008",
                "price": "270",
                "image": "top8.png"
            },
            {
                "name": "Y2K Leopard Halter Neck Top",
                "code": "TP009",
                "price": "250",
                "image": "top9.png"
            }
        ]
    },
    {
        "category": "Bags",
        "categoryImg": "bag.png",
        "contents": [
            {
                "name": "Minimalist Leather Shoulder Bag",
                "code": "BG001",
                "price": "399",
                "image": "bag1.png"
            },
            {
                "name": "Chain Strap Crossbody Bag",
                "code": "BG002",
                "price": "375",
                "image": "bag2.png"
            },
            {
                "name": "Trendy Crescent Hobo Bag",
                "code": "BG003",
                "price": "350",
                "image": "bag3.png"
            },
            {
                "name": "Mini Flap Top Handle Bag",
                "code": "BG004",
                "price": "325",
                "image": "bag4.png"
            },
            {
                "name": "Croc Embossed Bucket Bag",
                "code": "BG005",
                "price": "310",
                "image": "bag5.png"
            },
            {
                "name": "Soft Ruched Shoulder Purse",
                "code": "BG006",
                "price": "299",
                "image": "bag6.png"
            },
            {
                "name": "Shoulder Tote Bag",
                "code": "BG007",
                "price": "199",
                "image": "bag7.png"
            },
            {
                "name": "Minimalist Crocodile Embossed Bag",
                "code": "BG008",
                "price": "259",
                "image": "bag8.png"
            }
        ]
    },
    {
        "category": "Bottom",
        "categoryImg": "bottom.png",
        "contents": [
            {
                "name": "High Waist Pants",
                "code": "BT001",
                "price": "459",
                "image": "bottom1.png"
            },
            {
                "name": "Summer White Hem Skirt",
                "code": "BT002",
                "price": "399",
                "image": "bottom2.png"
            },
            {
                "name": "Floral Print A-Line Skirt",
                "code": "BT003",
                "price": "365",
                "image": "bottom3.png"
            },
            {
                "name": "Double Pocket Straight Pants",
                "code": "BT004",
                "price": "389",
                "image": "bottom4.png"
            },
            {
                "name": "Retro High Waist Mini Skirt",
                "code": "BT005",
                "price": "349",
                "image": "bottom5.png"
            },
            {
                "name": "High Waist Flared Pants",
                "code": "BT006",
                "price": "379",
                "image": "bottom6.png"
            },
            {
                "name": " Wide Leg Straight Pants",
                "code": "BT007",
                "price": "279",
                "image": "bottom7.png"
            },
            {
                "name": "Tweed High Waist Mini Skirt",
                "code": "BT008",
                "price": "359",
                "image": "bottom8.png"
            }
        ]
    }
]

let total = 0;
const taxRate = 0.01;

function loadCategories() {
    var categoriesContainer = document.getElementById("categories");

    products.forEach((product, index) => {
        categoriesContainer.innerHTML +=
            `<div onclick="loadProducts('` + index + `')" class="card-icon">
                <div class="icon">
                    <img src="assets/images/` + product.categoryImg + `">
                </div>
                <span>` + product.category + `</span>
            </div>`;
    });
}

var categoryIndex = 0;
function loadProducts(categoryIndex) {
    var productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";

    products[categoryIndex].contents.forEach(content => {
        productContainer.innerHTML += `<div onclick="addToOrder('` + content.code + `', '` + content.price + `')" class="card-item">
        <img src="assets/images/`+ content.image + `" alt="` + content.name + `" class="img-fluid">
        <div class="card-label">
            <span class="name">`+ content.name + `</span>
            <span class="price">₱`+ content.price + `</span>
        </div>
    </div>`
    });
};

function addToOrder(code, price) {
    var receiptContainer = document.getElementById("receipt");
    
    total = parseFloat(total) + parseFloat(price);

    receiptContainer.innerHTML += `<div class="card-order">
                                    <span>`+code+`</span>
                                    <span>₱`+price+`</span>
                                </div>`;

    updatePaymentSummary();
};

function updatePaymentSummary() {
   
    const subtotal = total;
    const vat = subtotal * taxRate;
    const totalPayment = subtotal + vat;

    document.getElementById("subtotal").innerText = "₱" + subtotal.toFixed(2);
    document.getElementById("VAT").innerText = "₱" + vat.toFixed(2);
    document.getElementById("totalPayment").innerText = "₱" + totalPayment.toFixed(2);
}

loadCategories();

