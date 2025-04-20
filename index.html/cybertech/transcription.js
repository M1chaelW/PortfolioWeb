document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector("iframe");
    const transcriptContainer = document.getElementById("transcript");
    const transcript = [
        { time: 0, text: "Welcome to our server tutorial." },
        { time: 5, text: "In this video, we'll show you how to connect." },
        { time: 10, text: "Step 1: Access the server settings." },
        { time: 15, text: "Step 2: Enter your credentials." },
        { time: 20, text: "Step 3: Confirm the connection." },
        { time: 25, text: "You're now connected!" }
    ];

    let currentTranscriptIndex = 0;

    function updateTranscript(currentTime) {
        if (currentTranscriptIndex < transcript.length && currentTime >= transcript[currentTranscriptIndex].time) {
            transcriptContainer.innerText = transcript[currentTranscriptIndex].text;
            currentTranscriptIndex++;
        }
    }

    video.addEventListener("timeupdate", function() {
        const currentTime = Math.floor(video.currentTime);
        updateTranscript(currentTime);
    });
});
