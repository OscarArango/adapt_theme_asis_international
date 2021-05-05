// LAZY LOAD FUNCTION

function lazyLoad() {
  $('iframe').each(function() {
    var frame = $(this),
        vidSource = $(frame).attr('data-src'),
        distance = $(frame).offset().top - $(window).scrollTop(),
        distTopBot = window.innerHeight - distance,
        distBotTop = distance + $(frame).height();

    if (distTopBot >= 0 && distBotTop >= 0) { // if frame is partly in view
      $(frame).attr('src', vidSource);
      $(frame).removeAttr('data-src');
    }
  });
}
var throttled = _.throttle(lazyLoad, 100);
$(window).scroll(throttled);


// ILLUSTRATION OF VARIABLES
// as calculated on div#example
/*function lazyLoadExample() {
  var frame = $('#example'),
      vidSource = $(frame).attr('data-src'),
      distance = $(frame).offset().top - $(window).scrollTop(),
      distTopBot = Math.round(window.innerHeight - distance), // distance from top of frame to bottom of viewport
      distBotTop = Math.round(distance + $(frame).height()); // distance from bottom of frame to top of viewport

  document.getElementById('stick1').innerHTML = "distBotTop: " + distBotTop;
  document.getElementById('stick2').innerHTML = "distTopBot: " + distTopBot;
}
var throttled = _.throttle(lazyLoadExample, 100);
$(window).scroll(throttled); */