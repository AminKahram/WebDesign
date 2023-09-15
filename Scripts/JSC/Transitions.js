//Scroll Animations
$(window).scroll(function () {
    var wS = $(this).scrollTop(),
        wH = $(this).height();
    //title
    $(".title").each(function () {
        var $this = $(this),
            hT = $this.offset().top,
            hH = $this.outerHeight();
            img = $this.find('.title-img'),
            underline = $this.find('.UnderLine');

       if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) 
            {
              

                img.animate({ top: '0' }, 1000);
                underline.animate({ right: '0' }, 1000);
                return false;
            }
    });
    //Column-Cards
    $(".Cards-Transition").each(function () {
        var $this = $(this),
            hTs = $this.offset().top,
            hHs = $this.outerHeight(),
            index = $this.attr('data-Index');
        if (wS > (hTs + hHs - wH) && (hTs > wS) && (wS + wH > hTs + hHs)) {
           
           setTimeout(function () {
                    crs = $this.find('.Card-Transition');

                    crs.animate({ bottom: '0', opacity: '1' }, 1000);
                   
           }, index * 700);
        }
    });
    //Academy Text
    $('.Academy-Container-text').each(function () {
        var $this = $(this),
            hT = $this.offset().top,
            hH = $this.outerHeight();

        if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
            
            crs = $this.find('.Academy-text');

                crs.animate({ bottom: '0', opacity: '1' }, 2000);
            

        }
    })
    // video
    $('.col-Video').each(function () {
        var $this = $(this),
            hT = $this.offset().top,
            hH = $this.outerHeight();

        if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {

            crs = $this.find('.c-Video');

            crs.animate({ top: '0', opacity: '1' }, 2000);


        }
    })
    //Video-List
    $(".video-Menu-Items").each(function () {
        var $this = $(this),
            hTs = $this.offset().top,
            hHs = $this.outerHeight(),
            index = $this.attr('data-index');
        if (wS > (hTs + hHs - wH) && (hTs > wS) && (wS + wH > hTs + hHs)) {

            setTimeout(function () {
                crs = $this.find('.Video-Menu-Item');

                crs.animate({ right: '0', opacity: '1'}, 1000);
                crs.animate({ marginRight: "0" }, 600);
                //crs.animate({ right: '0' }, 2000);

            }, index * 700);
        }
    });
    //Inestagram
    $(".Inestagram-Posts").each(function () {
        var $this = $(this),
            hTs = $this.offset().top,
            hHs = $this.outerHeight(),
            index = $this.attr('data-Index');
        if (wS > (hTs + hHs - wH) && (hTs > wS) && (wS + wH > hTs + hHs)) {

            setTimeout(function () {
                crs = $this.find('.Inestagram-Post');

                crs.animate({ right: '0', opacity: '1' }, 1000);

            }, index * 700);
        }
    });
    //Row-Cards
    $(".RowCards").each(function () {
        var $this = $(this),
            hTs = $this.offset().top,
            hHs = $this.outerHeight(),
            index = $this.attr('data-Index');
        if (wS > (hTs + hHs - wH) && (hTs > wS) && (wS + wH > hTs + hHs)) {

            setTimeout(function () {
                crs = $this.find('.RowCard');

                crs.animate({ opacity: '1' }, 2000);

            }, index * 1000);
        }
    });
});

//4Steps Hover
$('.step').each(function () {
    var $this = $(this);
    var imgs = $this.find('.pic');
    var textbody = $this.find(".myCard-body");

    $this.hover(function () {
        imgs.css("height", "62.5");
        imgs.css("width", "62.5");
        textbody.css("opacity", "1");
       
    }, function () {
        imgs.css("height", "125");
        imgs.css("width", "125");
        textbody.css("opacity", "0");

    });

       
});
 //LatestCourses
$('.Card-text-and-img-Container').each(function () {
    var $this = $(this);
    var textarea = $this.find('.myCard-body-text');
    var textimg = $this.find('.card-title');

    $this.hover(function () {
        textarea.css("transform", "translateY(-50px)");

        textimg.css("transform", "translateY(-50px)");
    }, function () {
        textarea.css("transform", "translateY(0)");
        textimg.css("transform", "translateY(0)");


    });


});
$('.Article-text-and-img-Container').each(function () {
    var $this = $(this);
    var textarea = $this.find('.myCard-body-text');

    $this.hover(function () {
        textarea.css("transform", "translateY(-50px)");

    }, function () {
        textarea.css("transform", "translateY(0)");


    });


});
$(document).ready(function () {
    $(".Inestagram-carousel").owlCarousel({
        //loop: true,
        nav: true,
        responsiveClass: true,
        rtl: true,
        //autoWidth: true,
        items: 4,
        autoplay: true,
        autoplayTimeout: 7000,
        autoplayHoverPause: true,
        margin:20,
        responsive: {
         
            0: {
                items: 1,
                nav: true
                
            },
            768: {
                items: 2,
                nav: true
            },
           
            992: {
                items: 3,
                nav: true
            },
            1200: {
                items: 4,
                nav: true
            },
            1400: {
                items: 4,
                nav: true
            }
        }
    });
    $(".Customer-carousel").owlCarousel({
        loop: true,
        nav: true,
        responsiveClass: true,
        rtl: true,
        //autoWidth: true,
        items: 7,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        //autoHeight: true,
        margin: 10,
        responsive: {

            0: {
                items: 3,
                nav: true

            },
            768: {
                items: 5,
                nav: true
            },

            992: {
                items: 5,
                nav: true
            },
            1200: {
                items: 7,
                nav: true
            },
            1400: {
                items: 7,
                nav: true
            }
        }
    });
});