// Toggling the navbar on menu icon click
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('.navbar a');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
};

// Close navbar after clicking on a link in responsive mode
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
  });
});

// Sticky header when scrolling
window.onscroll = () => {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 100);

  // Collapse navbar when scrolling
  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};

// Optional: ScrollReveal animations (if you want to keep them)
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .education-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Optional: Typed.js animation (if you want to keep it)
const typed = new Typed('.multiple-text', {
  strings: ['Mobile Application Developer', '.NET Developer', 'Java Developer', 'Web Designer'],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});

// // Initialize EmailJS
// (function() {
//     emailjs.init("mahammadarshil007@gmail.com");  // Replace with your actual User ID from EmailJS
// })();

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();  // Prevent default form submission

//     // Collect form data
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
//     const subject = document.getElementById('subject').value;
//     const message = document.getElementById('message').value;

//     // Send email using EmailJS
//     emailjs.send("service_gmail", "template_contact_form", {
//         from_name: name,
//         from_email: email,
//         phone: phone,
//         subject: subject,
//         message: message
//     })
//     .then(function(response) {
//         alert('Your message has been sent successfully!');
//         document.getElementById('contact-form').reset();  // Reset form after submission
//     }, function(error) {
//         alert('Failed to send the message. Please try again.');
//     });
// });