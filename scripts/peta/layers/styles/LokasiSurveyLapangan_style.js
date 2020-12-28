var size = 0;
var placement = 'point';

function categories_LokasiSurveyLapangan(feature, value, size, resolution, labelText,
    labelFont, labelFill) {
    switch (value.toString()) {
        case 'Sarana Kesehatan':
            return [new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [579.997, 579.997],
                    scale: 0.0327587901317,
                    anchor: [9, 9],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "../images/markers/marker-health.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Sarana Pendidikan':
            return [new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [579.997, 579.997],
                    scale: 0.0327587901317,
                    anchor: [9, 9],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "../images/markers/marker-education.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Sarana Transportasi':
            return [new ol.style.Style({
                image: new ol.style.Icon({
                    imgSize: [579.997, 579.997],
                    scale: 0.0327587901317,
                    anchor: [9, 9],
                    anchorXUnits: "pixels",
                    anchorYUnits: "pixels",
                    rotation: 0.0,
                    src: "../images/markers/marker-transportation.svg"
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
    }
};

const style_LokasiSurveyLapangan = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Landmark");
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

    let style = categories_LokasiSurveyLapangan(feature, value, size, resolution, labelText,
        labelFont, labelFill);

    return style;
};