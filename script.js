const inputText = document.getElementById("input-text");
const hiddenContent = document.querySelectorAll(".hidden-content");

inputText.addEventListener("input", function() {
  const inputValue = inputText.value.toLowerCase();

  hiddenContent.forEach(content => {
    content.style.display = "none";
  });

  if (inputValue === "esquisita") {
    document.getElementById("fro-content").style.display = "block";
    playAudio("audio");
  } else if (inputValue === "lindeza") {
    document.getElementById("palavra1-content").style.display = "block";
    playAudio("audio-palavra1");
  } else if (inputValue === "ruela frouxa") {
    document.getElementById("palavra2-content").style.display = "block";
    playAudio("audio-palavra2");
  } else if (inputValue === "quer sonegar imposto cmg?") {
    document.getElementById("palavra3-content").style.display = "block";
    playAudio("audio-palavra3");
  } else {
    pauseAudio();
  }
});

function playAudio(audioId) {
  const audio = document.getElementById(audioId);
  audio.play();
}

function pauseAudio() {
  const audio = document.querySelectorAll("audio");
  audio.forEach(a => {
    a.pause();
  });
}
