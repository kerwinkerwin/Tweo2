$(document).ready(function(){
   console.log("hello");
  $('form').on("submit", function(event){
    event.preventDefault()
    var data = $(this).serialize()
    var url = $(this).attr('action')
    url = url + "?"+data
    $.get(url).done(function(data){
      // var tweet = JSON.parse(data);
      // console.log(tweet);
      loadScript();
      $.when(map.prototype.displayMap()).then(map.prototype.hideSearch());
    })
  })
})

function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
  document.body.appendChild(script);
};



function map(){}

map.prototype.displayMap = function(){
  $("#map-canvas").show();
};

map.prototype.hideSearch = function(){
  $(".search").hide();
};
