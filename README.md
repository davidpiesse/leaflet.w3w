# leaflet.w3w
Leaflet JS What3Words Plugin
A demo example webpage is included to test this on. 
You will need your own What3Words API key from: http://developer.what3words.com/
Just include the js file and css file and add the snippet below


	var w = new L.Control.w3w();
	w.addTo(map);
	map.on('click', function(e) {
	    w.setCoordinates(e);
	});

Happy Coding!
D
