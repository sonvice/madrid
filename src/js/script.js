//MENU
const menuButtom = document.querySelector(".navigation__buttom")
const navNavigation = document.querySelector(".navigation__nav")
const navBackground = document.querySelector(".navigation__background")

const body = document.querySelector("body")
const cardBox = document.querySelector(".popup__card-box")
const cardContent = document.querySelector(".content-card")
const imgPopup = document.getElementById("img-popup")
const closeX = document.getElementById("close")
const popup = document.getElementById("popup")
const titleCard = document.querySelector(".card__boximg")
const popupTitle = document.getElementById("popup-title")
const navLink = document.querySelectorAll(".navigation__link")

//BUTTON MENU
    menuButtom.addEventListener("click", ()=>{
        navNavigation.classList.toggle("nav-active")
        navBackground.classList.toggle("bg-active")
        menuButtom.classList.toggle("active-bar")
    })
//NAV LINK
navLink.forEach(link =>{
    link.addEventListener("click", ()=>{
        navNavigation.classList.remove("nav-active")
        navBackground.classList.remove("bg-active")
        menuButtom.classList.remove("active-bar")
    })
})

//POPUP CLOSE
    closeX.addEventListener("click", ()=>{
        popup.classList.remove("visibility")
        cardBox.classList.remove("card-box-animation")
        body.style.overflow="auto";
    })

//POPUP IMG
let urlPopup = imgPopup.getAttribute("src")

//CARD - OPEN POPUP
cardContent.addEventListener("click", (e)=>{
    if(e.target.classList[0] == "card__boximg"){
        //AÑADE Y QUITA CLASES
        cardBox.classList.add("card-box-animation")
        popup.classList.add("visibility")
        //CAMBIA ATRIBUTO SRC
        let childCard = e.target;
        let imgSrc = childCard.children[0]
        let atribute = imgSrc.getAttribute("src")
        imgPopup.setAttribute("src", atribute)
        //BODY SCROLL
        body.style.overflow="hidden";
        //TEXT CONTENT CARD
        let titleCardBody = childCard.nextElementSibling.children[0].textContent 
        //TEXT CONTENT POPUP
        popupTitle.textContent = titleCardBody

    }
    
})
