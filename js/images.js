const currentMainImage = document.querySelector(".gallery-pic4 img");
const imagesToChooseFrom = docment.querySelectorAll(".gallery pic");

imagesToChooseFrom.forEach(img => img.addEventListener('click', imageClick));


function imageClick(e) {

    imagesToChooseFrom.forEach(img => img.style.opacity = 1)

    console.log(e.target);
    currentMainImage.src = e.target.src;
    e.target.style.opacity = 0.5;
}