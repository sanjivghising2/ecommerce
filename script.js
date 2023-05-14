           
                    $(function() {
                        $('a.page-scroll').bind('click', function(event) {
                            var $anchor = $(this);
                            $('html, body').stop().animate({
                                scrollTop: $($anchor.attr('href')).offset().top
                            }, 1500, 'easeInOutExpo');
                            event.preventDefault();
                        });
                    });
                    
                    // Highlight the top nav as scrolling occurs
                    $('body').scrollspy({
                        target: '.navbar-fixed-top'
                    })
                    
                    // Closes the Responsive Menu on Menu Item Click
                    $('.navbar-collapse ul li a').click(function() {
                        $('.navbar-toggle:visible').click();
                    });
                                    </script>
                                    <script>
                                        //Starrr
                    $(".starrr").starrr({});
                    
                    $(".carousel").slick({
                      dots: false,
                      infinite: false,
                      speed: 300,
                      draggable: false,
                      slidesToShow: 4,
                      responsive: [
                        {
                          breakpoint: 1024,
                          settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: false
                          }
                        },
                        {
                          breakpoint: 800,
                          settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                          }
                        },
                        {
                          breakpoint: 600,
                          settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                          }
                        }
                      ]
                    });