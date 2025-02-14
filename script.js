let currentIndex = 0;
function showSlide(index) {

    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) 
    {
        currentIndex = 0;
    } 
    else if (index < 0) 
    {
        currentIndex = totalSlides - 1;
    } 
    else 
    {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

}

function moveSlide(direction) {
    showSlide(currentIndex + direction);
}
window.onload = function() {
    showMobile('Assets/Mobile/s25ultra.webp');
    showTv('Assets/TV/moniter.png');
    showApp('Assets/Appliance/ac.png');
    document.getElementById('DefaultButton').focus();

}
function showMobile(imageUrl) {
    let image = {    'Assets/Mobile/s25series.png':'rgb(243, 243, 243)',
                    'Assets/Mobile/s25ultra.webp':'rgb(243,243,243)',
                    'Assets/Mobile/tabS10.png':'rgb(250, 186, 249,0.3)'};
    const div = document.getElementById('hero');
    div.style.backgroundImage = `url('${imageUrl}')`;
    div.style.backgroundColor = image[imageUrl];
}
function showTv(imageUrl) {
   
    const div = document.getElementById('hero1');
    div.style.backgroundImage = `url('${imageUrl}')`;

}
function showApp(imageUrl) {
    const div = document.getElementById('hero2');
    div.style.backgroundImage = `url('${imageUrl}')`;
}

