// A $( document ).ready() block.
$( document ).ready(function() {

    $('.burger').click(function(){

        $('.burger-menu').fadeToggle(100);
        $(this).toggleClass('active');
        
    });

    // Animate on Scroll Activate
    AOS.init({
        duration: 500
    });

    
});