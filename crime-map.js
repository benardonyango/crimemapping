//OpenLayers.ProxyHost = "/cgi-bin/proxy.cgi?url=";
var extents = new OpenLayers.Bounds(4079939, -162296, 4131475, -127987); 

var control, controls = [];

   var map2 = new OpenLayers.Map("map2", {
        controls: [
            new OpenLayers.Control.Navigation(),
            new OpenLayers.Control.ArgParser(),
            //new OpenLayers.Control.Attribution(),
            new OpenLayers.Control.LayerSwitcher({'div':OpenLayers.Util.getElement('dropdown-content')}),
            new OpenLayers.Control.MousePosition(),
            //new OpenLayers.Control.ScaleLine(),
            new OpenLayers.Control.PanZoomBar(),
             //new OpenLayers.Control.Zoom(),
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



  var allcrime = new OpenLayers.Layer.WMS (
        "All",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:all",transparent: true, format: "image/gif"},
        {visibility: true},
        {'displayInLayerSwitcher':true}
);



 var arson = new OpenLayers.Layer.WMS (
        "Arson",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:arson1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var bankrobbery = new OpenLayers.Layer.WMS (
        "Bank robbery",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:bank_robbery1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var carjacking = new OpenLayers.Layer.WMS (
        "Car jacking",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:car_jacking1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var conman = new OpenLayers.Layer.WMS (
        "Con man",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:con_man1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var illegaldrugs = new OpenLayers.Layer.WMS (
        "Illegal drugs",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:illegal_drugs1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var pickpocket = new OpenLayers.Layer.WMS (
        "Pick pocket",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:pick_pocket1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);



 var sexualassault = new OpenLayers.Layer.WMS (
        "Sexual assault",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:sexual_assault1",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);

 var heatmap = new OpenLayers.Layer.WMS (
        "Heat map",
        "http://localhost:8090/geoserver/crime_data/wms",
        {layers:"crime_data:crime_heatmap_tiff",transparent: true, format: "image/gif"},
        {visibility: false},
        {'displayInLayerSwitcher':true}
);






 map2.addLayers([OSM,allcrime,arson,bankrobbery,carjacking,conman,illegaldrugs,pickpocket,sexualassault,heatmap]);

    map2.setCenter(new OpenLayers.LonLat(4099485,-142884),15 );