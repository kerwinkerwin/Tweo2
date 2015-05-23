function tweetModel(){

}

tweetModel.prototype.getTweets = function(formData){
  console.log(formData);
  console.log("hi");
  var data = $(formData).serialize()
  var url = $(formData).attr('action')
  url = url + "?"+data
  var pins = [];
  console.log("1")
  $.get(url).done(function(data){
    console.log("2")
    tweetController.renderMap();
    for(var i =0; i<data["tweets"].length; i++){
      if (data["tweets"][i].latitude != null) {
        pins.push([data["tweets"][i].latitude, data["tweets"][i].longitude]);
      };
    };
    return pins
  })
};
