//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
var extents = new OpenLayers.Bounds(4079939, -162296, 4131475, -127987); 

var control, controls = [];

   var map = new OpenLayers.Map("map", {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher(),//({'div':OpenLayers.Util.getElement('customlayerswitcher')});
            //new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.Zoom(),
            //new OpenLayers.Control.PanZoomBar(),
            new OpenLayers.Control.KeyboardDefaults()
        ],
        maxExtent: extents,
        minExtent: "auto",
        restrictedExtent: extents
    },
        {projection: new OpenLayers.Projection("EPSG:900913")},
    

        {units: 'm'},
        {allOverlays: true}
        );


   

 //var google_sat = new OpenLayers.Layer.Google("Google Satellite",{type:google.maps.MapTypeId.SATELLITE,numZoomLevels:40});

 var OSM = new OpenLayers.Layer.OSM("OpenStreetMap");


 map.addLayers([OSM]);

    map.setCenter(new OpenLayers.LonLat(4099485,-142884),15 );

var markers = new OpenLayers.Layer.Markers( "Markers" );
map.addLayer(markers);



var size = new OpenLayers.Size(38,38);

var icon = new OpenLayers.Icon('red-dot.png',size);


//icon = new OpenLayers.Icon('red-dot.png');


map.events.register("click", map, function(evt) {
    var pos = map.getLonLatFromViewPortPx(evt.xy);
   // var pos = map.getLonLatFromPixel(evt.xy);
   markers.addMarker(new OpenLayers.Marker(pos,icon));


   
});