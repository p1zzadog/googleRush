
// Map Initialization code
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.029, lng: -105.616},
    zoom: 8
  });
  	
  var markerArray=[];

  map.addListener('click', function(e) { 	  
    var marker;
    marker = new google.maps.Marker({
    	position: e.latLng,
    	map: map,
    	title: 'new marker',
 		});
    markerArray.push(marker)
    console.log(markerArray)
 	})



  // marker.addListener('click', function() {
  //   marker.setMap(null);

  // })




}