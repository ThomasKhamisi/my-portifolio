function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 0.1349, lng: 37.7084};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'meru , kenya' // Title Location
    });
}