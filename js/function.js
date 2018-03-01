//$(window).scroll(function(){
//    
//   var wScroll = $(this).scrollTop();
//    
//});

var stickyOffset = $('.main_logo').offset().top;

$(window).scroll(function(){
    
    var sticky = $('.main_logo'),
        scroll = $(window).scrollTop();
    
    if (scroll >= stickyOffset){
        sticky.addClass('fixed');
        
        
    }   else{
    sticky.removeClass('fixed');
    }
});