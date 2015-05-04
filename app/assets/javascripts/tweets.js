$(document).ready(function(){
   console.log("hello");
  $('form').on("submit", function(event){
    event.preventDefault()
    var data = $(this).serialize()
    var url = $(this).attr('action')
    var pins = [];
    url = url + "?"+data
    $.get(url).done(function(data){
      loadScript();
      $.when(map.prototype.displayMap()).then(map.prototype.hideSearch());
      $.each(data, function(i,value){
        $.each(value, function(i,value2){
          var myLatlng = new google.maps.LatLng(value2.latitude,value2.longitude);
          var marker = new google.maps.Marker({
            position: myLatlng,
            title:value2.text
          });
          marker.setMap(map.prototype.maps);
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
  var mapOptions = {
    center: { lat: 0, lng:0},
    zoom: 3
  };
  map.prototype.maps(mapOptions);

};

function map(){}

map.prototype.maps = function(mapOptions){
  this.map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
};
map.prototype.addMarker = function(){

};
