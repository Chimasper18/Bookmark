const menuOpen =document.querySelector(".ri-menu-line")
const menuClose= document.querySelector(".ri-close-line")
const menu= document.querySelector("nav ul")
const menuItems = document.querySelectorAll("nav ul li")

menuOpen.addEventListener("click",function(){
    menu.style.top = "50%"
    menuOpen.style.display = "none"
    menuClose.style.display = "block"
})
function closeMenu(){
    menu.style.top = "-70%"
    menuOpen.style.display = "block"
    menuClose.style.display = "none"
}

menuClose.addEventListener("click",function(){
    closeMenu()
//     menu.style.top = "-40%"
//     menuOpen.style.display = "block"
//     menuClose.style.display = "none"
 })

menuItems.forEach(function(menuItem){
    menuItem.addEventListener("click",function(){
        closeMenu()
    //     menu.style.top = "-40%"
    //     menuOpen.style.display = "block"
    //     menuClose.style.display = "none"
    })
})

