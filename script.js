window.addEventListener('scroll', function() {
    var video = document.getElementById('background-video');
    var videoContainer = document.getElementById('video-container');
    
    // Get the top and bottom positions of the video container
    var containerTop = videoContainer.getBoundingClientRect().top;
    var containerBottom = videoContainer.getBoundingClientRect().bottom;

    // Get the viewport height
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;

    // Check if the video container is completely out of view
    if (containerTop > viewportHeight || containerBottom < 0) {
        videoContainer.style.display = 'none'; // Hide the video if it's scrolled out of view
    } else { 
        videoContainer.style.display = 'none'; // Show the video if it's within the viewport
    }
}); 