function getCart() {
  let arr = JSON.parse(localStorage.getItem("cart"));

  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");
    let small_div = document.createElement("div");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
    let span = document.createElement("span");
    let p = document.createElement("p");
    let baba = document.getElementById("baba");

    img.src = arr[i].thumbnail;
    h3.innerHTML = arr[i].title;
    span.innerHTML = arr[i].price + "$";
    p.innerHTML = arr[i].description;

    //   image
    img.setAttribute("class", "tm-list-item-img");
    small_div.setAttribute("class", "tm-black-bg tm-list-item-text");
    div.setAttribute("class", "tm-list-item");

    //   h3 and span
    h3.setAttribute("class", "tm-list-item-name");
    span.setAttribute("class", "tm-list-item-price");
    h3.append(span);

    p.setAttribute("class", "tm-list-item-description");

    small_div.append(h3, p);
    div.append(img, small_div);
    baba.appendChild(div);
  }
}
