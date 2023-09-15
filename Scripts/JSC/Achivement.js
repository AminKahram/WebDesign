$(document).scroll(function () {
    var hT = $('.Achivement-Section').offset().top,
        hH = $('.Achivement-Section').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
        $('.counter').each(function () {

            var $this = $(this),
                countTo = $this.attr('data-value');

            $({ countNum: $this.text() }).animate({
                countNum: countTo
            },
                {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
        });

    }
});
