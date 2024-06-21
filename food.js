//navigation bar js

const menubtn = document.querySelector(".manu-icon span");
const items = document.querySelector("ul");

menubtn.onclick = ()=> {
    items.classList.toggle("active");

}