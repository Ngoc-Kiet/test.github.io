$(document).on('click', '.trigger', function (event) {
    event.preventDefault();
    $('.popup').iziModal('open');
});
$(document).ready(function(){
    var a = 0;
    var b = 0;
    // var d = 100000;
    var c = 10000 + 10000 ;
    var length = $('ul.test2').children().length;
    function wheel()
    {
        setTimeout(function() {
            $('ul.test2 li.test2__industry:eq(' + a + ')').addClass('active').siblings().removeClass('active');
            a++;
            b++;
            if (a == length)
                a = 0;
            if (b < c)
                wheel();
        }, 6000);
    }
 
    wheel(10);     

})
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    prevNextButtons: false,
    pageDots: true,
});

var flkty = new Flickity( '.main-carousel', {
    // autoPlay: 1500,
    // pauseAutoPlayOnHover: false
});
$('.toggle').click(function () {
    $('.monthly-pro').toggleClass('active1');
    $('.yearly-pro').toggleClass('active1');
})
$('.backtotop').click(function () {
    console.log('click');
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        scrollBehavior: 'smooth'
    })
})
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 400) {
        $('.menu-fixed').addClass('active');
    } else {
        $('.menu-fixed').removeClass('active');
    }
})

var elem = document.querySelector('.main');
var flkty = new Flickity( elem, {
  // options
    cellAlign: 'left',
    contain: true,
    autoPlay: 1500,
    prevNextButtons: false,
    pageDots: true,
});

var flkty = new Flickity( '.main', {
    // autoPlay: 1500,
    // pauseAutoPlayOnHover: falsez
});
$('#togle5').click(function () {
    $('.collapse').toggleClass('show1')
})
$('#togle2').click(function () {
    $('.collapse').toggleClass('show2')
})
$('#togle3').click(function () {
    $('.collapse').toggleClass('show3')
})
$('#contact-form').submit(function() {
    var action = $(this).attr('action');
    $("#message").slideUp(750, function() {
        $('#message').hide();

        $('#submit')
            .before('')
            .attr('disabled', 'disabled');

        $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                comments: $('#comments').val(),
            },
            function(data) {
                document.getElementById('message').innerHTML = data;
                $('#message').slideDown('slow');
                $('#cform img.contact-loader').fadeOut('slow', function() {
                    $(this).remove()
                });
                $('#submit').removeAttr('disabled');
                if (data.match('success') != null) $('#cform').slideUp('slow');
            }
        );

    });

    return false;

});


$('.menu-mobile__hamburger').click(function () {
    $('.menu-fullscreen').addClass('active-mobile');
})
$('.close').click(function () {
    $('.menu-fullscreen').removeClass('active-mobile');
})


$('.menuMobile').click(function () {
    $('.menu-fullscreen').removeClass('active-mobile');
})
$('.menuMobile1').click(function () {
    $('.menu-fullscreen').removeClass('active-mobile');
})

$(document).on('click','.test2__industry', function(){
    $(".test2__industry").removeClass('active');
    $(this).addClass("active");
})

// BACK TO TOP  
$('.backtotop').click(function () {
    console.log('click');
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
        scrollBehavior: 'smooth'
    })
})