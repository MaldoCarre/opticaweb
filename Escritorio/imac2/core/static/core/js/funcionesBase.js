

      $(function () {
  $(document).scroll(function () { /* detecta si scroleamos */
    var $nav = $(".navv");//agrego color blango al nav
    var $a = $(".a");// agrego color negro a las letras
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    $a.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
$h=$(".a");
 $(".a").hover(function(){
   $(this).toggleClass("scrolled");
    // $(this).css("color", "white");
 }); /* 
 ver´por que no puedo cabiar las letras de hover 
*/
  });
});