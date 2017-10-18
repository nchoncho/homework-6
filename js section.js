

function initMap() {
  var map = {lat: 48.46342, lng: -123.31171};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 48.46342, lng: -123.31171}
  });

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">{lat: 48.46342, lng: -123.31171}, number of markers 3</h1>'+
     
      '</div>';
      
      var contentString1 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">{lat: 48.46256, lng: -123.31377}, number of markers 3</h1>'+
     
      '</div>';
     
     var contentString2 = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">{lat: 48.46429, lng:  -123.313}, number of markers 3</h1>'+
     
      '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });
  
  var infowindow1 = new google.maps.InfoWindow({
    content: contentString1
  });
  
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2
  });

  var marker = new google.maps.Marker({
    position: {lat: 48.46342, lng: -123.31171},
    map: map,
    title: 'Clearihue building'
  });
  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
  var marker = new google.maps.Marker({
    position: {lat: 48.46256, lng: -123.31377},
    map: map,
    title: 'Mclaurin building'
  });
  marker.addListener('click', function() {
    infowindow1.open(map, marker);
  });
  var marker = new google.maps.Marker({
    position: {lat: 48.46429, lng:  -123.313},
    map: map,
    title: 'Cornett building'
  });
  marker.addListener('click', function() {
    infowindow2.open(map, marker);
  });
  
}
