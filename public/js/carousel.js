(function () {
  function initCarousel(root) {
    const viewport = root.querySelector('.hc-viewport');
    const track    = root.querySelector('.hc-track');
    const slides   = Array.from(root.querySelectorAll('.hc-slide'));
    const prevBtn  = root.querySelector('.hc-prev');
    const nextBtn  = root.querySelector('.hc-next');
    const bullets  = root.querySelector('.hc-bullets');

    const duration = +root.dataset.duration || 7000;
    let index = 0, timer = null, locked = false;

    // bullets
    slides.forEach((_, i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.setAttribute('aria-label', `Go to slide ${i+1}`);
      b.addEventListener('click', () => go(i, true));
      bullets.appendChild(b);
    });

    function mark() {
      bullets.querySelectorAll('button').forEach((b, i) =>
        b.setAttribute('aria-current', i === index ? 'true' : 'false'));
    }

    function go(i, user) {
      if (locked) return;
      index = (i + slides.length) % slides.length;
      track.style.transform = `translate3d(${-index * 100}%,0,0)`;
      mark();
      if (user) restart();
    }

    function next(){ go(index + 1) }
    function prev(){ go(index - 1) }

    // autoplay
    function restart(){
      stop();
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      timer = setInterval(next, duration);
    }
    function stop(){ if (timer){ clearInterval(timer); timer = null; } }

    // hover pause
    viewport.addEventListener('mouseenter', stop);
    viewport.addEventListener('mouseleave', restart);
    // buttons
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);

    // swipe
    let x0 = null;
    viewport.addEventListener('pointerdown', e => { x0 = e.clientX; locked = true; });
    viewport.addEventListener('pointerup',   e => {
      if (x0 != null){
        const dx = e.clientX - x0;
        if (Math.abs(dx) > 30) (dx < 0 ? next() : prev());
      }
      x0 = null; locked = false;
    });

    // init
    mark(); restart();
    // respond to page visibility
    document.addEventListener('visibilitychange', () => {
      document.hidden ? stop() : restart();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hc-slider').forEach(initCarousel);
  });
})();
