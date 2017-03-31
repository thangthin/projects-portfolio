(function() {
    // handler to animate article when clicked
    function animateHandler(evt) {
        console.log("clicked");
    }

    [...document.querySelectorAll("article>div>a")].forEach(
        (a) => {
            // overwrite default behavior of empty anchor link click handler
            a.addEventListener("click", (evt) => {
                evt.preventDefault();
            })

            //add the handler for animation
            a.addEventListener("click", animateHandler);
        }
    )
}())