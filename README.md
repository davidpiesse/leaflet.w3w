# leaflet.w3w
Leaflet JS What3Words Plugin

```var c = new L.Control.Coordinates(); # you can send options to the constructor if you want to, otherwise default values are used

c.addTo(map);

map.on('click', function(e) {
    c.setCoordinates(e);
});```
