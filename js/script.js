// var apps = $('.nav').offset().top;

// $(window).scroll(function(){
//     var appscroll = $(this).scrollTop();

//     if(appscroll > apps){
//            $('.nav').addClass('manu_fixed');
//     }
//     else{
//         $('.nav').removeClass('manu_fixed');
//     }
// });


// $('.back_top').click(function(){
//     var scrolling = $('html, body').animate({
//         scrollTop:0,
//     }, 1000);
// });

// $(window).scroll(function(){
//     var scroll = $(this).scrollTop();
//     if(scroll > 200){
//         $('.back_top').fadeIn();
//     }
//     else{
        
//         $('.back_top').fadeOut();
// }
// });



let nav = $('#manu').offset().top;
$(window).scroll(function(){
    let scroll = $(this).scrollTop();

    if(scroll > nav){
           $('#manu').addClass('fix_manu');
    }
    else{
        $('#manu').removeClass('fix_manu');
    }
});




$('.back_top').click(function(){
    $('html,body').animate({
        scrollTop:0,
    }, 1000);
});


$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if(scrolling > 200){
       $('.back_top').fadeIn();
    }
    else{
        $('.back_top').fadeOut();
    }
});





// $().();