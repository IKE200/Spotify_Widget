const data = {
  track: "A Song Title That might need Scrolling",
  artist: "Cool Artist",
  cover: "https://i.scdn.co/image/ab67616d00001e02a0354b0310d9a6b3b3b64dd3"
};

window.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("track");
  const artist = document.getElementById("artist");
  const cover = document.getElementById("cover");
  const trackContainer = document.getElementById("track-container");

  track.textContent = data.track;
  artist.textContent = data.artist;
  cover.src = data.cover;

  requestAnimationFrame(() => {
    const wrapper = document.getElementById("track-wrapper");
    const threshold = 50; // pixels of buffer
    if (wrapper.scrollWidth + threshold > trackContainer.clientWidth) {
      trackContainer.classList.add("scroll");
    } else {
      trackContainer.classList.remove("scroll");
    }
  });
});
