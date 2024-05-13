function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    if (searchTerm === "blade ball") {
        window.location.href = "bladeball.html";
    } else if (searchTerm === "counter blox") {
        window.location.href = "counterblox.html";
    } else if (searchTerm === "doors") {
        window.location.href = "doors.html";
    } else if (searchTerm === "blox fruits") {
        window.location.href = "bloxfruits.html";
    } else if (searchTerm === "adopt me") {
        window.location.href = "adoptme.html";
    } else {
        // Redirect to the scriptnotfound.html for unknown games
        window.location.href = "scriptnotfound.html";
    }
}
