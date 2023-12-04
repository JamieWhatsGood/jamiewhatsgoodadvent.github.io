// script.js

// Function to populate content for each day
function populateDays() {
    const days = document.querySelectorAll('.day');

    const quotes = [
        "The best way to spread Christmas cheer is singing loud for all to hear. - Elf",
        "Christmas waves a magic wand over this world, and behold, everything is softer and more beautiful. - Norman Vincent Peale",
        "Maybe Christmas, he thought, doesn't come from a store. Maybe Christmas... perhaps... means a little bit more! - Dr. Seuss"
        // Add more quotes here for each day
    ];

    const images = [
        "https://example.com/image1.jpg",
        "https://example.com/image2.jpg",
        "https://example.com/image3.jpg"
        // Add more image URLs here for each day
    ];

    const movies = [
        "Movie Recommendation 1",
        "Movie Recommendation 2",
        "Movie Recommendation 3"
        // Add more movie recommendations here for each day
    ];

    const techTips = [
        "Tech Tip 1",
        "Tech Tip 2",
        "Tech Tip 3"
        // Add more tech tips here for each day
    ];

    days.forEach((day, index) => {
        const content = day.querySelector('.content');
        const quote = content.querySelector('.quote');
        const image = content.querySelector('.image');
        const movie = content.querySelector('.movie');
        const techTip = content.querySelector('.tech-tip');

        quote.textContent = quotes[index % quotes.length];
        image.src = images[index % images.length];
        movie.textContent = movies[index % movies.length];
        techTip.textContent = techTips[index % techTips.length];
    });
}

// Call the function to populate days when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateDays);

