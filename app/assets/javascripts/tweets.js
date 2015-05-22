$(document).ready(function(){
  tweetController = new tweetController();
  $('form').on("submit", function(event){
    event.preventDefault()
    tweetController.getTweets(this)

  });
});
