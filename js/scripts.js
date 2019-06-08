jQuery(document).ready(function () {

    jQuery('.navigation').on('click', '.dropdown-services', function (e) {
        if(jQuery(this).hasClass('opened')){
            jQuery(this).removeClass('opened');
            jQuery('.submenu-services').slideUp(300);
        } else{
            jQuery(this).addClass('opened');
            jQuery('.submenu-services').slideDown(300);
            e.preventDefault();
        }
    });

    jQuery('.navigation').on('click', '.dropdown-tours', function (e) {
        if(jQuery(this).hasClass('opened')){
            jQuery(this).removeClass('opened');
            jQuery('.submenu-tours').slideUp(300);
        } else{
            jQuery(this).addClass('opened');
            jQuery('.submenu-tours').slideDown(300);
            e.preventDefault();
        }
    });

    $('.mobile-menu').click(function () {
    $('.navigation ul').toggleClass('active');
});

    $(function(){
     $('.single-item').slick({
        autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    boolean: true,
        
     });

     });

      $(function(){
    $("#container").clickCarousel({margin: 10});
});

});


jQuery(function($){
    $(document).mouseup(function (e){
        var block = $(".opened");
        if (!block.is(e.target)
            && block.has(e.target).length === 0) {
            block.find('.submenu-services').slideUp(300);
            jQuery('.dropdown-services').removeClass('opened');
        }
    });
});

jQuery(function($){
    $(document).mouseup(function (e){
        var block = $(".opened");
        if (!block.is(e.target)
            && block.has(e.target).length === 0) {
            block.find('.submenu-tours').slideUp(1000);
            jQuery('.dropdown-tours').removeClass('opened');
        }
    });
});

