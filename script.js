//toggle 
const menutoggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
menutoggle.onclick = function(){
  menutoggle.classList.toggle('active')
  navigation.classList.toggle('active')
}

//slider
const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

i = 0;

function ActiveSlide(n){
  for(slide of slides)
  slide.classList.remove('active');
  slides[n].classList.add('active');
}

// function for next btn
next.addEventListener('click', function(){
  if(i == slides.length - 1){
    i = 0;
    ActiveSlide(i);
  }
  else 
  {
    i++;
    ActiveSlide(i);
  }
})

 // function for prev btn
 prev.addEventListener('click', function(){
  if(i == 0){
    i = slides.length - 1;
    ActiveSlide(i);
  }
  else 
  {
    i--;
    ActiveSlide(i);
  }
})

// Runway

// Get all the product cards
const productCards = document.querySelectorAll('.product-cart'); 

// Loop through each product card
productCards.forEach(card => {

  // Get the image container
  const imageContainer = card.querySelector('.product-images');
  
  // Get the images
  const images = imageContainer.querySelectorAll('img');
  
  // Track the active image index
  let activeIndex = 0;
  
  // Get the prev/next buttons
  const prevButton = card.querySelector('.prev');
  const nextButton = card.querySelector('.next');
  
  // Click handlers for buttons
  prevButton.addEventListener('click', () => {
    activeIndex--;
    if(activeIndex < 0) {
      activeIndex = images.length - 1;
    }
    updateGallery();
  });
  
  nextButton.addEventListener('click', () => { 
    activeIndex++;
    if(activeIndex >= images.length) {
      activeIndex = 0;
    }
    updateGallery();
  });
  
  function updateGallery() {
    // Hide all images first
    images.forEach(img => img.style.display = 'none');
    
    // Show just the active image
    images[activeIndex].style.display = 'block';
  }
});

// Ir arriba

// Get button 
let scrollToTop = document.getElementById("scrollToTop");

// When user scrolls down 500px show the button
window.onscroll = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scrollToTop.classList.add("show");
  } else {
    scrollToTop.classList.remove("show");
  }
};

// Scroll to top on click
scrollToTop.onclick = () => {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}