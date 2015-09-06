$(document).ready(() => {
  var clicking = false
    , lineHeight = 1.2
    , currY
    , contained = true;

  $('.portrait').mousedown(function() {
    clicking = true;

    $(this).mousemove(e => {
      if(clicking == false) return;

      // Mouse click + moving logic here

      if(e.pageY <= currY - 5 && lineHeight < 4.1) {
        if($(window).width() < $('pre').width()) return;
        lineHeight += 0.1;
      } else if(e.pageY > currY + 5 && lineHeight > .3) {
        lineHeight -= 0.1;
      }
      console.log(currY,e.pageY,lineHeight)
      currY = e.pageY;

      $('pre').css('line-height',lineHeight);
    });

  });

  $(document).mouseup(() => {
    clicking = false;
  })
});
