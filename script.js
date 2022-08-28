console.log('And this is where the Javascript goes')

const portalButton = document.querySelector("button.portal")
const modalClose = document.querySelector("#modal-close")
const backdrop = document.querySelector(".backdrop")
const modal = document.querySelector(".modal")

const headerImage = document.querySelector("#header-image")
const image1 = document.querySelector("#header-image3");
const image2 = document.querySelector("#header-image2");
// const images = ["./assets/banner_image_1.png","./assets/banner_image_2.png"]
let counter = 0;
// let imageWidth = image2.clientWidth;
// console.log(imageWidth)


portalButton.addEventListener("click", () => {
    backdrop.style.display = "block"
    modal.style.display = "flex"
});

modalClose.addEventListener("click", () => {
    backdrop.style.display = "none"
    modal.style.display = "none"
})

backdrop.addEventListener("click", () => {
    backdrop.style.display = "none"
    modal.style.display = "none"
})


setInterval(() => {
    if(counter === 0) {
        image2.style.left = 0;
        image1.style.left = "-100%";
        
        
        setTimeout(() => {
            image1.style.display = "block";
        }, 1500)
        counter++;
    } else {

        image1.style.left = 0;
        setTimeout(() => {
            image2.style.left = "-100%";
        },2000)
        setTimeout(() => {
            
            image1.style.display = "none";
            
        },3500)
        
        counter = 0;
    }
}, 5000);
