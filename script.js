$(document).ready(function(){
  

    if ($(window).width() < 768) {
       
        $('.nav-btn').click(function(){
            $('.nav').toggleClass('more');
            $('.main').toggleClass('less')
            $(this).toggleClass('mob-active');
            $('.mobile-menu').toggleClass('slide-active');
            $('.logo-mobile').addClass('dis');
        });

     }
     else {
        $('.nav-btn').click(function(){
            $(this).toggleClass('active');
            $('.menu').toggleClass('is-active');
            $('.lang').toggleClass('add-lang');
            $('.background').toggleClass('go');
            $('.store-icon').toggleClass('wtf');
        });
     }
});

