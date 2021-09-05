burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightbar = document.querySelector('.rightbar');
ulclass=document.querySelector('.ulclass');

burger.addEventListener('click',()=>{
    rightbar.classList.toggle('v-class');
   ulclass.classList.toggle('v-class');
   navbar.classList.toggle('h-nav');

})