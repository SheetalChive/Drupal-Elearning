$(document).ready(function(){
   
    $("nav ul").addClass('navbar-nav');
    $("nav ul").addClass('mr-auto');
    $("nav ul li").addClass('nav-item');
    $("nav ul li a").addClass('nav-link');
    $("nav ul li a").addClass('pl-0');
    $(".user-login-form").addClass('container');

    $("#block-quicklink-3").addClass('ftco-footer-widget mb-5 ml-md-4');
    $("#block-quicklink-3 ul").addClass('list-unstyled');
    $("#block-quicklink-3 ul li a").prepend('<i class="fa fa-arrow-right mr-2"></i>  ');
    
    $(".call .text").prepend('<span class="fa fa-phone"></span>  ');
    $(".address .text").prepend('<span class="fa fa-map-marker"></span>  ');
    $(".email .text").prepend('<span class="fa fa-envelope-o"></span>  ');


    $('.pl-0').removeAttr("data-drupal-link-system-path");

    $( 'img[alt="banner"]' ).addClass('banner_cls');
    $(".user-login-form").prepend('<div class="row justify-content-center mb-5 pb-2"><div class="col-md-8 text-center heading-section ftco-animate fadeInUp ftco-animated"><h2 class="mb-4"><span>Login into your</span> account</h2></div></div>')
});;
