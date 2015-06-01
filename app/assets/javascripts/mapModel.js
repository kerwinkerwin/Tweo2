function mapModel(){
  this.mapOptions = {
    zoom: 1,
    center: new google.maps.LatLng(-41.282845, 174.765644)
  };
  this.map = new google.maps.Map(document.getElementById('map-canvas'),
      this.mapOptions);
    window.onload = this.loadScript;
      // this.createMarker(this.map);
      console.log(this.map);
}

mapModel.prototype.loadScript = function(){
  var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
        '&signed_in=true&callback=initialize';
    document.body.appendChild(script);


};

mapModel.prototype.reSizeMap = function(){
  $('.gm-style').css('display','block');
  google.maps.event.trigger(this.map, 'resize')
};

mapModel.prototype.createMarker = function(tweets){
  var googleMap = this.map;
  console.log(this.map);
  console.log(googleMap)
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(tweets[1], tweets[0]),
    title: "hello",
  });
  marker.setMap(googleMap);
};

mapModel.prototype.addMarker = function(marker){
  // marker.setMap(this.map);
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
        // pins.push([data["tweets"][i].latitude, data["tweets"][i].longitude]);
        createMarker([data["tweets"][i].latitude, data["tweets"][i].longitude]);
      };
    };

    // mapModel.createMarker(pins)
    // tweetController.addMarkers(pins);
  })
};
