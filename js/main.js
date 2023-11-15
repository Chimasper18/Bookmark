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

const faqs = document.querySelectorAll(".faq")

faqs.forEach(function(faq){
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("show")
        faq.classList.toggle("arrow")
    })
})
// arrowOpen.addEventListener("click",function(){
//     answerOpen.style.display = "block"
//     arrowOpen.style.transform = "rotate(180deg)"
// })

const changeMenu = document.querySelectorAll(".clickbuttondiv .clickbutton")

const writeUp = document.querySelector(".gen")

changeMenu.forEach(function(header){
    header.addEventListener("click", function(e){
        if (e.target.innerText === "Simple bookmarking"){
            
            writeUp.innerHTML = `
            
            
            <img class="unique" src="/images/illustration-features-tab-1.svg" alt="">
            <div class="middiv">
                <h2>Bookmark in one click</h2>
                <p>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                  </p>
                  <button class="button3">More Info</button>
            </div>
        
            `
        }
        else if (e.target.innerText === "Speedy Searching"){
            writeUp.innerHTML = `
            
            
            <img class="unique" src="/images/illustration-features-tab-2.svg" alt="">
            <div class="middiv">
                <h2>Bookmark in one click</h2>
                <p>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                  </p>
                  <button class="button3">More Info</button>
            </div>
        
            `
        }

        else if (e.target.innerText === "Easy Sharing"){
            writeUp.innerHTML = `
            
            
            <img class="unique" src="/images/illustration-features-tab-3.svg" alt="">
            <div class="middiv">
                <h2>Bookmark in one click</h2>
                <p>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.
                  </p>
                  <button class="button3">More Info</button>
            </div>
        
            `
        }
    
        })
})
changeMenu.forEach(function(each){
    each.addEventListener("click", function(){
        each.classList.toggle("border")
    })

    })
// console.log(header)