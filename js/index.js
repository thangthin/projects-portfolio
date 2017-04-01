(function() {
    // project details for modal display
    const PROJECT_DETAILS = {
        "APPIFY": "This is APPIFY project description Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "SUNFLOWER": "This is SUNFLOWER's project description: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "BOKEH": "VR demonstration: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    };

    // getting the elements
    let modal = document.querySelector(".modal");
    let closeButton = document.querySelector(".close");
    let modalContentDetail = document.querySelector("#modal-content-detail");
    let modalContentTitle = document.querySelector("#modal-content-title");
    //helpers
    function toggleModal() {
        // toggle element style display property between: none and block
        modal.style.display = modal.style.display == "none" ? "block" : "none";
    }

    function setModalContent(evt) {
        // set the modal content to the app name
        let projectName = evt.target.textContent
        modalContentTitle.textContent = projectName
        modalContentDetail.textContent = PROJECT_DETAILS[projectName];
    }

    // set modal to watch click
    closeButton.addEventListener("click", toggleModal);

    // for each project, set the toggle handler for when link is clicked
    // set the modal content to the appropriate project detail
    [...document.querySelectorAll(".project-title")].forEach(
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