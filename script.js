window.addEventListener('scroll', ()=>{
document.querySelector('header').classList.toggle('window-scroll',window.scrollY > 0);
})
// show the hiden faq
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq =>{
  faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
   const icon =faq.querySelector('.icons');
 if(icon.className === 'iconp'){
  icon.className="iconm";
 }
 else{
  icon.className="iconp"
 }
  })
})


// humberger-menu

const menu = document.querySelector(".navbar");
const menubtn = document.querySelector(".hm");
const closebtn = document.querySelector(".x");

menubtn.addEventListener('click', () => {
  menu.style.display="flex";
  closebtn.style.display="inline-block";
  menubtn.style.display="none";
})
// when the close btn clicked
const closenav = () =>{
  menu.style.display= "none";
  closebtn.style.display= "none";
  menubtn.style.display= "inline-block";
}

closebtn.addEventListener('click', closenav)