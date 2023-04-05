
// === fixation de la navbar

$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$('.navbar').addClass("sticky");
		} else {
			$('.navbar').removeClass("sticky");
		}
		if (this.scrollY > 500) {
			$('.scroll-up-btn').addClass("show");
		} else {
			$('.scroll-up-btn').removeClass("show");
		}
	});

	// === Animation des cartes et du carousel

	$('.scroll-up-btn').click(function () {
		$('html').animate({
			scrollTop: 0
		});
		$('html').css("scrollBehavior", "auto");
	});
	$('.navbar .menu li a').click(function () {
		$('html').css("scrollBehavior", "smooth");
	});
	$('.menu-btn').click(function () {
		$('.navbar .menu').toggleClass("active");
		$('.menu-btn i').toggleClass("active");
	});
	// === Animation du texte en typing
	
	var typed = new Typed(".typing", {
		strings: ["Etudiant" , "Développeur Front-end"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
	var typed = new Typed(".typing-2", {
		strings: ["Etudiant", " Développeur Front-end"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});
	$('.carousel').owlCarousel({
		margin: 20,
		loop: true,
		autoplay: true,
		autoplayTimeout: 2000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
				nav: false
			},
			600: {
				items: 2,
				nav: false
			},
			1000: {
				items: 3,
				nav: false
			}
		}
	});
});

