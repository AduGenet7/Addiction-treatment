document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const mediaGrid = document.getElementById('media-grid');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();
        const mediaItems = mediaGrid.getElementsByClassName('media-item');

        Array.from(mediaItems).forEach(item => {
            const title = item.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });

    const playButtons = document.querySelectorAll('.media-item video, .media-item audio');
    playButtons.forEach(media => {
        media.addEventListener('click', function () {
            if (media.paused) {
                media.play();
            } else {
                media.pause();
            }
        });
    });
});
