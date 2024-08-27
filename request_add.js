const mapElement = document.getElementById('map');


const map = L.map(mapElement).setView([37.5665, 126.978], 13); 

 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


map.on('click', function(e) {
    const lat = e.latlng.lat.toFixed(6);
    const lng = e.latlng.lng.toFixed(6);
    document.getElementById('map-location').innerHTML = `위도: ${lat}, 경도: ${lng}`;
});