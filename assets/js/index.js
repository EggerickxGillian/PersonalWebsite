
// Initialising AOS 

AOS.init();

// Initialising remodal

$('[data-remodal-id=modal]').remodal();

// Initialising fakeLoader



$(window).ready(function () {
   $.fakeLoader({
       bgColor: '#000000',
       spinner:"spinner1",
       timeToHide: 2200
   });
});

// Initialising DarkModeJS ( options )

const options = {
   bottom: '64px', // default: '32px'
   right: '32px', // default: '32px'
   left: 'unset', // default: 'unset'
   time: '0.5s', // default: '0.3s'
   mixColor: '#fff', // default: '#fff'
   backgroundColor: '#fff',  // default: '#fff'
   buttonColorDark: '#100f2c',  // default: '#100f2c'
   buttonColorLight: '#fff', // default: '#fff'
   saveInCookies: false, // default: true,
   label: '🌓', // default: ''
   autoMatchOsTheme: false, // default: true
 }
 
 const darkmode = new Darkmode(options);
 darkmode.showWidget();


// Navigation tab 

var tabLinks = document.querySelectorAll(".nav-btn");
var tabContent = document.querySelectorAll(".tabcontent");


tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});

window.onload = firstActive();

function openTabs(el) {
   var btnTarget = el.currentTarget;
   var target = btnTarget.dataset.target;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + target).classList.add("active");
   
   btnTarget.classList.add("active");
}

function firstActive(){
   tabContent[0].classList.add("active");
}