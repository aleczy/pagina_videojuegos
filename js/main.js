// JQUERY personalizado
$(document).ready(function () {
    'use strict';

    var browserWindow = $(window);

    // :: 1.0 Preloader Active Code
    browserWindow.on('load', function () {
        $('.preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // producto prueba
    $('.xzoom, .xzoom-gallery').xzoom({ zoomWidth: 400, title: true, tint: '#333', Xoffset: 15 });
    $('.xzoom2, .xzoom-gallery2').xzoom({ position: '#xzoom2-id', tint: '#ffa200' });
    $('.xzoom3, .xzoom-gallery3').xzoom({ position: 'lens', lensShape: 'circle', sourceClass: 'xzoom-hidden' });
    $('.xzoom4, .xzoom-gallery4').xzoom({ tint: '#006699', Xoffset: 15 });
    $('.xzoom5, .xzoom-gallery5').xzoom({ tint: '#006699', Xoffset: 15 });

    //Integration with hammer.js
    var isTouchSupported = 'ontouchstart' in window;

    if (isTouchSupported) {
        //If touch device
        $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function () {
            var xzoom = $(this).data('xzoom');
            xzoom.eventunbind();
        });

        $('.xzoom, .xzoom2, .xzoom3').each(function () {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function (element) {
                    element.hammer().on('drag', function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                xzoom.eventleave = function (element) {
                    element.hammer().on('tap', function (event) {
                        xzoom.closezoom();
                    });
                }
                xzoom.openzoom(event);
            });
        });

        $('.xzoom4').each(function () {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function (element) {
                    element.hammer().on('drag', function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function (element) {
                    element.hammer().on('tap', function () {
                        counter++;
                        if (counter == 1) setTimeout(openfancy, 300);
                        event.gesture.preventDefault();
                    });
                }

                function openfancy() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        $.fancybox.open(xzoom.gallery().cgallery);
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

        $('.xzoom5').each(function () {
            var xzoom = $(this).data('xzoom');
            $(this).hammer().on("tap", function (event) {
                event.pageX = event.gesture.center.pageX;
                event.pageY = event.gesture.center.pageY;
                var s = 1, ls;

                xzoom.eventmove = function (element) {
                    element.hammer().on('drag', function (event) {
                        event.pageX = event.gesture.center.pageX;
                        event.pageY = event.gesture.center.pageY;
                        xzoom.movezoom(event);
                        event.gesture.preventDefault();
                    });
                }

                var counter = 0;
                xzoom.eventclick = function (element) {
                    element.hammer().on('tap', function () {
                        counter++;
                        if (counter == 1) setTimeout(openmagnific, 300);
                        event.gesture.preventDefault();
                    });
                }

                function openmagnific() {
                    if (counter == 2) {
                        xzoom.closezoom();
                        var gallery = xzoom.gallery().cgallery;
                        var i, images = new Array();
                        for (i in gallery) {
                            images[i] = { src: gallery[i] };
                        }
                        $.magnificPopup.open({ items: images, type: 'image', gallery: { enabled: true } });
                    } else {
                        xzoom.closezoom();
                    }
                    counter = 0;
                }
                xzoom.openzoom(event);
            });
        });

    } else {
        //If not touch device

        //Integration with fancybox plugin
        $('#xzoom-fancy').bind('click', function (event) {
            var xzoom = $(this).data('xzoom');
            xzoom.closezoom();
            $.fancybox.open(xzoom.gallery().cgallery, { padding: 0, helpers: { overlay: { locked: false } } });
            event.preventDefault();
        });

        //Integration with magnific popup plugin
        $('#xzoom-magnific').bind('click', function (event) {
            var xzoom = $(this).data('xzoom');
            xzoom.closezoom();
            var gallery = xzoom.gallery().cgallery;
            var i, images = new Array();
            for (i in gallery) {
                images[i] = { src: gallery[i] };
            }
            $.magnificPopup.open({ items: images, type: 'image', gallery: { enabled: true } });
            event.preventDefault();
        });
    }

    // ajax
    $("#submit").click(function () {
        var name = $("#nombre").val();
        var email = $("#email").val();
        var telefono = $("#telefono").val();
        var comentarios = $("#comentarios").val();


        //Construimos la variable que se guardará en el data del Ajax para pasar al archivo php que procesará los datos
        var dataString = 'name1=' + name + '&email1=' + email + '&telefono1=' + telefono + '&comentarios1=' + comentarios;

        $.ajax({
            type: "POST",
            url: "php/conexion_bd.php",
            data: dataString,
            success: function () {
                $('#mainform').html("<div id='message'></div>");
                $('#message').html("<h2>Tus datos han sido guardados correctamente!</h2>");
                alert("Proceso Satisfactorio");
                $('#form1')[0].reset(); // To reset form fields
            }
        });
        return true;
    });

});

// fin JQUERY personalizado


// videos
//Start Youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var youtubeReady = false;

//Variable for the dynamically created youtube players
var players = new Array();
var isPlaying = false;
function onYouTubeIframeAPIReady() {
    //The id of the iframe and is the same as the videoId	
    jQuery(".youtube-video").each(function (i, obj) {
        players[obj.id] = new YT.Player(obj.id, {
            videoId: obj.id,
            playerVars: {
                controls: 2,
                rel: 0,
                autohide: 1,
                showinfo: 0,
                modestbranding: 1,
                wmode: "transparent",
                html5: 1
            },
            events: {
                'onStateChange': onPlayerStateChange
            }
        });
    });
    youtubeReady = true;
}

//   fin videos

// JS carrusel 1
function onPlayerStateChange(event) {
    var target_control = jQuery(event.target.getIframe()).parent().parent().parent().find(".controls");

    var target_caption = jQuery(event.target.getIframe()).parent().find(".carousel-caption");
    switch (event.data) {
        case -1:
            jQuery(target_control).fadeIn(500);
            jQuery(target_control).children().unbind('click');
            break
        case 0:
            jQuery(target_control).fadeIn(500);
            jQuery(target_control).children().unbind('click');
            break;
        case 1:
            jQuery(target_control).children().click(function () { return false; });
            jQuery(target_caption).fadeOut(500);
            jQuery(target_control).fadeOut(500);
            break;
        case 2:
            jQuery(target_control).fadeIn(500);
            jQuery(target_control).children().unbind('click');
            break;
        case 3:
            jQuery(target_control).children().click(function () { return false; });
            jQuery(target_caption).fadeOut(500);
            jQuery(target_control).fadeOut(500);
            break;
        case 5:
            jQuery(target_control).children().click(function () { return false; });
            jQuery(target_caption).fadeOut(500);
            jQuery(target_control).fadeOut(500);
            break;
        default:
            break;
    }
};

jQuery(window).bind('load', function () {
    jQuery(".carousel-caption").fadeIn(500);
    jQuery(".controls").fadeIn(500);
});

jQuery('.carousel').bind('slid.bs.carousel', function (event) {
    jQuery(".controls").fadeIn(500);
});

// js segundo slider
(function () {

    var $$ = function (selector, context) {
        var context = context || document;
        var elements = context.querySelectorAll(selector);
        return [].slice.call(elements);
    };

    function _fncSliderInit($slider, options) {
        var prefix = ".fnc-";

        var $slider = $slider;
        var $slidesCont = $slider.querySelector(prefix + "slider__slides");
        var $slides = $$(prefix + "slide", $slider);
        var $controls = $$(prefix + "nav__control", $slider);
        var $controlsBgs = $$(prefix + "nav__bg", $slider);
        var $progressAS = $$(prefix + "nav__control-progress", $slider);

        var numOfSlides = $slides.length;
        var curSlide = 1;
        var sliding = false;
        var slidingAT = +parseFloat(getComputedStyle($slidesCont)["transition-duration"]) * 1000;
        var slidingDelay = +parseFloat(getComputedStyle($slidesCont)["transition-delay"]) * 1000;

        var autoSlidingActive = false;
        var autoSlidingTO;
        var autoSlidingDelay = 5000; // default autosliding delay value
        var autoSlidingBlocked = false;

        var $activeSlide;
        var $activeControlsBg;
        var $prevControl;

        function setIDs() {
            $slides.forEach(function ($slide, index) {
                $slide.classList.add("fnc-slide-" + (index + 1));
            });

            $controls.forEach(function ($control, index) {
                $control.setAttribute("data-slide", index + 1);
                $control.classList.add("fnc-nav__control-" + (index + 1));
            });

            $controlsBgs.forEach(function ($bg, index) {
                $bg.classList.add("fnc-nav__bg-" + (index + 1));
            });
        };

        setIDs();

        function afterSlidingHandler() {
            $slider.querySelector(".m--previous-slide").classList.remove("m--active-slide", "m--previous-slide");
            $slider.querySelector(".m--previous-nav-bg").classList.remove("m--active-nav-bg", "m--previous-nav-bg");

            $activeSlide.classList.remove("m--before-sliding");
            $activeControlsBg.classList.remove("m--nav-bg-before");
            $prevControl.classList.remove("m--prev-control");
            $prevControl.classList.add("m--reset-progress");
            var triggerLayout = $prevControl.offsetTop;
            $prevControl.classList.remove("m--reset-progress");

            sliding = false;
            var layoutTrigger = $slider.offsetTop;

            if (autoSlidingActive && !autoSlidingBlocked) {
                setAutoslidingTO();
            }
        };

        function performSliding(slideID) {
            if (sliding) return;
            sliding = true;
            window.clearTimeout(autoSlidingTO);
            curSlide = slideID;

            $prevControl = $slider.querySelector(".m--active-control");
            $prevControl.classList.remove("m--active-control");
            $prevControl.classList.add("m--prev-control");
            $slider.querySelector(prefix + "nav__control-" + slideID).classList.add("m--active-control");

            $activeSlide = $slider.querySelector(prefix + "slide-" + slideID);
            $activeControlsBg = $slider.querySelector(prefix + "nav__bg-" + slideID);

            $slider.querySelector(".m--active-slide").classList.add("m--previous-slide");
            $slider.querySelector(".m--active-nav-bg").classList.add("m--previous-nav-bg");

            $activeSlide.classList.add("m--before-sliding");
            $activeControlsBg.classList.add("m--nav-bg-before");

            var layoutTrigger = $activeSlide.offsetTop;

            $activeSlide.classList.add("m--active-slide");
            $activeControlsBg.classList.add("m--active-nav-bg");

            setTimeout(afterSlidingHandler, slidingAT + slidingDelay);
        };



        function controlClickHandler() {
            if (sliding) return;
            if (this.classList.contains("m--active-control")) return;
            if (options.blockASafterClick) {
                autoSlidingBlocked = true;
                $slider.classList.add("m--autosliding-blocked");
            }

            var slideID = +this.getAttribute("data-slide");

            performSliding(slideID);
        };

        $controls.forEach(function ($control) {
            $control.addEventListener("click", controlClickHandler);
        });

        function setAutoslidingTO() {
            window.clearTimeout(autoSlidingTO);
            var delay = +options.autoSlidingDelay || autoSlidingDelay;
            curSlide++;
            if (curSlide > numOfSlides) curSlide = 1;

            autoSlidingTO = setTimeout(function () {
                performSliding(curSlide);
            }, delay);
        };

        if (options.autoSliding || +options.autoSlidingDelay > 0) {
            if (options.autoSliding === false) return;

            autoSlidingActive = true;
            setAutoslidingTO();

            $slider.classList.add("m--with-autosliding");
            var triggerLayout = $slider.offsetTop;

            var delay = +options.autoSlidingDelay || autoSlidingDelay;
            delay += slidingDelay + slidingAT;

            $progressAS.forEach(function ($progress) {
                $progress.style.transition = "transform " + (delay / 1000) + "s";
            });
        }

        $slider.querySelector(".fnc-nav__control:first-child").classList.add("m--active-control");

    };

    var fncSlider = function (sliderSelector, options) {
        var $sliders = $$(sliderSelector);

        $sliders.forEach(function ($slider) {
            _fncSliderInit($slider, options);
        });
    };

    window.fncSlider = fncSlider;
}());

/* not part of the slider scripts */

/* Slider initialization
options:
autoSliding - boolean
autoSlidingDelay - delay in ms. If audoSliding is on and no value provided, default value is 5000
blockASafterClick - boolean. If user clicked any sliding control, autosliding won't start again
*/
fncSlider(".example-slider", { autoSlidingDelay: 4000 });

var $demoCont = document.querySelector(".demo-cont");

[].slice.call(document.querySelectorAll(".fnc-slide__action-btn")).forEach(function ($btn) {
    $btn.addEventListener("click", function () {
        $demoCont.classList.toggle("credits-active");
    });
});

document.querySelector(".demo-cont__credits-close").addEventListener("click", function () {
    $demoCont.classList.remove("credits-active");
});

document.querySelector(".js-activate-global-blending").addEventListener("click", function () {
    document.querySelector(".example-slider").classList.toggle("m--global-blending-active");
});

// contacto
