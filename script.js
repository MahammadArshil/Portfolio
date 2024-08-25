let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa-xmark');
  navbar.classList.toggle('active');
}

let sections =document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
  sections.forEach(sec=>{
    let top=window.scrollY;
    let offset=sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');
    if(top>=offset && top < offset + height){
      navLinks.forEach.apply(links=>{ links.classList.remove('active'); 
        document.querySelector('header nav a[href*='+id+']').classList.add('active');
      });
    };
  });
  

  let header=document.querySelector('header');
  header.classList.toggle('sticky',window.screenY>100);

  menuIcon.classList.remove('fa-xmark');
  navbar.classList.remove('active');
};
// New Part
ScrollReveal({
  distance:'80px',
  duration:2000,
  delay:200,
  loop:true,
});

ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, .skill-container, .skill-box, .education-container, .education-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-contact h1, .achievement-container, .achievement-box, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

// New Part
const typed=new Typed('.multiple-text',{
  strings:['Mobile Application Developer','.NET Developer','Java Developer','Web Designer'],
  typeSpeed:70,
  backSpeed:70,
  backDelay:1000,
  loop:true,
});