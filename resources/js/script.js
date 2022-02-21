$(document).ready(function() {
        
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
        },
                {
                  offset: '60px;'
                });
    
/*     
var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})

    });
    
*/    
    
    /*scroll buttons*/
    
    $(".js--scroll-to-plans").click(function () {
      $('html,body').animate({scrollTop: $('.js--section-plans').offset().top}, 1500);  
    });
    
    $(".js--scroll-to-start").click(function () {
      $('html,body').animate({scrollTop: $('.js--section-features').offset().top}, 1300);  
    });  
    
    $(".js--scroll-to-work").click(function () {
      $('html,body').animate({scrollTop: $('.js--section-steps').offset().top}, 1300);  
    });  
    
    $(".js--scroll-to-cites").click(function () {
      $('html,body').animate({scrollTop: $('.js--section-cities').offset().top}, 1300);  
    });   
    
    $(".js--scroll-to-form").click(function () {
      $('html,body').animate({scrollTop: $('.js--sections-form').offset().top}, 1300);  
    });
    
    
        $(".js--wp-1").waypoint(function(direction) {
      $('.js--wp-1').addClass('animated fadeInUp');  
        },{
        offset: '60%'
    });
    
       $(".js--wp").waypoint(function(direction) {
      $('.js--wp').addClass('animated fadeInLeft');  
        },{
        offset: '60%'
    });
    
   
    /*mobile nav*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-navicon-round')){
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round')
        }else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round')
        }
        
    });
});    


