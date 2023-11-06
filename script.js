function fadeInElement() {
    // Get the element by its id
    var element = document.getElementById('xfgr');

    // Gradually increase the opacity to 1 over 1 second
    var opacity = 0;
    var interval = setInterval(function () {
        opacity += 0.1;
        element.style.opacity = opacity;

        // Check if the opacity is fully transitioned to 1
        if (opacity >= 1) {
            clearInterval(interval);
        }
    }, 100);
}

// Set initial opacity to 0
document.getElementById('xfgr').style.opacity = 0;
// Use setTimeout to call the fadeInElement function after 10 seconds
setTimeout(fadeInElement, 10000);
