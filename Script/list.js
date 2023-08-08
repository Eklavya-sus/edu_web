document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');

    videoItems.forEach(videoItem => {
        videoItem.addEventListener('click', function() {

            // Redirect to the new URL
            window.location.href = 'playback.html';;
        });
    });
});