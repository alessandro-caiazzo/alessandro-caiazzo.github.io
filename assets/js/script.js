var navLinks = document.querySelectorAll('.navigation_bar a');

// Add an event listener to each navbar link
navLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    // Remove the 'active' class from all navbar links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add the 'active' class to the clicked navbar link
    this.classList.add('active');
  });
});


// ////////////////////////   animation projects    ///////////////////////

var img1 = document.querySelector(".img-1");
var img2 = document.querySelector(".img-2");
var img3 = document.querySelector(".img-3");
var img4 = document.querySelector(".img-4");
var elementH3 = document.querySelector(".portfolio-heading");
var resumeWrapper = document.querySelector('.resume-wrapper');
var resumeHeading = document.querySelector('.resume-heading');
var portfolio = document.querySelector('.portfolio');
var formR = document.querySelector('.contact-form');
var formL = document.querySelector('.form-left');
var rotating = document.querySelector('.rotating-background');
var mainHeading  = document.querySelector('.mainHeading');
var h4Heading  = document.querySelector('.h4_heading');
var personalPicture = document.querySelector('.personalPicture');
var aboutParagraph = document.querySelector('.about-paragraph');
var rotatingAboutL = document.querySelector('.rotating-background-about-l');
var rotatingAboutR = document.querySelector('.rotating-background-about-r');
var rotatingPortfolio = document.querySelector('.rotating-background-portfolio');



window.onscroll = function() {
  var y = window.pageYOffset;

    mainHeading.style.transform = "translateX(" + y/4 + "px)";
    h4Heading.style.transform = "translateX(" + y/-4 + "px)";
    personalPicture.style.transform = "translateX(" + y/5 + "px)";
    aboutParagraph.style.transform = "translateX(" + y/-5 + "px)";
    img1.style.transform = "translateY(" + y/-50 + "px) translateX(" + y/-30 + "px)";
    img2.style.transform = "translateY(" + y/45 + "px) translateX(" + y/20 + "px)";
    img3.style.transform = "translateY(" + y/15 + "px) translateX(" + y/-18 + "px)";
    img4.style.transform = "translateY(" + y/10 + "px) translateX(" + y/25 + "px)";
    portfolio.style.transform = "translateX(" + y/-5 + "px)";
    elementH3.style.transform = "translateY(" + y/7 + "px) translateX(" + y/5 + "px)";
    resumeWrapper.style.transform = "translateX(" + y/2.7 + "px)";
    resumeHeading.style.transform = "translateX(" + y/-2.9 + "px)";
    formL.style.transform = "translateX(" + y/4 + "px)";
    formR.style.transform = "translateX(" + y/-4 + "px)";
    rotating.style.transform = "rotate(" + y/10 + "deg)";
    rotatingAboutL.style.transform = "rotate(" + y/10 + "deg)";
    rotatingAboutR.style.transform = "rotate(" + y/10 + "deg)";
    rotatingPortfolio.style.transform = "rotate(" + y/10 + "deg) translateX(" + y/4 + "px)";
};

// //////////////////////////// animation background  ///////////////////
