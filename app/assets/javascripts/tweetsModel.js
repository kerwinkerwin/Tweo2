function tweetModel(){

}

tweetModel.prototype.getTweets = function(formData){
  var data = $(formData).serialize()
  var url = $(formData).attr('action')
  url = url + "?"+data
  var pins = [];
  $.get(url).done(function(data){
    tweetController.renderMap();
    for(var i =0; i<data["tweets"].length; i++){
      if (data["tweets"][i].latitude != null) {
        pins.push([data["tweets"][i].latitude, data["tweets"][i].longitude, data["tweets"][i].score, data["tweets"][i].score_color]);
      };
    };
    return pins;
    // mapModel.createMarker(pins)
    // tweetController.addMarkers(pins);
  })
};
