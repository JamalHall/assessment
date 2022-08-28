console.log('And this is where the Javascript goes')

const headerImage = document.querySelector("#header-image")
const images = ["./assets/banner_image_1.png","./assets/banner_image_2.png"]
var counter = 0;

headerImage.src = images[1];
setInterval(() => {
    // console.log("Hi")
}, 1000);
