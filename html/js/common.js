$(function() {


    //Поиск
    $('.header__search-button').click(function() {
        $('.header__search-form').fadeIn(200);
        $('.header__search-button').fadeOut(200);
        return false;
    });
    $(document).on('click', function(e) {
        if (!$(e.target).closest(".header__search-form").length) {
            $('.header__search-form').fadeOut(200);
            $('.header__search-button').fadeIn(200);
        }
        e.stopPropagation();
    });


    //Мобильное меню

    $('.header__nav-button').click(function() {
        if ($('.header__nav ul').is(':visible')) {
            $('.header__nav-button i').removeClass('icon-cancel');
            $('.header__nav-button i').addClass('icon-menu');
            $('.header__nav').fadeOut(200);
        } else {
            $('.header__nav-button i').removeClass('icon-menu');
            $('.header__nav-button i').addClass('icon-cancel');
            $('.header__nav').fadeIn(200);
        };

        return false;
    })
    $(document).on('click', function(e) {
        var w = $(window).width();
        if (w < 992) {
            if (!$(e.target).closest(".header__nav a").length) {
                if ($('.header__nav').is(':visible')) {
                    $('.header__nav').fadeOut(200);
                    $('.header__nav-button i').removeClass('icon-cancel');
                    $('.header__nav-button i').addClass('icon-menu');
                }
            }
            e.stopPropagation();
        }

    });
    $(window).resize(function() {
        var w = $(window).width();
        if (w > 992 && $(".header__nav").is(':hidden')) {
            $('.header__nav').removeAttr('style');
        }
    });


    //Адаптивный слайдер

    $(".header__slider").owlCarousel({
        nav: true,
        navText: '',
        navSpeed: 800,
        autoplaySpeed: 800,
        dotsSpeed: 800,
        dragEndSpeed: 800,
        loop: true,
        items: 1,
        autoHeight: true,
        autoplay: true
    });

    $(".reviews__slider").owlCarousel({
        nav: false,
        navSpeed: 800,
        autoplaySpeed: 800,
        dotsSpeed: 800,
        dragEndSpeed: 800,
        loop: true,
        items: 1,
        autoHeight: true,
    });

    $(".testimonials__slider").owlCarousel({
        nav: true,
        navText: '',
        navSpeed: 800,
        dragEndSpeed: 800,
        loop: true,
        items: 1,
        autoHeight: true,
    });

    $(".parthners__slider").owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoHeight: true,
        navSpeed: 800,
        responsive: {
            0: {
                items: 2,
            },
            481: {
                items: 3,
            },
            641: {
                items: 4,
            },
            993: {
                items: 5,
            },
            993: {
                items: 5,
            },
            1233: {
                items: 6,
            }
        }
    });


    $(".our-team__slider").owlCarousel({
        //lazyLoad: true,
        loop: true,
        nav: true,
        navText: '',
        navSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            // breakpoint from 768 up
            481: {
                items: 2,
            },
            // breakpoint from 768 up
            769: {
                items: 3,
            },
            993: {
                items: 4,
            },
            1201: {
                items: 5,
            }
        }
    });

    $(".content-slider").owlCarousel({
        nav: true,
        navText: '',
        navSpeed: 800,
        items: 1
    });

    // $(".content-slider__carousel").owlCarousel({
    // 	nav:true,
    // 	navText: '',
    // 	navSpeed: 500,
    // 	items: 1
    // });

    $(".news__slider").owlCarousel({
        nav: true,
        navText: '',
        navSpeed: 800,
        responsive: {
            0: {
                items: 1
            },
            // breakpoint from 768 up
            481: {
                items: 2,
            },
            // breakpoint from 768 up
            769: {
                items: 3,
            },
            993: {
                items: 4,
            }
        }
    });


    //Выравнивание блоков по высоте

    $(".news__item-title").equalHeights();
    $(".news__item-category").equalHeights();
    $(".news__item-author").equalHeights();
    $(".news__item-date").equalHeights();

    $(".about-us__item-text").equalHeights();



    // Анимация появления элементов
    $(document).ready(function() {
        var w = $(window).width();
        if (w > 768) {
            $(".about-us__item-number").animated("zoomIn");
            $(".news__box .news__item").animated("fadeInUp");
            $(".our-speakers__advantages-item-title").animated("fadeInUp");
            $(".contacts__item").animated("fadeInUp");
        };
    });

    //Валидация полей формы на странице заказа

    $(".contacts__form").validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            mesage: {
                required: true
            },
        },
        messages: {
            name: {
                required: 'Поле "Имя" обязательно для заполнения',
                minlength: 'Имя не может быть меньше двух символов'
            },
            email: {
                required: 'Поле "E-mail" обязательно для заполнения',
                email: 'Введите корректный адрес электронной почты'
            },
            mesage: {
                required: 'Поле "Сообщение" обязательно для заполнения'
            },
        }
    });


    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if ($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch (err) {

    };

    $("img, a").on("dragstart", function(event) {
        event.preventDefault();
    });

    //Прелоадер
    $(document).ready(function() {
        $("#preloader__img").fadeOut(200);
        $("#preloader").fadeOut(300);
    });

});
