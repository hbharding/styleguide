$('document').ready(function() { 


  $('#menu li a').click(function(e) {
    // e.preventDefault();
    var link = $(this).attr('href');
    $("#content").animate({scrollTop: $("#content").scrollTop() + $(link).offset().top + 5}, '1000ms');
    $('[data-spy="scroll"]').each(function () {
      $(this).scrollspy('refresh');
    });
  });

  var body = $('body');

  $('.menu-icon').click(function() {
    if ( body.hasClass('show-menu') ) {
      body.removeClass('show-menu');
    }
    else {
      body.addClass('show-menu')
    }
  })

  // $('#menu li').click(function() {
  //   $(this).siblings('li').removeClass('selected');
  //   $(this).addClass('selected');
  // })

  var viewportHeight = $(window).height();
  var $sections = $('.section');
  var headerHeight = $('.section header').first().outerHeight(true);
  var stickyHeaderHeight = $('.section header').first().outerHeight();

  $(window).on('resize', function() {
    headerHeight = $('.section header').first().outerHeight(true);
    stickyHeaderHeight = $('.section header h2').first().outerHeight();
  });

  // Sticky headers
  $("#content").on('scroll', function() {
    var scrolled = window.pageYOffset;
    // var scrolled = $(this).scrollTop();
    
    if ( $('#content').scrollTop() > viewportHeight - 60) {
      // $('#header').css('background', '#fff');
      $('#header').addClass('solid');
    }
    else {
      // $('#header').css('background', 'transparent');
      $('#header').removeClass('solid');
    }
  
    $sections.each(function() {
      var $this        = $(this),
          offsetTop    = $this.offset().top,
          height       = $this.outerHeight(true),
          $header      = $this.children('header')
          stickyHeaderHeight = $header.outerHeight();
      
      if ( offsetTop < scrolled ) {    

        $this.css('paddingTop', headerHeight ); 
        
        if ( offsetTop + height - stickyHeaderHeight <= scrolled ) {
          $header.addClass('bottom').removeClass('top');
          // $header.css({
          // 	'position' : 'absolute',
          // 	'top' : 'inherit',
          // 	'bottom' : 0
          // })
        } else {
          $header.addClass('sticky top').removeClass('bottom');
          // $header.addClass('sticky').css({
          // 	'position' : 'fixed',
          //   'top' : 0,
          // 	'bottom' : 'inherit'
          // })
        }

        

      } else {
        $header.removeClass('sticky bottom top');
        // $header.removeClass('sticky').css({
        // 	'position' : 'static',
        // 	'top' : 'inherit'
        // })
        $this.css('paddingTop', '' );
      }
     
    });
  });

});
