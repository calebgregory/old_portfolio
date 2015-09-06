$(document).ready(() => {
  var clicking = false
    , fontSize = 13
    , currY
    , contained = true;

  $('.portrait').mousedown(function() {
    clicking = true;

    $(this).mousemove(e => {
      if(clicking == false) return;

      // Mouse click + moving logic here


      if(e.pageY <= currY - 5 && fontSize < 28) {
        if($(window).width() < $('pre').width()) return;
        fontSize++;
      } else if(e.pageY > currY + 5 && fontSize > 4) {
        fontSize--;
      }
      console.log(currY,e.pageY,fontSize)
      currY = e.pageY;

      $('pre').css('font-size',fontSize+'px');
    });

  });

  $(document).mouseup(() => {
    clicking = false;
  })

  function toggleContainer(clicker) {
    if(contained) {
      $('.portrait').css('max-height', 1000);
      $('.portrait').css('max-width', 1500);
      $('.portrait pre').css('max-height', 1000);
      $('.portrait pre').css('max-width', 1500);
      $(clicker).text('put this back in its damn container');
      contained = false;
    } else {
      $('.portrait').css('max-height', 500);
      $('.portrait').css('max-width', 500);
      $('.portrait pre').css('max-height', 500);
      $('.portrait pre').css('max-width', 500);
      $(clicker).text('get rid of this damn container');
      contained = true;
    }
  }
  $('#toggle-container').on('click', function(e) {
    toggleContainer(this);
    e.preventDefault();
  });
});
