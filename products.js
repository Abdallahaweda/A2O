function getData() {
  let products = {
    products: [
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/1/1.jpg",
          "https://i.dummyjson.com/data/products/1/2.jpg",
          "https://i.dummyjson.com/data/products/1/3.jpg",
          "https://i.dummyjson.com/data/products/1/4.jpg",
          "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
      },
      {
        id: 2,
        title: "iPhone X",
        description:
          "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/2/1.jpg",
          "https://i.dummyjson.com/data/products/2/2.jpg",
          "https://i.dummyjson.com/data/products/2/3.jpg",
          "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
      },
      {
        id: 3,
        title: "Samsung Universe 9",
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
      },
      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: 280,
        discountPercentage: 17.91,
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/4/1.jpg",
          "https://i.dummyjson.com/data/products/4/2.jpg",
          "https://i.dummyjson.com/data/products/4/3.jpg",
          "https://i.dummyjson.com/data/products/4/4.jpg",
          "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        ],
      },
      {
        id: 5,
        title: "Huawei P30",
        description:
          "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        price: 499,
        discountPercentage: 10.58,
        rating: 4.09,
        stock: 32,
        brand: "Huawei",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/5/1.jpg",
          "https://i.dummyjson.com/data/products/5/2.jpg",
          "https://i.dummyjson.com/data/products/5/3.jpg",
        ],
      },
      {
        id: 6,
        title: "MacBook Pro",
        description:
          "MacBook Pro 2021 with mini-LED display may launch between September, November",
        price: 1749,
        discountPercentage: 11.02,
        rating: 4.57,
        stock: 83,
        brand: "Apple",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/6/thumbnail.png",
        images: [
          "https://i.dummyjson.com/data/products/6/1.png",
          "https://i.dummyjson.com/data/products/6/2.jpg",
          "https://i.dummyjson.com/data/products/6/3.png",
          "https://i.dummyjson.com/data/products/6/4.jpg",
        ],
      },
      {
        id: 7,
        title: "Samsung Galaxy Book",
        description:
          "Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched",
        price: 1499,
        discountPercentage: 4.15,
        rating: 4.25,
        stock: 50,
        brand: "Samsung",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/7/1.jpg",
          "https://i.dummyjson.com/data/products/7/2.jpg",
          "https://i.dummyjson.com/data/products/7/3.jpg",
          "https://i.dummyjson.com/data/products/7/thumbnail.jpg",
        ],
      },
      {
        id: 8,
        title: "Microsoft Surface Laptop 4",
        description:
          "Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.",
        price: 1499,
        discountPercentage: 10.23,
        rating: 4.43,
        stock: 68,
        brand: "Microsoft Surface",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/8/1.jpg",
          "https://i.dummyjson.com/data/products/8/2.jpg",
          "https://i.dummyjson.com/data/products/8/3.jpg",
          "https://i.dummyjson.com/data/products/8/4.jpg",
          "https://i.dummyjson.com/data/products/8/thumbnail.jpg",
        ],
      },
      {
        id: 9,
        title: "Infinix INBOOK",
        description:
          "Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty",
        price: 1099,
        discountPercentage: 11.83,
        rating: 4.54,
        stock: 96,
        brand: "Infinix",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/9/1.jpg",
          "https://i.dummyjson.com/data/products/9/2.png",
          "https://i.dummyjson.com/data/products/9/3.png",
          "https://i.dummyjson.com/data/products/9/4.jpg",
          "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
        ],
      },
      {
        id: 10,
        title: "HP Pavilion 15-DK1056WM",
        description:
          "HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10",
        price: 1099,
        discountPercentage: 6.18,
        rating: 4.43,
        stock: 89,
        brand: "HP Pavilion",
        category: "laptops",
        thumbnail: "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        images: [
          "https://i.dummyjson.com/data/products/10/1.jpg",
          "https://i.dummyjson.com/data/products/10/2.jpg",
          "https://i.dummyjson.com/data/products/10/3.jpg",
          "https://i.dummyjson.com/data/products/10/thumbnail.jpeg",
        ],
      },
      {
        id: 26,
        title: "Plant Hanger For Home",
        description:
          "Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf",
        price: 41,
        discountPercentage: 17.86,
        rating: 4.08,
        stock: 131,
        brand: "Boho Decor",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/26/1.jpg",
          "https://i.dummyjson.com/data/products/26/2.jpg",
          "https://i.dummyjson.com/data/products/26/3.jpg",
          "https://i.dummyjson.com/data/products/26/4.jpg",
          "https://i.dummyjson.com/data/products/26/5.jpg",
          "https://i.dummyjson.com/data/products/26/thumbnail.jpg",
        ],
      },
      {
        id: 27,
        title: "Flying Wooden Bird",
        description:
          "Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm",
        price: 51,
        discountPercentage: 15.58,
        rating: 4.41,
        stock: 17,
        brand: "Flying Wooden",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/27/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/27/1.jpg",
          "https://i.dummyjson.com/data/products/27/2.jpg",
          "https://i.dummyjson.com/data/products/27/3.jpg",
          "https://i.dummyjson.com/data/products/27/4.jpg",
          "https://i.dummyjson.com/data/products/27/thumbnail.webp",
        ],
      },
      {
        id: 28,
        title: "3D Embellishment Art Lamp",
        description:
          "3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)",
        price: 20,
        discountPercentage: 16.49,
        rating: 4.82,
        stock: 54,
        brand: "LED Lights",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/28/1.jpg",
          "https://i.dummyjson.com/data/products/28/2.jpg",
          "https://i.dummyjson.com/data/products/28/3.png",
          "https://i.dummyjson.com/data/products/28/4.jpg",
          "https://i.dummyjson.com/data/products/28/thumbnail.jpg",
        ],
      },
      {
        id: 29,
        title: "Handcraft Chinese style",
        description:
          "Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate",
        price: 60,
        discountPercentage: 15.34,
        rating: 4.44,
        stock: 7,
        brand: "luxury palace",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/29/thumbnail.webp",
        images: [
          "https://i.dummyjson.com/data/products/29/1.jpg",
          "https://i.dummyjson.com/data/products/29/2.jpg",
          "https://i.dummyjson.com/data/products/29/3.webp",
          "https://i.dummyjson.com/data/products/29/4.webp",
          "https://i.dummyjson.com/data/products/29/thumbnail.webp",
        ],
      },
      {
        id: 30,
        title: "Key Holder",
        description:
          "Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality",
        price: 30,
        discountPercentage: 2.92,
        rating: 4.92,
        stock: 54,
        brand: "Golden",
        category: "home-decoration",
        thumbnail: "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        images: [
          "https://i.dummyjson.com/data/products/30/1.jpg",
          "https://i.dummyjson.com/data/products/30/2.jpg",
          "https://i.dummyjson.com/data/products/30/3.jpg",
          "https://i.dummyjson.com/data/products/30/thumbnail.jpg",
        ],
      },
    ],
    total: 100,
    skip: 0,
    limit: 30,
  };

  return products.products;
}
var products = getData();
let cart = [];
let dad = document.getElementById("cold");

function drow(product) {
  let div = document.createElement("div");
  let small_div = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let span = document.createElement("span");
  let p = document.createElement("p");
  let a = document.createElement("a");

  img.src = product.thumbnail;
  h3.innerHTML = product.title;
  span.innerHTML = product.price + "$";
  p.innerHTML = product.description;
  a.innerText = "Add";
  a.style = "cursor:pointer";

  a.onclick = function () {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  //   image
  img.setAttribute("class", "tm-list-item-img");
  small_div.setAttribute("class", "tm-black-bg tm-list-item-text");
  div.setAttribute("class", "tm-list-item");

  //   h3 and span
  h3.setAttribute("class", "tm-list-item-name");
  span.setAttribute("class", "tm-list-item-price");
  h3.append(span);

  p.setAttribute("class", "tm-list-item-description");
  a.setAttribute("class", "tm-tab-link");

  small_div.append(h3, p, a);
  div.append(img, small_div);
  dad.appendChild(div);
}

function show() {
  dad.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    drow(products[i]);
    //   drow(products);
  }
}

function categoryup(category) {
  dad.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    if (products[i].category == category) {
      drow(products[i]);
    }
  }
}
