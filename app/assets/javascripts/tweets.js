$(document).ready(function(){
   console.log("hello");
  $('form').on("submit", function(event){
    event.preventDefault()
    var data = $(this).serialize()
    var url = $(this).attr('action')
    url = url + "?"+data
    $.get(url).done(function(data){
      loadScript();
      $.when(map.prototype.displayMap()).then(map.prototype.hideSearch());
      $.each(data, function(i,value){
        $.each(value, function(i,value2){
          var marker = new google.maps.Marker({
            position: new google.maps.LatLng(value2.latitude,value2.longitude),
            Map:map,
            title:value2.text
          });
        });
      });

    })
  })
})

function loadScript() {
  google.maps.event.addDomListener(window, 'load', initialize);
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

function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    center: { lat: 0, lng:0},
    zoom: 3
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

      var marker = new google.maps.Marker({
         position: myLatlng,
         map: map,
         title: 'Hello World!'
     });
};
