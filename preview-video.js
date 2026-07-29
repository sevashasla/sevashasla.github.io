const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.publication-image.has-video').forEach((preview) => {
  const video = preview.querySelector('.publication-video');
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

  preview.addEventListener('pointerenter', () => {
    pointerInside = true;
    play();
  });
  preview.addEventListener('pointerleave', () => {
    pointerInside = false;
    if (!focused) stop();
  });
  preview.addEventListener('focus', () => {
    focused = true;
    play();
  });
  preview.addEventListener('blur', () => {
    focused = false;
    if (!pointerInside) stop();
  });
  reducedMotion.addEventListener('change', ({ matches }) => {
    if (matches) stop();
  });
});
