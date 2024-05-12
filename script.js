<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fun With Blxze</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Fun With Blxze</h1>
            <p>Use this site to get working scripts for your favorite Roblox game.</p>
        </header>
        <main>
            <div class="search-container">
                <input type="text" id="searchInput" placeholder="Search...">
                <button onclick="search()">Search</button>
            </div>
        </main>
        <footer>
            <button onclick="window.location.href = 'privacypolicy.html';">Privacy Policy</button>
            <button onclick="window.location.href = 'termsofuse.html';">Terms of Use</button>
        </footer>
    </div>
    <script>
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
    </script>
</body>
</html>
