// Example track info – replace with your API or integration
const data = {
  track: "A short title",
  artist: "Cool Artist",
  cover: "https://i.scdn.co/image/ab67616d00001e02a0354b0310d9a6b3b3b64dd3"
};

document.getElementById("track").textContent = data.track;
document.getElementById("artist").textContent = data.artist;
document.getElementById("cover").src = data.cover;

// Scroll if track name is too long
const trackEl = document.getElementById("track");
setTimeout(() => {
  if (trackEl.scrollWidth > trackEl.clientWidth) {
    trackEl.classList.add("scroll");
  }
}, 100);
