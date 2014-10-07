// synchronously loads the SVG file into the page (to prevent FOUC - "Flash of unstyled content")
// We do this in JavaScript right now because templates or a SPA was not in use - thus we would have to copy this svg
// link to every flat HTML file
//
// If desired, remove loadSVG calls and embed the <svg> content from the file URL ('name') into each HTML file.
// Not recommended as it makes the content itself much larger and harder to find or edit HTML, as well as ruins
// the "cacheability" of the SVG file itself.
//
// Loading it separately means it is only actually loaded once over the network, and loaded from cache the rest of the time.

function loadSVG(name) {
    var url = name;
    loader.promise.get(url).then(function(error, data) {
        var svg = document.createElement('svg');
        svg.innerHTML = data.replace('<(/)*svg>', '');
        svg.style.display = 'none';
        document.body.insertBefore(svg, document.body.firstChild);
    });
}
