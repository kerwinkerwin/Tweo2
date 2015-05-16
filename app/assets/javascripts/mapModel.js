function mapModel(){
  console.log("mapmodel")

  this.mapOptions = {
    zoom: 4,
    center: new google.maps.LatLng(41, 174)
  };
  this.map = new google.maps.Map(document.getElementById('map-canvas'),
      this.mapOptions);
      window.onload = this.loadScript;
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
