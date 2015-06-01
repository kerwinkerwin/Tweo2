function mapModel(){
  this.mapOptions = {
    zoom: 1,
    center: new google.maps.LatLng(-41.282845, 174.765644)
  };
  this.map = new google.maps.Map(document.getElementById('map-canvas'),
      this.mapOptions);
    window.onload = this.loadScript;
}

mapModel.prototype.reSizeMap = function(){
  $('.gm-style').css('display','block');
  google.maps.event.trigger(this.map, 'resize')
};

mapModel.prototype.createMarker = function(tweets){
  console.log(tweets)
  var googleMap = this.map;
  var pinColor = tweets[2];
  console.log(tweets[2])
  var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
        new google.maps.Size(21, 34),
        new google.maps.Point(0,0),
        new google.maps.Point(10, 34));

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(tweets[0], tweets[1]),
    title: "hello",
    icon: pinImage,
  });
  marker.setMap(googleMap);
};

mapModel.prototype.addMarker = function(marker){

}

mapModel.prototype.getTweets = function(formData){
  var data = $(formData).serialize()
  var url = $(formData).attr('action')
  url = url + "?"+data
  var createMarker = this.createMarker.bind(this);
  var pins = [];
  $.get(url).done(function(data){
    tweetController.renderMap();
    for(var i =0; i<data["tweets"].length; i++){
      if (data["tweets"][i][0] != null) {
        createMarker([data["tweets"][i][0], data["tweets"][i][1], data["tweets"][i][2], data["tweets"][i][3]]);
      };
    };

    // mapModel.createMarker(pins)
    // tweetController.addMarkers(pins);
  })
};
