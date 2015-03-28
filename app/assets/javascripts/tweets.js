$(document).ready(function(){
   console.log("hello");
  $('form').on("submit", function(event){
    event.preventDefault()
    var data = $(this).serialize()
    var url = $(this).attr('action')
    url = url + "?"+data
    $.get(url).done(function(data){
      loadScript();
      $.when(map.prototype.display_map()).then(map.prototype.hide_search());
      console.log(data)
    })
  })
})

function loadScript() {
  var script = document.createElement("script");
  script.src = "http://maps.googleapis.com/maps/api/js?callback=initialize";
  document.body.appendChild(script);
}



function map(){


}

map.prototype.display_map = function(){
  $("#map-canvas").show();
};

map.prototype.hide_search = function(){
  $(".search").hide();
}
