
var map, polyline, markers = new Array();

function initMap() {

    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(55.401520, 10.386518),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);

    polyline = new google.maps.Polyline({
        strokeColor: 'red',
        strokeWeight: 1,
        map: map
    });

    google.maps.event.addListener(map, 'click', function (event) {

        addPoint(event.latLng);
    });
     //Defining OSM Map Type
					var osmMapType = new google.maps.ImageMapType({
   			         	getTileUrl: function(coord, zoom) {
                    		return "http://tile.openstreetmap.org/" + zoom + "/" + coord.x + "/" + coord.y + ".png";
                		},
                		tileSize: new google.maps.Size(256, 256),
                		name: "OpenStreetMap",
                		maxZoom: 18
            		});
            		
            		//relate new mapTypeId to the ImageMapType - osmMapType object
					map.mapTypes.set('OSM', osmMapType);
					
					//set this new mapTypeId to be displayed
					map.setMapTypeId('OSM');   
          
}

function removePoint(marker) {

    for (var i = 0; i < markers.length; i++) {

        if (markers[i] === marker) {

            markers[i].setMap(null);
            markers.splice(i, 1);

            polyline.getPath().removeAt(i);
            updateLength();
        }
    }
}

function addPoint(latlng) {

    var marker = new google.maps.Marker({
        position: latlng,
        map: map
    });

    markers.push(marker);

    polyline.getPath().setAt(markers.length - 1, latlng);
        updateLength();

    google.maps.event.addListener(marker, 'click', function (event) {
        removePoint(marker);
    });
}
        
    function updateLength() {
        
        var path = polyline.getPath();
          
        var length = google.maps.geometry.spherical.computeLength(path);
        console.log(length);
            
        length=Math.round(length);
         console.log(length+"hi");
                //print the length
			$("#ruteLengde").text("Rutens længde er: " + length/1000+ " km "); 

        };
      

initMap();	

 
