const imgsDisplay = document.querySelector(".imgs-display");
const image = document.querySelector(".image");
const thumbnails = document.querySelector(".thumbnails");
const closeicon = document.querySelector(".closeicon");
const cartImage = document.querySelector(".cartimage");
const cartContainer = document.querySelector(".cart-container");
const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
Zero = document.querySelector(".Zero");
const iconCart = document.querySelector(".icon-cart")
const containerImageDisplay = document.querySelectorAll('.container-image-display')
const image1 = document.querySelector('.image1')
const cartNotif = document.querySelector(".cart-notif");
const emptyCart = document.querySelector(".emptycart-container");
const slides = document.getElementsByClassName("slide");
const slidesimage = document.getElementsByClassName("slide-image");
const menu = document.querySelector(".nav-menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");
const popup = document.querySelectorAll('.popup')
const display = document.querySelector(".display")
var image2 = document.querySelector(".image2")
const iconDisplay_img = document.querySelector(".icon-display-img")
var images = ['image-product-1.jpg', 'image-product-2.jpg', 'image-product-3.jpg', 'image-product-4.jpg']
var i = 0;



const preview = function() {
  thumbnails.classList.add('displayflex')
}

closeicon.addEventListener("click", function(){
  thumbnails.classList.remove("displayflex")
});

iconCart.addEventListener("click", function() {
  cartContainer.classList.toggle("displayblock")
})

menuBtn.addEventListener('click', () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
})

const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closeNav)

function prev() {
   if(i <= 0) i = images.length;
   i--;
   return setImg();
}

function next() {
   if( i >= images.length-1) i = -1;
   i++;
   return setImg();
}

function toSlide(i) {
  image2.setAttribute('src', 'images/' + images[i]);
}

function setImg() {
  return image2.setAttribute('src', 'images/' + images[i]);
}


function prev1() {
  if(i <= 0) i = images.length;
  i--;
  return setImg1();
}

function next1() {
  if( i >= images.length-1) i = -1;
  i++;
  return setImg1();
}

function setImg1() {
  return image1.setAttribute('src', 'images/' + images[i]);
}

let a = 0;

plus.addEventListener("click", ()=>{
  a++;
  Zero.innerText = a;
  console.log(a);
});

minus.addEventListener("click", ()=>{
  if(a > 0){
    a--;

  Zero.innerText = a;
  console.log(a);
  }
});