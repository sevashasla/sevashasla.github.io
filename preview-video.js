const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.publication-image.has-video').forEach((preview) => {
  const video = preview.querySelector('.publication-video');
  const project = preview.closest('.publication');
  let pointerInside = false;
  let focused = false;

  const play = async () => {
    if (reducedMotion.matches) return;

    try {
      await video.play();
      if (pointerInside || focused) {
        preview.classList.add('is-playing');
      } else {
        video.pause();
        video.currentTime = 0;
      }
    } catch {
      // Keep the static poster visible if autoplay is unavailable.
    }
  };

  const stop = () => {
    preview.classList.remove('is-playing');
    video.pause();
    video.currentTime = 0;
  };

  project.addEventListener('pointerenter', () => {
    pointerInside = true;
    play();
  });
  project.addEventListener('pointerleave', () => {
    pointerInside = false;
    if (!focused) stop();
  });
  project.addEventListener('focusin', () => {
    focused = true;
    play();
  });
  project.addEventListener('focusout', (event) => {
    if (!project.contains(event.relatedTarget)) {
      focused = false;
      if (!pointerInside) stop();
    }
  });
  reducedMotion.addEventListener('change', ({ matches }) => {
    if (matches) stop();
  });
});
