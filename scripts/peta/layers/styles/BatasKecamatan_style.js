var size = 0;
var placement = 'point';

const style_BatasKecamatan = (feature, resolution) => {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "13.0px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(255, 255, 255, 1)";
    var textAlign = "center";
    var offsetX = 1;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("WADMKC") !== null && resolution > 0 && resolution < 2800) {
        labelText = String(feature.get("WADMKC"));
    }
    var style = [new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0,0,0,1.0)',
            lineDash: null,
            lineCap: 'butt',
            lineJoin: 'miter',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(130,177,255,0.0)'
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
            labelFill, placement)
    })];

    return style;
};