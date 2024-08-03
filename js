document.addEventListener('DOMContentLoaded', function () {
    const videos = [
        { id: 1, title: "Video 1", description: "Description 1", src: "video1.mp4" },
        { id: 2, title: "Video 2", description: "Description 2", src: "video2.mp4" },
        // Add more video objects here
    ];

    const videoList = document.getElementById('video-list');
    const videoPlayer = document.getElementById('video-player');
    const player = document.getElementById('player');
    const backButton = document.getElementById('back-button');
    const searchInput = document.getElementById('search');

    function displayVideos(videoArray) {
        videoList.innerHTML = '';
        videoArray.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <h3>${video.title}</h3>
                <p>${video.description}</p>
            `;
            videoItem.onclick = () => playVideo(video);
            videoList.appendChild(videoItem);
        });
    }

    function playVideo(video) {
        videoList.classList.add('hidden');
        videoPlayer.classList.remove('hidden');
        player.src = video.src;
        player.play();
    }

    backButton.onclick = () => {
        videoPlayer.classList.add('hidden');
        videoList.classList.remove('hidden');
        player.pause();
    };

    searchInput.oninput = () => {
        const query = searchInput.value.toLowerCase();
        const filteredVideos = videos.filter(video => video.title.toLowerCase().includes(query));
        displayVideos(filteredVideos);
    };

    displayVideos(videos);
});
