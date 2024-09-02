$(document).ready(function () {
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass("stickyadd");
        } else {
            $(".sticky").removeClass("stickyadd");
        }
    })

    var typed = new Typed('.element', {
        strings: ['Sooraj K V', 'A Developer'],
        smarBackspace: true,
        typeSpeed: 100,
        backspeed: 100,
        loop: true,
        loopCount: Infinity,
        startDelay: 1000
    });

    $(".btn").click(function () {
        notify("CV Not Uploaded :)");
    });

    // progress-bar
 
    var waypoint = new Waypoint({
        element: document.getElementById('exp-id'),
        handler: function () {
            var p = document.querySelectorAll(".progress-bar");
            p[0].setAttribute("style", "width:95%; transition:1s all;");
            p[1].setAttribute("style", "width:60%; transition:1.5s all;");
            p[2].setAttribute("style", "width:60%; transition:2s all;");
            p[3].setAttribute("style", "width:70%; transition:2.5s all;");
            p[4].setAttribute("style", "width:65%; transition:3s all;");
            p[5].setAttribute("style", "width:60%; transition:3.5s all;");
            p[6].setAttribute("style", "width:30%; transition:4s all;");
            p[7].setAttribute("style", "width:20%; transition:4s all;");
            p[8].setAttribute("style", "width:20%; transition:5s all;");
        },
        offset: '90%'
    });

    // owl carousel

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop:true,
            autoplay:true,
            autoplayTimeout:4000,
            items:1
        });
    });

});
