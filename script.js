function search() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    if (searchTerm === "blade ball") {
        window.location.href = "bladeball.html";
    } else if (searchTerm === "counter blox") {
        window.location.href = "counterblox.html";
    } else {
        // Implement other search functionality or display a message for no results found
        alert("No results found for: " + searchTerm);
    }
}
