"use strict";
L.Control.w3w = L.Control.extend({
	options: {
		position: 'bottomleft',
		locationText:'- - -',
		promptText: 'Press Ctrl+C to copy location',
		precision: 4
	},

	initialize: function(options)
	{
		L.Control.prototype.initialize.call(this, options);
	},

	onAdd: function(map)
	{
		var className = 'leaflet-control-w3w',
			that = this,
			container = this._container = L.DomUtil.create('div', className);
		this.visible = false;

		L.DomUtil.addClass(container, 'hidden');
		L.DomEvent.disableClickPropagation(container);
		this._addText(container, map);

		L.DomEvent.addListener(container, 'click', function() {
			var lat = L.DomUtil.get(that._lat),
				lng = L.DomUtil.get(that._lng),
				//api call
				//get the words
				console.log(lat);
				console.log(lon);
				locationText = "what three words"
				// latTextLen = this.options.latitudeText.length + 1,
				// lngTextLen = this.options.longitudeText.length + 1,
				// latTextIndex = lat.textContent.indexOf(this.options.latitudeText) + latTextLen,
				// lngTextIndex = lng.textContent.indexOf(this.options.longitudeText) + lngTextLen,
				// latCoordinate = lat.textContent.substr(latTextIndex),
				// lngCoordinate = lng.textContent.substr(lngTextIndex);
		    window.prompt(this.options.promptText, locationText);
    	}, this);

		return container;
	},

	_addText: function(container, context)
	{
		this._locationText = L.DomUtil.create('span', 'leaflet-control-w3w-locationText' , container),
		return container;
	},

	/**
	 * This method should be called when user clicks the map.
	 * @param event object
	 */
	setCoordinates: function(obj)
	{
		if (!this.visible) {
			L.DomUtil.removeClass(this._container, 'hidden');
		}

		if (obj.latlng) {
		  console.log(obj);
			L.DomUtil.get(this._locationText).innerHTML = '<strong>w3w:</strong> ' + obj.locationText;
		}
		else
		{
		  console.log(obj);
		}
	}
});
