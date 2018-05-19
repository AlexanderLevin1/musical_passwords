// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

var map;
var infowindow;

const pos = {
    lat: 0, 
    lng: 0
};

function sendDistance() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: userLocal,
        zoom: 15
    });

    infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: userLocal,
        radius: 500,
        type: ['store']
    }, callback);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
             pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
        })
    }
    console.log(pos)

    var userLocal = { lat: -33.867, lng: 151.195 };
}


function callback(results, status) {
    // console.log(pos)
}
