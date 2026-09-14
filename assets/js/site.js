document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".tracker-block[data-snippet]").forEach(async (block) => {
    try {
      const response = await fetch(block.dataset.snippet);
      if (!response.ok) throw new Error("Snippet not found");
      block.textContent = await response.text();
    } catch (error) {
      block.textContent = "PLACE YOUR RENOISE / TRACKER SNIPPET HERE";
    }
  });

  document.querySelectorAll(".track audio").forEach((audio) => {
    audio.addEventListener("loadedmetadata", () => {
      const track = audio.closest(".track");
      const duration = track?.querySelector(".track-duration");
      if (!duration || !Number.isFinite(audio.duration)) return;
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60).toString().padStart(2, "0");
      duration.textContent = `${minutes}:${seconds}`;
    });
  });
});
