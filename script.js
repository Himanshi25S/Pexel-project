window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  // JavaScript for changing background on tap (click)
const hero = document.querySelector('.hero');
const images = [
  'https://tse1.mm.bing.net/th?id=OIP.SUK3Rd7NOR41G_Gon3pprQHaE5&pid=Api',  // Image 1
  'https://tse2.mm.bing.net/th?id=OIP.WYfPmkaej4Zsy9_iR2g_lgHaEo&pid=Api',  // Image 2
  'https://tse3.mm.bing.net/th?id=OIP.JGkQFbw9t6HkovdSvwm1zQHaE8&pid=Api',  // Image 3
  ];
let currentIndex = 0;

// Function to change background image
function changeBackgroundImage() {
  hero.style.backgroundImage = `url('${images[currentIndex]}')`;
  currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
}

// Add an event listener to change the background on click or tap
hero.addEventListener('click', changeBackgroundImage);

// Initialize with the first background image
changeBackgroundImage();