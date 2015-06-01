function tweetController(){
  this.map = new mapModel();
  this.tweetModel = new tweetModel();
};

tweetController.prototype.getTweets = function(formData){
//call tweetModel.getTweets with formData
    this.map.getTweets(formData);
//call map.createMarker with above
};

tweetController.prototype.renderMap = function(){
    this.map.reSizeMap();
};

tweetController.prototype.addMarkers = function(tweet){
  // this.map.createMarker(tweet);
};
