"use strict";

//MENU
var menuButtom = document.querySelector(".navigation__buttom");
var navNavigation = document.querySelector(".navigation__nav");
var navBackground = document.querySelector(".navigation__background");
var body = document.querySelector("body");
var cardBox = document.querySelector(".popup__card-box");
var cardContent = document.querySelector(".content-card");
var imgPopup = document.getElementById("img-popup");
var closeX = document.getElementById("close");
var popup = document.getElementById("popup");
var titleCard = document.querySelector(".card__boximg");
var popupTitle = document.getElementById("popup-title");
var navLink = document.querySelectorAll(".navigation__link"); //BUTTON MENU

menuButtom.addEventListener("click", function () {
  navNavigation.classList.toggle("nav-active");
  navBackground.classList.toggle("bg-active");
  menuButtom.classList.toggle("active-bar");
}); //NAV LINK

navLink.forEach(function (link) {
  link.addEventListener("click", function () {
    navNavigation.classList.remove("nav-active");
    navBackground.classList.remove("bg-active");
    menuButtom.classList.remove("active-bar");
  });
}); //POPUP CLOSE

closeX.addEventListener("click", function () {
  popup.classList.remove("visibility");
  cardBox.classList.remove("card-box-animation");
  body.style.overflow = "auto";
}); //POPUP IMG

var urlPopup = imgPopup.getAttribute("src"); //CARD - OPEN POPUP

cardContent.addEventListener("click", function (e) {
  if (e.target.classList[0] == "card__boximg") {
    //AÑADE Y QUITA CLASES
    cardBox.classList.add("card-box-animation");
    popup.classList.add("visibility"); //CAMBIA ATRIBUTO SRC

    var childCard = e.target;
    var imgSrc = childCard.children[0];
    var atribute = imgSrc.getAttribute("src");
    imgPopup.setAttribute("src", atribute); //BODY SCROLL

    body.style.overflow = "hidden"; //TEXT CONTENT CARD

    var titleCardBody = childCard.nextElementSibling.children[0].textContent; //TEXT CONTENT POPUP

    popupTitle.textContent = titleCardBody;
  }
});
