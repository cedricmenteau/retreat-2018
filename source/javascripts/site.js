document.querySelector('.expend').addEventListener("click", function(){
  const agenda = document.getElementById("agenda");

  if (document.querySelector('.full-agenda')){
    agenda.classList.remove('full-agenda');
  } else {
    agenda.classList.add('full-agenda');
  };
});


function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    scrollwheel:false,
    navigationControl:true,
    mapTypeControl:false,
    zoomControl: true,
    scaleControl:false,
    draggable:true,
    center: {
      lat: 31.51322,
      lng: -9.770600
    },
    styles: [
      {elementType: 'geometry', stylers: [{color: '#F6EEE1'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#F6EEE1'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#333333'}]},
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#F6EEE1'}]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#E8DDCD'}]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#F6EEE1'}]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#D8EDF8'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });

  var infoWindow = new google.maps.InfoWindow();
  var markers = locations.map(function(location, i) {
    var marker =  new google.maps.Marker({
      map: map,
      position: {lat: location[1], lng: location[2]},
      label: location[0],
      title: location[0]
    });

    marker.addListener(marker, 'click', function(e) {
      infoWindow.setContent(location[0]);
      infoWindow.open(map, marker);
    })

    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

};

var locations = [
  ['1 - Chez DarMa', 31.514000, -9.765500, 1],
  ['2 - Dar Nafoura', 31.514064, -9.767120, 2],
  ['3 - Anaissouira', 31.515030, -9.771138, 3],
  ['4 - Lalla Zina', 31.512787, -9.767707, 4],
  ['5 - Le Consulat', 31.515364, -9.771094, 5],
  ["6 - L'étoile d'Essaouira", 31.514818, -9.769709, 6]
];

// var locations = [
//   {lat: 31.514000, lng: -9.765500},
//   {lat: 31.514064, lng: -9.767120},
//   {lat: 31.515030, lng: -9.771138},
//   {lat: 31.512787, lng: -9.767707},
//   {lat: 31.515364, lng: -9.771094},
//   {lat: 31.514818, lng: -9.769709}
// ];