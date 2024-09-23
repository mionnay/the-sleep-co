// A $( document ).ready() block.
$( document ).ready(function() {

    $(".burger").click(function(){

        $(this).toggleClass('active');
        $(".burger-menu").slideToggle();

    });

    // Animate on Scroll Activate
    AOS.init({
        duration: 500
    });

    
});