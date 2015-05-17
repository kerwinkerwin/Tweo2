function tweetController(){
  this.map = new mapModel();
  this.tweetModel = new tweetModel();
};

tweetController.prototype.getTweets = function(formData){
  var tweets = this.tweetModel.getTweets(formData);

};


tweetController.prototype.renderMap = function(){
    this.map.reSizeMap();
};

tweetController.prototype.addMarkers = function(tweet){
  console.log("hello")
  var map = this.map.map;
  this.map.createMarker(tweet, map);

};
