$(document).ready(function(){
  $('form').on("submit", function(event){
    event.preventDefault()
    var data = $(this).serialize()
    var url = $(this).attr('action')
    url = url + "?"+data
    $.get(url).done(function(data){
      console.log(data["tweets"]);
      for(var i =0; i<data["tweets"].length; i++){
        console.log(data["tweets"][i]["tex"]);
      }


    })
  })
});
