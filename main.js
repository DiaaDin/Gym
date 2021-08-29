$(document).ready(function(){
    $(window).scroll(function(){
        if ($(window).scrollTop() > 20){
            $('header').addClass('active')
        }else{
           $('header').removeClass('active')
        }

    })
    $(".btn").attr("disabled", true);

    $('.fa-bars').click(function(){
        $('.fa-bars').toggleClass('fa-times')
        $('.navbar').toggleClass('on')

    })
    $('.navbar a').click(function(){
        $('.fa-bars').toggleClass('fa-times')
        $('.navbar').removeClass('on')
    })
})
