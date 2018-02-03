$(document).ready(function($){
$('.statistic-counter').counterUp({
        delay: 10,
        time: 3000
    });


    $('#test').scrollToFixed();
    $('.res-nav_click').click(function() {
        $('.main-nav').slideToggle();
        return false;
    });

    $(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        console.log('this happens', this);
        $(this).ekkoLightbox();
    })


});



        wow = new WOW({
            animateClass: 'animated',
            offset: 100
        });
        wow.init();

            $(window).load(function() {
                //$(".se-pre-con").fadeOut("slow");

                $("#send").click(function(){
                    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

                    var name = $('#name');
                    var email = $('#email');
                    var subject = $('#subject');
                    var message = $('#messageSend');


                    if ( $("#displaymessage").css('display') == 'block' ){
                        $("#displaymessage").css('display', 'none');
                    }


                    if(name.val() == ""){
                        name.next().css('visibility', 'visible');
                        name.next().html("The fild is require.");
                        name.parent().addClass( "has-error" )

                    } else {
                        name.next().css('visibility', 'hidden');
                        name.next().html("");
                        name.parent().removeClass( "has-error" );
                    }
                    if(email.val() == ""){
                        email.next().css('visibility', 'visible');
                        email.next().html("The fild is require.");
                        email.parent().addClass( "has-error" )

                    } else if( !emailReg.test(email.val() )){
                        email.next().css('visibility', 'visible');
                        email.next().html("This email not valid.");
                        email.parent().addClass( "has-error" )
                    } else {
                        email.next().css('visibility', 'hidden');
                        email.next().html("");
                        email.parent().removeClass( "has-error" );

                    }
                    if(subject.val() == ""){
                        subject.next().css('visibility', 'visible');
                        subject.next().html("The fild is require.");
                        subject.parent().addClass( "has-error" )

                    } else{
                        subject.next().css('visibility', 'hidden');
                        subject.next().html("");
                        subject.parent().removeClass( "has-error" );
                    }
                    if(message.val() == ""){
                        message.next().css('visibility', 'visible');
                        message.next().html("The fild is require.");
                        message.parent().addClass( "has-error" )

                    } else {
                        message.next().css('visibility', 'hidden');
                        message.next().html("");
                        message.parent().removeClass( "has-error" );
                    }

                    if(name.val() != "" && email.val() != "" && subject.val() != "" && message.val() != "" && emailReg.test(email.val())){


                        if ( $("#displaymessage").css('display') == 'none' ){
                            $("#displaymessage").css('display', 'block');

                            $("#displaymessage").css('color', 'green');
                        }

                        name.val("");
                        email.val("");
                        subject.val("");
                        message.val("");

                    }

                });



                $('.shadowSasun').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeSasun').typed({
                        strings: [
                            "CEO and Founder"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })

                });
                $('.shadowJulia').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeJulia').typed({
                        strings: [
                            "Project Manager"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })

                });
                $('.shadowHayk').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeHayk').typed({
                        strings: [
                            "Full Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })

                });
                $('.shadowSona').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeSona').typed({
                        strings: [
                            "MEAN Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })

                });
                $('.shadowArayik').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeArayik').typed({
                        strings: [
                            "Full Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })

                });
                $('.shadowNelly').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeNelly').typed({
                        strings: [
                            "Project Manager"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })

                });
                $('.shadowLilit').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeLilit').typed({
                        strings: [
                            "MERN Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowHarut').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeHarut').typed({
                        strings: [
                            "Full Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowElvira').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeElvira').typed({
                        strings: [
                            "Project Manager"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowHayk-2').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeHayk-2').typed({
                        strings: [
                            "Full Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowGevorg').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeGevorg').typed({
                        strings: [
                            "Full Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowHayk-3').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeHayk-3').typed({
                        strings: [
                            "Full Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowJora').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeJora').typed({
                        strings: [
                            "MEAN Stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
//            $('.shadowEmil').mouseenter(function() {
//                // console.log('mouse entered now');
//                //console.log($(this).parent().siblings('.typeP'));
//                $(this).parent().siblings('#typeEmil').typed({
//                    strings: [
//                        "Web Designer"
//                    ],
//                    typeSpeed: 50,
//                    backDelay: 1000,
//                    startDelay: 1200,
//                    loop: false,
//                    showCursor: false,
//                    loopCount: false
//                })
//            });
                $('.shadowRobert').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeRobert').typed({
                        strings: [
                            "Junior Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });

                $('.shadowYuri').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeYuri').typed({
                        strings: [
                            "MEAN stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });
                $('.shadowStefany').mouseenter(function() {
                    // console.log('mouse entered now');
                    //console.log($(this).parent().siblings('.typeP'));
                    $(this).parent().siblings('#typeStefany').typed({
                        strings: [
                            "MEAN stack Developer"
                        ],
                        typeSpeed: 50,
                        backDelay: 1000,
                        startDelay: 1200,
                        loop: false,
                        showCursor: false,
                        loopCount: false
                    })
                });


                $('.main-nav li a, .servicelink').bind('click', function(event) {
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top - 102
                    }, 1500, 'easeInOutExpo');
                    /*
                     if you don't want to use the easing effects:
                     $('html, body').stop().animate({
                     scrollTop: $($anchor.attr('href')).offset().top
                     }, 1000);
                     */
                    if ($(window).width() < 768) {
                        $('.main-nav').hide();
                    }
                    event.preventDefault();
                });


                var $container = $('.portfolioContainer'),
                    $body = $('body'),
                    colW = 375,
                    columns = null;


                $container.isotope({
                    // disable window resizing
                    resizable: true,
                    masonry: {
                        columnWidth: colW
                    }
                });

                $(window).smartresize(function() {
                    // check if columns has changed
                    var currentColumns = Math.floor(($body.width() - 30) / colW);
                    if (currentColumns !== columns) {
                        // set new column count
                        columns = currentColumns;
                        // apply width to container manually, then trigger relayout
                        $container.width(columns * colW)
                            .isotope('reLayout');
                    }

                }).smartresize(); // trigger resize to set container width
                $('.portfolioFilter a').click(function() {
                    $('.portfolioFilter .current').removeClass('current');
                    $(this).addClass('current');

                    var selector = $(this).attr('data-filter');
                    $container.isotope({

                        filter: selector,
                    });
                    return false;
                });


                $('[data-toggle="tooltip"]').tooltip();

                // Add smooth scrolling to all links in navbar + footer link
                $("footer a[href='#header']").on('click', function(event) {

                    // Make sure this.hash has a value before overriding default behavior
                    if (this.hash !== "") {

                        // Prevent default anchor click behavior
                        event.preventDefault();

                        // Store hash
                        var hash = this.hash;

                        // Using jQuery's animate() method to add smooth page scroll
                        // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                        $('html, body').animate({
                            scrollTop: $(hash).offset().top
                        }, 900, function(){

                            // Add hash (#) to URL when done scrolling (default click behavior)
                            window.location.hash = "";
                        });
                    } // End if
                });
            })








$(function(){
    var $gallery = $('.gallery a').simpleLightbox();
    $gallery.on('show.simplelightbox', function(){
        console.log('Requested for showing');
    })
        .on('shown.simplelightbox', function(){
            console.log('Shown');
        })
        .on('close.simplelightbox', function(){
            console.log('Requested for closing');
        })
        .on('closed.simplelightbox', function(){
            console.log('Closed');
        })
        .on('change.simplelightbox', function(){
            console.log('Requested for change');
        })
        .on('next.simplelightbox', function(){
            console.log('Requested for next');
        })
        .on('prev.simplelightbox', function(){
            console.log('Requested for prev');
        })
        .on('nextImageLoaded.simplelightbox', function(){
            console.log('Next image loaded');
        })
        .on('prevImageLoaded.simplelightbox', function(){
            console.log('Prev image loaded');
        })
        .on('changed.simplelightbox', function(){
            console.log('Image changed');
        })
        .on('nextDone.simplelightbox', function(){
            console.log('Image changed to next');
        })
        .on('prevDone.simplelightbox', function(){
            console.log('Image changed to prev');
        })
        .on('error.simplelightbox', function(e){
            console.log('No image found, go to the next/prev');
            console.log(e);
        });
});