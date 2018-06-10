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


  var infoWin = new google.maps.InfoWindow();
  var labels = '123456';

  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: {lat: location[1], lng: location[2]},
      label: labels[i % labels.length]
    });

    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(location[0]);
      infoWin.open(map, marker);
    })
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

};

var locations = [
  ["<h2>Chez DarMa</h2><br><a href='#chezdarma'>See who's in</a><br><hr><address>234 rue Chbanate,<br>Essaouira 44000, Morocco</address>", 31.514000, -9.765500, 1],
  ["<h2>Dar Nafoura</h2><br><a href='#darnafoura'>See who's in</a><br><hr><address>30 rue Ibn Khaldoun,<br>Essaouira 44000, Morocco</address>", 31.514064, -9.767120, 2],
  ["<h2>Anaissouira</h2><br><a href='#anaissouira'>See who's in</a><br><hr><address>30 rue Sidi Ali Ben Daoud,<br>Essaouira 44000, Morocco</address>", 31.515030, -9.771138, 3],
  ["<h2>Lalla Zina</h2><br><a href='#lallazina'>See who's in</a><br><hr><address>17 Rue d'Agadir,<br>Essaouira 44000, Morocco</address>", 31.512787, -9.767707, 4],
  ["<h2>Le Consultat</h2><br><a href='#leconsulat'>See who's in</a><br><hr><address>74 rue Touahen,<br>Essaouira 44000, Morocco</address>", 31.515364, -9.771094, 5],
  ["<h2>L'étoile d'Essaouira</h2><br><a href='#etoileessaouira'>See who's in</a><br><hr><address>234 rue Chbanate,<br>Essaouira 44000, Morocco</address>", 31.514818, -9.769709, 6]
];