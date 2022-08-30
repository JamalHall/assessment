console.log('And this is where the Javascript goes')

const portalButton = document.querySelector("button.portal")
const modalClose = document.querySelector("#modal-close")
const backdrop = document.querySelector(".backdrop")
const modal = document.querySelector(".modal")

const headerImage = document.querySelector("#header-image")
const image1 = document.querySelector("#header-image3");
const image2 = document.querySelector("#header-image2");

const signupForm = document.querySelector("#signup-form")

let counter = 1;

// Opens the modal after Parent Portal Button is clicked
portalButton.addEventListener("click", () => {
    backdrop.style.display = "block"
    modal.style.display = "flex"
});

// Closes the modal after clicking the X button on the corner of the modal
modalClose.addEventListener("click", () => {
    backdrop.style.display = "none"
    modal.style.display = "none"
})

// Closes the modal after clicking the backdrop
backdrop.addEventListener("click", () => {
    backdrop.style.display = "none"
    modal.style.display = "none"
})

// Every 5 seconds the head image will swipe right to reveal an alternate image
setInterval(() => {
    if(counter === 0) {
        image1.style.right = 0;
        image2.style.right = "-100%";
        
        
        setTimeout(() => {
            image1.style.display = "block";
            image2.style.right = 0;
        }, 1500)
        counter++;
    } else {

        image2.style.right = 0;
        image1.style.right = "-100%";
        setTimeout(() => {
            
            image1.style.display = "none";
            
        },3500)
        
        counter = 0;
    }
}, 5000);
