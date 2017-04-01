(function() {
    // project details for modal display
    const PROJECT_DETAILS = {
        "APPIFY": "This is APPIFY project description",
        "SUNFLOWER": "This is SUNFLOWER's project description",
        "BOKEH": "VR demonstration"
    };

    // getting the elements
    let modal = document.querySelector(".modal");
    let closeButton = document.querySelector(".close");
    let modalContentDetail = document.querySelector("#modal-content-detail");

    //helpers
    function toggleModal() {
        // toggle element style display property between: none and block
        modal.style.display = modal.style.display == "none" ? "block" : "none";
    }

    function setModalContent(evt) {
        // set the modal content to the app name
        modalContentDetail.textContent = PROJECT_DETAILS[evt.target.textContent];
    }

    // set modal to watch click
    closeButton.addEventListener("click", toggleModal);

    // for each project, set the toggle handler for when link is clicked
    // set the modal content to the appropriate project detail
    [...document.querySelectorAll("article>div>a")].forEach(
        (a) => {
            // overwrite default behavior of empty anchor link click handler
            a.addEventListener("click", (evt) => {
                    evt.preventDefault();
                })
                //add the handler for animation
            a.addEventListener("click", toggleModal);
            a.addEventListener("click", setModalContent);
        }
    )
}())