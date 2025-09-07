
(function(){
  function init(root){
    var viewport = root.querySelector('.hc-viewport');
    var track = root.querySelector('.hc-track');
    var slides = Array.prototype.slice.call(root.querySelectorAll('.hc-slide'));
    var bulletsWrap = root.querySelector('.hc-bullets');
    var prev = root.querySelector('.hc-prev');
    var next = root.querySelector('.hc-next');
    var items = Math.max(1, parseInt(root.getAttribute('data-items')||'1',10));
    var duration = Math.max(1000, parseInt(root.getAttribute('data-duration')||'7000',10));
    var index = 0;
    var timer = null;

    // width per slide based on items
    function resize(){
      slides.forEach(function(sl){ sl.style.flexBasis = (100/items)+'%'; });
      go(index, false);
    }
    window.addEventListener('resize', resize);
    resize();

    // bullets
    bulletsWrap.innerHTML='';
    slides.forEach(function(_,i){
      var b = document.createElement('button');
      b.setAttribute('type','button');
      b.addEventListener('click', function(){ go(i); });
      bulletsWrap.appendChild(b);
    });

    function updateBullets(){
      var buttons = bulletsWrap.querySelectorAll('button');
      buttons.forEach(function(b,i){
        if(i===index) b.setAttribute('aria-current','true');
        else b.removeAttribute('aria-current');
      });
    }

    function go(i, smooth){
      index = (i+slides.length)%slides.length;
      var w = viewport.clientWidth;
      track.scrollTo({left: Math.floor(index * (w/items)), behavior: (smooth===false?'auto':'smooth')});
      updateBullets();
    }

    function nextSlide(){ go(index+1); }
    function prevSlide(){ go(index-1); }

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    function start(){
      stop(); timer = setInterval(nextSlide, duration);
    }
    function stop(){
      if(timer){ clearInterval(timer); timer=null; }
    }
    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    track.addEventListener('touchstart', stop, {passive:true});
    track.addEventListener('touchend', start, {passive:true});

    start();
    updateBullets();
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.hc-slider').forEach(init);
  });
})();
