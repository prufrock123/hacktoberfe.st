;
(function(win, undefined) {
    var css = [{
        url: "./bower_components/normalize.css/normalize.css"
    }, {
        url: "./bower_components/typeplate-starter-kit/css/typeplate.css"
    }, {
        url: "./bower_components/normalize-opentype.css/normalize-opentype.css"
    }, {
        url: "./dist/style.css"
    }];

    var js = [{
        url: "./js/svg.js"
    }, {
        url: "./bower_components/jquery/dist/jquery.min.js"
    }, {
        url: "./js/getshares.js"
    }]

    loader.textInjection = false;

    loader.load.apply(loader, css.concat(js)).then(function() {
        document.body.style.opacity = 1;
        loadSVG("./img/beer-stein.svg");

        var shareObj = {
            url: "http://hacktoberfe.st",
            message: "Hacktoberfest - a Houston hackathon with a tip of the hat to fall, Oktoberfest, and Bavarian flare. http://hacktoberfe.st"
        }

        new GetShare({
            root: $(".twitter"),
            network: "twitter",
            share: shareObj
        });

        new GetShare({
            root: $(".facebook"),
            network: "facebook",
            share: shareObj
        });

        new GetShare({
            root: $(".googleplus"),
            network: "googleplus",
            share: shareObj
        });
    });
})(window, undefined);
