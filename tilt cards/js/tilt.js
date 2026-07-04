(function() {
  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
    var glare = card.querySelector('.card-glare');

    card.addEventListener('mouseenter', function() {
      card.classList.add('is-hovering');
    });

    card.addEventListener('mousemove', function(e) {
      var rect = card.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      var centerX = rect.width / 2;
      var centerY = rect.height / 2;

      var rotateX = ((y - centerY) / centerY) * -15;
      var rotateY = ((x - centerX) / centerX) * 15;

      card.style.transform = 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale3d(1.02, 1.02, 1.02)';

      if (glare) {
        var glareX = (x / rect.width) * 100;
        var glareY = (y / rect.height) * 100;
        glare.style.background = 'radial-gradient(circle at ' + glareX + '% ' + glareY + '%, rgba(255,255,255,0.8) 0%, transparent 60%)';
      }
    });

    card.addEventListener('mouseleave', function() {
      card.classList.remove('is-hovering');
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  });
})();
