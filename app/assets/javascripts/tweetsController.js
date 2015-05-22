function tweetController(){
  this.map = new mapModel();
  this.tweetModel = new tweetModel();
};

tweetController.prototype.getTweets = function(formData){
  console.log(formData);
  var tweets  = function (){
  this.tweetModel.getTweets(formData);
  this.map.createMarker(tweets);
  }
};


tweetController.prototype.renderMap = function(){
    this.map.reSizeMap();
};

tweetController.prototype.addMarkers = function(tweet){


};
