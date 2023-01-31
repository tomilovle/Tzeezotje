
$(document).ready(function(){

	var swiper = new Swiper(".mySwiper", {
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
        
	});

	$('[data-modal=reserve]').on('click', function() {
		$('.overlay, #reserve').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #reserve, #thanks').fadeOut('slow');
	});

	function validateForms(form) {
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name:{
                    required: "Please enter your name",
                    minlength: jQuery.validator.format("Enter {0} characters!")
                },
                phone: "Please enter your phone number",
                email: {
                    required: "Please enter your email",
                    email: "The email address is entered incorrectly"
                }
              }
        });
	};

	validateForms('#reserve form');

	$('input[name=phone]').mask("+7 (999) 999-9999");

	$('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#reserve').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');
			console.log('success');

            $('form').trigger('reset');
        }).fail(function() {
			console.log('fail');
		});
        return false;
    });

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.header__menu'),
        menuItem = document.querySelectorAll('.header__menu-item'),
        hamburger = document.querySelector('.hamburger');
    
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        });
    
        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('header__menu_active');
            });
        });
    });
});