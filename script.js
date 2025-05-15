// Example static data — replace with your dynamic Spotify data source
const data = {
  track: "A Very Very Very Long Song Title That Definitely Needs Scrolling",
  artist: "Cool Artist",
  cover: "https://i.scdn.co/image/ab67616d00001e02a0354b0310d9a6b3b3b64dd3"
};

window.addEventListener("DOMContentLoaded", () => {
  const trackEl = document.getElementById("track");
  const artistEl = document.getElementById("artist");
  const coverEl = document.getElementById("cover");

  trackEl.textContent = data.track;
  artistEl.textContent = data.artist;
  coverEl.src = data.cover;

  // Wait for the browser to fully render before measuring
  requestAnimationFrame(() => {
    if (trackEl.scrollWidth > trackEl.clientWidth) {
      trackEl.classList.add("scroll");
    } else {
      trackEl.classList.remove("scroll");
    }
  });
});
