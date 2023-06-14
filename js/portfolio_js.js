var slideIndex = 1; //start slideshow at slide 1
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length){ //makes slideshow wrap around
        slideIndex = 1;
    }
    if (n < 1){
        slideIndex = slides.length; //makes slideshow wrap around
    }
    for (i = 0; i < slides.length; i++){    //hides all slides
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++){  //makes all buttons inactive (replaces "active" with "")
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block"; //displays current slide as block element
    dots[slideIndex - 1].className += " active";    //make current button active
}

function openForm(){
    document.getElementById("myForm").style.display = "block";  //displays form as block element
}

function closeForm(){
    document.getElementById("myForm").style.display = "none";   //hides form
}

document.addEventListener("click", function(event){ //close form if user clicks on close button (with "cancel" class), or if user clicks on anywhere that is not the form, the contact button, or the contact btn in the navbar
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")){
        closeForm();
    }
}, false)