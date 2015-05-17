function mapModel(){
  this.mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-41.282845, 174.765644)
  };
  this.map = new google.maps.Map(document.getElementById('map-canvas'),
      this.mapOptions);
      window.onload = this.loadScript;
      this.createMarker(this.map);
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

mapModel.prototype.createMarker = function(map){
  // console.log(tweet);
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(-41.282845, 174.765644),
    title: "hello",
    map:map
  });
};

mapModel.prototype.addMarker = function(marker){
  // marker.setMap(this.map);
}
