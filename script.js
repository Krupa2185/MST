// Scroll Effect for Background Images
window.addEventListener('scroll', function() {
    document.querySelectorAll('.bgimg').forEach(bg => {
        let rect = bg.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            bg.classList.add('scroll-effect');
        } else {
            bg.classList.remove('scroll-effect');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var searchBtn = document.getElementById("searchBtn");
    var searchContainer = document.getElementById("searchContainer");
    var searchBox = document.getElementById("searchBox");
    var searchSubmit = document.getElementById("searchSubmit");

    // Toggle search box on click
    searchBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent immediate close
        searchContainer.style.display = (searchContainer.style.display === "block") ? "none" : "block";
        searchBox.focus(); // Auto-focus input
    });

    // Hide search box when clicking outside
    document.addEventListener("click", function(event) {
        if (!searchContainer.contains(event.target) && event.target !== searchBtn) {
            searchContainer.style.display = "none";
        }
    });

    // Submit button action
    searchSubmit.addEventListener("click", function() {
        var query = searchBox.value.trim();
        if (query !== "") {
            alert("You searched for: " + query);
            searchContainer.style.display = "none"; // Hide after submission
        }
    });
});
