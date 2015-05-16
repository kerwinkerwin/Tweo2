function tweetController(){
  this.map = new mapModel();
}

tweetController.prototype.renderMap = function(){
    this.map.reSizeMap();
};
