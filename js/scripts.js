var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var hey = 0;
var hello = 0;
var count = 0;
var mymap = L.map('main');
var mapboxAccessToken = 'pk.eyJ1IjoidGhlbW0yMyIsImEiOiJjamo2cm9pc3UyYWY0M3FvNGdvcXZodTNmIn0.slOt7V8CrTaUbhtt3Ecr6Q';
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' + mapboxAccessToken, {
  id: 'mapbox.streets',
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(mymap);

function scroll() {
  setInterval(function infinite() {
    mymap.setView([hello, hey], 4);
    hey += 100;
    count++;
    if (count % 2 == 0) {
      hello = Math.random() * 50;
    } else {
      hello = Math.random() * -50;
    }

  }, 2000);
}
/*scroll();
// mymap.setView([0, 100], 4);
$.fn.center = function () {
  this.css("position","absolute");
  this.css("top", Math.max(0, (
    ($(window).height() - $(this).outerHeight()) / 2) +
     $(window).scrollTop()) + "px"
  );
  this.css("left", Math.max(0, (
    ($(window).width() - $(this).outerWidth()) / 2) +
     $(window).scrollLeft()) + "px"
  );
  return this;
}
 $("#map-form").hide();
$("#overlay-content").show().center();
function register(){
  $("#overlay-content").hide();
  $("#map-form").show().center();
  console.log("hey");
}
