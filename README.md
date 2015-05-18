# leaflet.w3w
Leaflet JS What3Words Plugin

	var w = new L.Control.w3w();
	w.addTo(map);
	map.on('click', function(e) {
	    w.setCoordinates(e);
	});
