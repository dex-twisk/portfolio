const animationItems=document.querySelectorAll(".animate");

const options = {
    root: null,
    treshold:  0.5,
    rootMargin: "-10%"
};

function callback(entries,) {
    entries.forEach(
        (entry) => {
        }
    );
}

let observer = new IntersectionObserver(callback, options);

animationItems.forEach(item => {
    observer.observe(item)
})

const faders = document.querySelectorAll(".fade-in");
const moversLeft = document.querySelectorAll(".move-left")
const moversRight = document.querySelectorAll(".move-right")

const appearOptions = {
    threshold: 0.0,
    rootMargin: "-25%"
  };
  
const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);
  
  faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

moversLeft.forEach(item => {
  appearOnScroll.observe(item);
});

moversRight.forEach(item => {
  appearOnScroll.observe(item);
});


const btnOpen = document.querySelector('.btn-open');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.btn-close');

btnOpen.addEventListener('click', () => {
    modal.classList.toggle("active");
});


btnClose.addEventListener('click', () => {
  modal.classList.remove("active");
});

const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle("change")
});
