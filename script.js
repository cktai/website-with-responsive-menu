(function () {
  var mobileBreakpoint = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--desktop-minimum");

  var $window = $(window),
    $body = $("body"),
    $jsMobileMenu = $(".js-mobile-menu");

  
  $jsMobileMenu.click(function (e) {  
    
    // fancy if statement
    $jsMobileMenu.hasClass("mobile-open") ? closeNav() : openNav();
    
  });
  
  function openNav() {
    $body.addClass("modal-open");
    $jsMobileMenu.addClass("mobile-open");
  }
  
  function closeNav() {
    $body.removeClass("modal-open");
    $jsMobileMenu.removeClass("mobile-open");
  }
  
  
  $window.resize(function(){
    
    if($window.width() >= mobileBreakpoint && $jsMobileMenu.hasClass("mobile-open")) {
      closeNav();
    }
    
  });

  
})();