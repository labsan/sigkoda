var size = 0;
var placement = 'point';

function categories_JaringanJalan2019_2(feature, value, size, resolution, labelText,
    labelFont, labelFill) {
    switch (value.toString()) {
        case 'Jalan Arteri':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(197,27,138,1.0)',
                    lineDash: null,
                    lineCap: 'round',
                    lineJoin: 'round',
                    width: 4
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Jalan Kolektor':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(249,255,48,1.0)',
                    lineDash: null,
                    lineCap: 'round',
                    lineJoin: 'round',
                    width: 4
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Jalan Lain':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(230,136,28,1.0)',
                    lineDash: null,
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    width: 1
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Jalan Lokal':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(48,127,255,1.0)',
                    lineDash: null,
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    width: 1
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Jalan Setapak':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(120,176,0,1.0)',
                    lineDash: null,
                    lineCap: 'square',
                    lineJoin: 'bevel',
                    width: 1
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
        case 'Jalan Tol':
            return [new ol.style.Style({
                stroke: new ol.style.Stroke({
                    color: 'rgba(245,110,0,1.0)',
                    lineDash: null,
                    lineCap: 'round',
                    lineJoin: 'round',
                    width: 4
                }),
                text: createTextStyle(feature, resolution, labelText, labelFont,
                    labelFill, placement)
            })];
            break;
    }
};

const style_JaringanJalan = function (feature, resolution) {
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("REMARK");
    var labelText = "";
    size = 0;
    var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }

    var style = categories_JaringanJalan2019_2(feature, value, size, resolution, labelText,
        labelFont, labelFill);

    return style;
};