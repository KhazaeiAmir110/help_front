var slideIndex = 1


function showSlide(n){
    let i
    const slides = document.getElementsByClassName('slid')
    const dots = document.getElementsByClassName('dot')
    if(n > slides.length){
        slideIndex = 1
    }
    else if(n < 1){
        slideIndex = slides.length
    }
    // slide
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = 'none'
    }

    // dots
    for(let i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" active","")
    }
    slides[slideIndex-1].style.display = 'block'
    dots[slideIndex-1].className += " active"
}

function control(m){
    slideIndex += m
    showSlide(slideIndex)
}

showSlide(slideIndex)