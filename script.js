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
    } else if (searchTerm === "jail break") {
        window.location.href = "jailbreak.html";
    } else if (searchTerm === "type://soul" || searchTerm === "type soul" || searchTerm === "TYPE://SOUL") {
        window.location.href = "typesoul.html";
    } else {
        // Redirect to the scriptnotfound.html for unknown games
        window.location.href = "scriptnotfound.html";
    }
}
