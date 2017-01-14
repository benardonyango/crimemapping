//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
var extents = new OpenLayers.Bounds(4079939, -162296, 4131475, -127987); 

var control, controls = [];

   var map2 = new OpenLayers.Map("map2", {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('dropdown-content')}),
            //new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            //new OpenLayers.Control.PanZoomBar(),
             new OpenLayers.Control.Zoom(),
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


 map2.addLayers([OSM]);

    map2.setCenter(new OpenLayers.LonLat(4099485,-142884),15 );