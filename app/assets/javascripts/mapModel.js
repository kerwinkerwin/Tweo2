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
  var googleMap = this.map;
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(tweets[0], tweets[1]),
    title: "hello",
  });
  console.log(marker);
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
      if (data["tweets"][i].latitude != null) {
        createMarker([data["tweets"][i].latitude, data["tweets"][i].longitude]);
      };
    };

    // mapModel.createMarker(pins)
    // tweetController.addMarkers(pins);
  })
};
