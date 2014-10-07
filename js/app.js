;(function(win, undefined) {
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
    }]

    loader.textInjection = false;

    loader.load.apply(loader, css.concat(js)).then(function() {
        document.body.style.opacity = 1;
        loadSVG("./img/beer-stein.svg");
    });
})(window, undefined);
