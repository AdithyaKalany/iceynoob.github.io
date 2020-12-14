// header scrolling effect
$(window).on('scroll', function(){
	if($(window).scrollTop()){
      $('header').addClass('nav-show');
		  
	} 
	else{
		$('header').removeClass('nav-show');
	}
	   
})

//hamburger
const navSlide = () => {
	 const hamburger = document.querySelector(".hamburger");
	 const navbar = document.querySelector(".nav-bar");
	 const navLinks = document.querySelectorAll(".nav-bar li");

     hamburger.onclick = () => {
		
	 navbar.classList.toggle("nav-active");
		 
      //Animation links
	 navLinks.forEach((link, index) => {
		if (link.style.animation) {
			link.style.animation = "";
		} else {
			link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+1}s`;
		   }
		});
	  //hamburger animation
	 hamburger.classList.toggle("toggle");
    }
	 
	}

setInterval(async ()=>{
  var section = location.hash

  var name = section.replace('#', '')
  
  var active = document.getElementsByClassName('nav-link')

  for(i = 0; i < active.length; i++){
    var a = active[i]

    if(a.classList.contains('active')){
      a.classList.remove('active')
    }
  }

  var element = document.getElementById(`link-${name}`).classList.add('active')


}, 01)
window.onload = () => navSlide();
