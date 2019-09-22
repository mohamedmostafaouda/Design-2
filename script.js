$(function () {
  let c=1;
  var x;
  var slides = $('.slide');
  function startSlider() {
     x = setInterval(() => {
      $('.slider ul').animate({
        'margin-left' : '-=100%'
      },
      function () {
        activeBullet(c);
        c++;
        if (c==slides.length){
          $('ul').css('margin-left', '0');
          c=1;
        }});
      }, 
        3000);
  };
  function activeBullet(s) {
    $('.bullet').removeClass('active-bullet');
    var group = document.getElementsByClassName('bullet');
    group[s%(slides.length-1)].classList.add("active-bullet");
  }
  startSlider();
  $('.slider ul').mouseenter(function () {
    clearInterval(x);
  }).mouseleave(startSlider);
});
$( window ).resize(function() {
    var width = $('#images-sub-container img').width();
    $('#images-sub-container img').css('height',width);
  });
