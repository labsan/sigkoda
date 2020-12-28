var size = 0;
var placement = 'point';

const style_LokasiSaranaKesehatan = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    var style = [new ol.style.Style({
        image: new ol.style.Icon({
            imgSize: [579.997, 579.997],
            scale: 0.0379312306788,
            anchor: [11, 11],
            anchorXUnits: "pixels",
            anchorYUnits: "pixels",
            rotation: 0.0,
            src: "../images/markers/marker-health-facility.svg"
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
            labelFill, placement)
    })];

    return style;
};