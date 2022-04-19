let $ = document
let images = $.querySelector(".slider-Image")
let prevBtn = $.querySelector(".prev-btn")
let nextBtn = $.querySelector(".next-btn")
let imageIdx = 0
let imageArray = ["img/Fashion one.jpg", "img/Fashion two.jpg", "img/fashion three.jpg", "img/fashion four.jpg"]

function next() {
   imageIdx++
    if (imageIdx > imageArray.length - 1) {
        imageIdx = 0
    }
    images.src = imageArray[imageIdx]
}
function prev() {
    imageIdx--
    if (imageIdx < 0) {
        imageIdx = imageArray.length - 1
    }
    images.src = imageArray[imageIdx]
}
nextBtn.addEventListener("click", next)
prevBtn.addEventListener("click", prev)
setInterval(next, 5000)