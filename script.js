document.addEventListener("DOMContentLoaded", function() {
    console.log("Website loaded successfully!");

    // Example feature: Alert when clicking on a writeup
    const writeups = document.querySelectorAll("#writeups-list li a");
    writeups.forEach(writeup => {
        writeup.addEventListener("click", function(event) {
            event.preventDefault();
            alert("You clicked on " + this.textContent);
        });
    });
});
