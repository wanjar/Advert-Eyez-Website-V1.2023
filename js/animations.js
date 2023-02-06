(function () {

    window.setTimeout(function () {
        $(document.body).addClass("visible");
    }, 1100);

    var controller = new ScrollMagic.Controller();

    if ($('.our-people').length > 0) {
        var animProps = {
            y: -100,
            opacity: 0,
            scale: 0.7
        };
        var $people = $(".our-people .col-xs-12");
        if ($(window).width() > 991) {
            for (var i = 3; i < $people.length; i += 3) {
                var threePeople = $people.slice(i, i + 3);
                new ScrollMagic.Scene({
                    triggerElement: threePeople[0]
                })
                        .setTween(new TimelineMax().staggerFrom(threePeople, 0.5, animProps, 0.4))
                        //.addIndicators({ name: "scene 1" })
                        .addTo(controller);
            }
        } else if ($(window).width() > 767) {
            for (var i = 2; i < $people.length; i += 2) {
                var threePeople = $people.slice(i, i + 2);
                new ScrollMagic.Scene({
                    triggerElement: threePeople[0]
                })
                        .setTween(new TimelineMax().staggerFrom(threePeople, 0.5, animProps, 0.4))
                        //.addIndicators({ name: "scene 1" })
                        .addTo(controller);
            }
        } else {
            for (var i = 1; i < $people.length; i++) {
                var threePeople = $people.slice(i, i + 1);
                new ScrollMagic.Scene({
                    triggerElement: threePeople[0]
                })
                        .setTween(new TimelineMax().staggerFrom(threePeople, 0.5, animProps, 0.4))
                        //.addIndicators({ name: "scene 1" })
                        .addTo(controller);
            }
        }
    }


    if ($('.notwork.top-central').length > 0) {
        var team = new TimelineMax();
        team.from(".notwork.top-central", 1.4, {
            x: -400,
            opacity: 0
        }, 0.1);
        var scene2 = new ScrollMagic.Scene({
            triggerElement: "body"
        })
                .setTween(team)
                //.addIndicators({ name: "scene 2" })
                .addTo(controller);
    }

    if ($('.work.top-central').length > 0) {
        var team = new TimelineMax();
        team.from(".work.top-central", 1.8, {
            x: 0,
            opacity: 0
        }, 0.8);
        var scene2 = new ScrollMagic.Scene({
            triggerElement: "body"
        })
                .setTween(team)
                //.addIndicators({ name: "scene 2" })
                .addTo(controller);
    }


    if ($('.about-graphics').length > 0) {
        var aboutGr = new TimelineMax();
        aboutGr.staggerFrom(".about-graphics img", 0.2, {
            scale: 0.7
        }, 0.2);
        var scene3 = new ScrollMagic.Scene({
            triggerElement: ".about-graphics"
        })
                .setTween(aboutGr)
                //.addIndicators({ name: "scene 2" })
                .addTo(controller);

        var aboutList = new TimelineMax();
        aboutList.staggerFrom(".about-list li", 0.8, {
            x: -300,
            opacity: 0
        }, 0.4);
        var scene4 = new ScrollMagic.Scene({
            triggerElement: ".about-list"
        })
                .setTween(aboutList)
                //.addIndicators({ name: "scene 2" })
                .addTo(controller);
    }



    var ct1 = new TimelineMax();
    ct1.from(".cape-town", 3, {
        x: "-100%",
        opacity: 0,
        scale: 1.1
    });
    var ctscene = new ScrollMagic.Scene({
        triggerElement: ('body')
    })
            //.setTween(ct1)
            //.addIndicators({ name: "scene 2" })
            .addTo(controller);

    if ($(window).width() > 768) {
        $('.company').each(function (index, elem) {
            if (!$(this).hasClass("cape-town")) {
                var tl = new TimelineMax();
                tl.from(this, 3.4, {
                    x: (index % 2 === 0) ? '-100%' : "100%",
                    opacity: 0
                });
                var scene = new ScrollMagic.Scene({
                    triggerElement: ('body')
                })
                        .setTween(tl)
                        //.addIndicators({ name: "scene 2" })
                        .addTo(controller);
            }
        });
    }


    var $cL = $('footer.footer .contact-line, footer.footer .about');
    var wH = $(window).height();
    $('footer.footer').height(wH);
    var fH = wH;
    var cLH = $cL.height();

    function positionContactLine() {
        var fVisible = wH + $(window).scrollTop() - $('footer.footer').offset().top;
        fH = (fVisible < 400) ? 400 : fVisible;
        var cLTop = fH / 2 - cLH / 2;
        $cL.css({
            top: cLTop
        });
    }

    if ($('footer.footer').length > 0) {
        $(window).on("scroll", positionContactLine);
    }

    var bgX = 0;
    setInterval(function () {
        bgX--;
        var val = bgX + "px center";
        $('.logo-slider').css({
            backgroundPosition: val
        });
    }, 100 / 10);

})();
