$(document).ready(function(){
   console.log("hello");
  $('form').on("submit", function(event){
    event.preventDefault()
    var data = $(this).serialize()
    var url = $(this).attr('action')
    url = url + "?"+data
    $.get(url).done(function(data){
      $.when(map.prototype.display_map()).then(map.prototype.hide_search());
      console.log(data)
    })
  })
})

function map(){


}

map.prototype.display_map = function(){
  $("#map-canvas").show();
};

map.prototype.hide_search = function(){
  $(".search").hide();
}
