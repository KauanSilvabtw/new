document.getElementById("input-text").addEventListener("input", function() {
  var inputValue = this.value.toLowerCase();

  if (inputValue === "pt1") {
    document.getElementById("palavra-content0").style.display = "block";
    playMedia("audio");
    playMedia("video");
  } else if (inputValue === "pt2") {
    document.getElementById("palavra1-content").style.display = "block";
    playMedia("audio-palavra1");
    playMedia("video-palavra1");
  } else if (inputValue === "pt3") {
    document.getElementById("palavra2-content").style.display = "block";
    playMedia("audio-palavra2");
    playMedia("video-palavra2");
  } else if (inputValue === "pt4") {
    document.getElementById("palavra3-content").style.display = "block";
    playMedia("audio-palavra3");
    playMedia("video-palavra3");
  } else {
    hideAllContent();
    pauseMedia();
  }
});

function playMedia(mediaId) {
  var media = document.getElementById(mediaId);
  media.play();
}

function pauseMedia() {
  var mediaElements = document.querySelectorAll("audio, video");
  mediaElements.forEach(function(media) {
    media.pause();
  });
}

function hideAllContent() {
  var hiddenContents = document.querySelectorAll(".hidden-content");
  hiddenContents.forEach(function(content) {
    content.style.display = "none";
  });
}
