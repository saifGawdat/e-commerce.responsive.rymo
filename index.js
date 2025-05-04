gsap.registerPlugin(ScrollTrigger);

const el = document.querySelector(".myText");
const text = el.textContent;
el.textContent = ""; // نفرّغ المحتوى مؤقتًا

// نحط كل حرف في span
text.split("").forEach(char => {
  const span = document.createElement("span");
  span.textContent = char;
  el.appendChild(span);
});

// نعمل أنيميشن للحروف
gsap.to(".myText span", {
  duration: 1.5,
  opacity: 1,
  y: 0,
  stagger: 0.05,
  ease: "power2.out"
});
const ell = document.querySelector(".myText1");
const textt = ell.textContent;
ell.textContent = ""; // نفرّغ المحتوى مؤقتًا

// نحط كل حرف في span
textt.split("").forEach(char => {
  const spann = document.createElement("span");
  spann.textContent = char;
  ell.appendChild(spann);
});

// نعمل أنيميشن للحروف
gsap.to(".myText1 span", {
  duration: 1.5,
  opacity: 1,
  y: 0,
  stagger: 0.10,
  ease: "power2.out"
}); 
const elll = document.querySelector(".myText2");
const texttt = elll.textContent;
elll.textContent = ""; // نفرّغ المحتوى مؤقتًا

// نحط كل حرف في span
texttt.split("").forEach(char => {
  const spannn = document.createElement("span");
  spannn.textContent = char;
  elll.appendChild(spannn);
});

// نعمل أنيميشن للحروف
gsap.to(".myText2 span", { 
  scrollTrigger: {
    trigger: '.myText2', // start animation when ".myText2" enters the viewport
    start: "top bottom", // animation starts when the top of ".myText2" hits the bottom of the viewport
    end: "bottom top", // animation ends when the bottom of ".myText2" hits the top of the viewport
    toggleActions: "play pause reverse pause", // reverse animation when leaving the viewport
  },
  x: 100,
  duration: 1.5,
  opacity: 1,
  y: 0,
  stagger: 0.10,
  ease: "power2.out",
});

// Show the toggle button when scrolling down
const toggleButton = document.querySelector('.toggle');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) { // Show the button when scrolled 100px down
    toggleButton.style.display = 'block';
  } else {
    toggleButton.style.display = 'none'; // Hide the button when near the top
  }
});

// Scroll to the top when the toggle button is clicked
toggleButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
});



