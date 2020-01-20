/**
 * TODO:
 * - customize Google map
 * - refine styling
 * - finalize copy
 * - set up server, API, DB to collect comments (if necessary)
 * - mobile friendly
 */


$(document).ready(function() {
  // initial check for window scroll position
  scrollCheck();

  // global scroll handler for nav styling
  // $(window).scroll(scrollCheck);

  // nav item style click handler
  $('.nav-item:not(.brand)').click(function() {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });

  // brand nav item click handler
  $('.brand').click(() => {
    $('.nav-item').removeClass('active');
  });

  // nav item window scroll click handler
  $('.nav-item').click(function() {
    const { link } = $(this).data();
    if (link !== 'dropdown') {
      const offset = $(`.${link}`).offset();
      $('body, html').animate({
        scrollTop: offset.top,
      }, 1200, 'easeInOutExpo');
      $('.drop-down').hide();
    } else {
      $('.drop-down').toggle();
    }
  });
});

/**
 * TODO:
 */
function scrollCheck() {
  const test = $(window).scrollTop() > 900;
  $('#nav').toggleClass('down', test);
  $('.nav-item').toggleClass('down-item', test);
}


function initMap() {
  // The location of Uluru
  // var uluru = {lat: 45.5178488, lng: -122.6614609};

  const styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ]

  var point = new google.maps.LatLng(45.5178488, -122.6614609);
  // var marker = new google.maps.Marker({
  //     position: point,
  //     title:"The Evergreen"
  // });
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {
        zoom: 15, center: point, styles,   disableDefaultUI: true});
  // The marker, positioned at Uluru
  // var marker = new google.maps.Marker({animation: google.maps.Animation.DROP, title: 'EVERGREEN', position: point, map: map});

    var contentString = '<div id="content" style="color:black">'+
            'The Evergreen'+
            '</div>';

        var infowindow = new google.maps.InfoWindow({
          content: contentString,
        });

        var marker = new google.maps.Marker({
          animation: google.maps.Animation.DROP,
          position: point,
          map: map,
          title: 'Uluru (Ayers Rock)'
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });
}

