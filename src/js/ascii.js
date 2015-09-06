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
});
