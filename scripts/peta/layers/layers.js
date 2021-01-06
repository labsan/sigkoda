// Show data with popup
const wms_layers = [];

// Initial basemap Google Satellite
const lyr_google_satellite = new ol.layer.Tile({
    'title': 'Satelit (Google Map)',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({
            html: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>'
        })],
        url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
    })
});

// Initial basemap OSM
const lyr_OSM = new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    'opacity': 1.000000,
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({
            html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'
        })],
        url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
    })
});

// Peta Raster Kesesuaian Lahan
const lyr_raster_kesesuaian_lahan = new ol.layer.Image({
    opacity: 1,
    title: 'Kesesuaian Lahan Kawasan Perkotaan<br />\
    <img src="../images/legends/legend-red-suitability.png" /> Tidak Sesuai<br />\
    <img src="../images/legends/legend-orange-suitability.png" /> Kurang Sesuai<br />\
    <img src="../images/legends/legend-yellow-suitability.png" /> Cukup Sesuai<br />\
    <img src="../images/legends/legend-green-suitability.png" /> Sesuai<br />\
    <img src="../images/legends/legend-blue-suitability.png" /> Sangat Sesuai<br />',
    source: new ol.source.ImageStatic({
        url: "../images/Raster_Kesesuaian_Lahan.png",
        attributions: [new ol.Attribution({
            html: '<a href=""></a>'
        })],
        projection: 'EPSG:3857',
        alwaysInRange: true,
        imageExtent: [12517892.324432, -846276.211942, 12565717.404067, -818205.698432]
    })
});

// Peta Dasar - Batas Kecamatan 
const format_batas_kecamatan = new ol.format.GeoJSON();
const features_batas_kecamatan = format_batas_kecamatan.readFeatures(json_BatasKecamatan, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_batas_kecamatan = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_batas_kecamatan.addFeatures(features_batas_kecamatan);
const lyr_batas_kecamatan = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_batas_kecamatan,
    style: style_BatasKecamatan,
    title: '<img src="../images/legends/legend-region.png" /> Batas Kecamatan 2019'
});

// Peta Dasar - Batas Desa
const format_batas_desa = new ol.format.GeoJSON();
const features_batas_desa = format_batas_desa.readFeatures(json_BatasDesa, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_batas_desa = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_batas_desa.addFeatures(features_batas_desa);
const lyr_batas_desa = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_batas_desa,
    style: style_BatasDesa,
    title: '<img src="../images/legends/legend-region.png" /> Batas Desa 2019'
});

// Peta Dasar - Jaringan Sungai
const format_jaringan_sungai = new ol.format.GeoJSON();
const features_jaringan_sungai = format_jaringan_sungai.readFeatures(json_JaringanSungai, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_jaringan_sungai = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_jaringan_sungai.addFeatures(features_jaringan_sungai);
const lyr_jaringan_sungai = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_jaringan_sungai,
    style: style_JaringanSungai,
    title: '<img src="../images/legends/legend-river.png" /> Jaringan Sungai 2019'
});

// POI - Hasil Survey Lapangan
const format_hasil_survey_lapangan = new ol.format.GeoJSON();
const features_hasil_survey_lapangan = format_hasil_survey_lapangan.readFeatures(json_LokasiSurveyLapangan, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_hasil_survey_lapangan = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_hasil_survey_lapangan.addFeatures(features_hasil_survey_lapangan);
const lyr_hasil_survey_lapangan = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_hasil_survey_lapangan,
    style: style_LokasiSurveyLapangan,
    title: 'Hasil Survey Lapangan 2019<br />\
    <img src="../images/legends/legend-health-marker.png" /> Sarana Kesehatan (24 titik)<br />\
    <img src="../images/legends/legend-education-marker.png" /> Sarana Pendidikan (33 titik)<br />\
    <img src="../images/legends/legend-transportation-marker.png" /> Sarana Transportasi (8 titik)<br />'
});

// POI - Sarana Kesehatan
const format_lokasi_sarana_kesehatan = new ol.format.GeoJSON();
const features_lokasi_sarana_kesehatan = format_lokasi_sarana_kesehatan.readFeatures(json_LokasiSaranaKesehatan, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_lokasi_sarana_kesehatan = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_lokasi_sarana_kesehatan.addFeatures(features_lokasi_sarana_kesehatan);
const lyr_lokasi_sarana_kesehatan = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_lokasi_sarana_kesehatan,
    style: style_LokasiSaranaKesehatan,
    title: '<img src="../images/legends/legend-sarana-kesehatan.png" /> Lokasi Sarana Kesehatan 2019'
});

// POI - Sarana Pendidikan
const format_lokasi_sarana_pendidikan = new ol.format.GeoJSON();
const features_lokasi_sarana_pendidikan = format_lokasi_sarana_pendidikan.readFeatures(json_LokasiSaranaPendidikan, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_lokasi_sarana_pendidikan = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_lokasi_sarana_pendidikan.addFeatures(features_lokasi_sarana_pendidikan);
const lyr_lokasi_sarana_pendidikan = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_lokasi_sarana_pendidikan,
    style: style_LokasiSaranaPendidikan,
    title: '<img src="../images/legends/legend-sarana-pendidikan.png" /> Lokasi Sarana Pendidikan 2019'
});

// POI - Stasiun KA
const format_lokasi_stasiun_ka = new ol.format.GeoJSON();
const features_lokasi_stasiun_ka = format_lokasi_stasiun_ka.readFeatures(json_LokasiStasiunKA, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_lokasi_stasiun_ka = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_lokasi_stasiun_ka.addFeatures(features_lokasi_stasiun_ka);
const lyr_lokasi_stasiun_ka = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_lokasi_stasiun_ka,
    style: style_LokasiStasiunKA,
    title: '<img src="../images/legends/legend-stasiun-ka.png" /> Lokasi Stasiun Kerata Api 2019'
});

// POI - Terminal Bus
const format_lokasi_terminal_bus = new ol.format.GeoJSON();
const features_lokasi_terminal_bus = format_lokasi_terminal_bus.readFeatures(json_LokasiTerminalBus, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_lokasi_terminal_bus = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_lokasi_terminal_bus.addFeatures(features_lokasi_terminal_bus);
const lyr_lokasi_terminal_bus = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_lokasi_terminal_bus,
    style: style_LokasiTerminalBus,
    title: '<img src="../images/legends/legend-terminal-bus.png" /> Lokasi Terminal Bus 2019'
});

// POI - Danau/Situ
const format_danau = new ol.format.GeoJSON();
const features_danau = format_danau.readFeatures(json_LokasiDanauSetu, {
    dataProjection: 'EPSG:4326',
    featureProjection: 'EPSG:3857'
});
const jsonSource_danau = new ol.source.Vector({
    attributions: [new ol.Attribution({
        html: '<a href="http://tanahair.indonesia.go.id/portal-web/">Badan Informasi Geospasial Republik Indonesia, 2015-2019. Peta Rupabumi Digital Indonesia. Bogor, Jawa-Barat.</a>'
    })],
});
jsonSource_danau.addFeatures(features_danau);
const lyr_danau = new ol.layer.Vector({
    declutter: true,
    source: jsonSource_danau,
    style: style_LokasiDanauSetu,
    title: '<img src="../images/legends/legend-lake.png" /> Lokasi Danau/Setu 2019'
});


// Layer Group Peta Dasar
let group_PetaDasar = new ol.layer.Group({
    layers: [lyr_jaringan_sungai, lyr_batas_desa, lyr_batas_kecamatan],
    title: "Peta Dasar"
});
// Layer Group POI
let group_PointOfInterest = new ol.layer.Group({
    layers: [lyr_danau, lyr_lokasi_terminal_bus, lyr_lokasi_stasiun_ka, lyr_lokasi_sarana_pendidikan, lyr_lokasi_sarana_kesehatan, lyr_hasil_survey_lapangan],
    title: "Point of Interest (POI)"
});
// Layer Group Peta Perencanaan
let group_PetaPerencanaan = new ol.layer.Group({
    layers: [lyr_raster_kesesuaian_lahan],
    title: "Peta Hasil Analisis"
});
// Layer Group Basemap & Citra Satelit
let group_BasemapCitraSatelit = new ol.layer.Group({
    layers: [lyr_OSM, lyr_google_satellite],
    title: "Basemap dan Citra Satelit"
});



// Visible Basemaps Layer
lyr_batas_kecamatan.setVisible(true);
lyr_batas_desa.setVisible(false);
lyr_jaringan_sungai.setVisible(false);

// Visible POI Map Layer
lyr_hasil_survey_lapangan.setVisible(false);
lyr_lokasi_sarana_kesehatan.setVisible(false);
lyr_lokasi_sarana_pendidikan.setVisible(false);
lyr_lokasi_stasiun_ka.setVisible(false);
lyr_lokasi_terminal_bus.setVisible(false);
lyr_danau.setVisible(false);

// Visible Planner Map Layer
lyr_raster_kesesuaian_lahan.setVisible(true);

// Visible Basemap & Satellite Images Layer
lyr_OSM.setVisible(true);
lyr_google_satellite.setVisible(true);

// Show Group Layer
let layersList = [
    group_BasemapCitraSatelit,
    group_PetaPerencanaan,
    group_PointOfInterest,
    group_PetaDasar
];



// Data POI Danau/Situ
lyr_danau.set('fieldAliases', {
    'NAMOBJ': 'NAMOBJ',
    'REMARK': 'REMARK',
    'LCODE': 'LCODE',
    'Objek': 'Landmark',
    'Sumber': 'Sumber',
});
lyr_danau.set('fieldImages', {
    'NAMOBJ': 'Hidden',
    'REMARK': 'Hidden',
    'LCODE': 'Hidden',
    'Objek': 'WebView',
    'Sumber': 'WebView',
});
lyr_danau.set('fieldLabels', {
    'Objek': 'inline label',
    'Sumber': 'inline label',
});

// Data POI Terminal Bus
lyr_lokasi_terminal_bus.set('fieldAliases', {
    'NAMOBJ': 'NAMOBJ',
    'REMARK': 'REMARK',
    'LCODE': 'LCODE',
    'Objek': 'Landmark',
    'Sumber': 'Sumber',
});
lyr_lokasi_terminal_bus.set('fieldImages', {
    'NAMOBJ': 'Hidden',
    'REMARK': 'Hidden',
    'LCODE': 'Hidden',
    'Objek': 'WebView',
    'Sumber': 'WebView',
});
lyr_lokasi_terminal_bus.set('fieldLabels', {
    'Objek': 'inline label',
    'Sumber': 'inline label',
});

// Data POI Stasiun KA
lyr_lokasi_stasiun_ka.set('fieldAliases', {
    'NAMOBJ': 'NAMOBJ',
    'REMARK': 'REMARK',
    'LCODE': 'LCODE',
    'Objek': 'Landmark',
    'Sumber': 'Sumber',
});
lyr_lokasi_stasiun_ka.set('fieldImages', {
    'NAMOBJ': 'Hidden',
    'REMARK': 'Hidden',
    'LCODE': 'Hidden',
    'Objek': 'WebView',
    'Sumber': 'WebView',
});
lyr_lokasi_stasiun_ka.set('fieldLabels', {
    'Objek': 'inline label',
    'Sumber': 'inline label',
});

// Data POI Sarana Pendidikan
lyr_lokasi_sarana_pendidikan.set('fieldAliases', {
    'NAMOBJ': 'NAMOBJ',
    'FGGPDK': 'FGGPDK',
    'REMARK': 'REMARK',
    'LCODE': 'LCODE',
    'JJGPDF': 'JJGPDF',
    'Objek': 'Landmark',
    'Sumber': 'Sumber',
});
lyr_lokasi_sarana_pendidikan.set('fieldImages', {
    'NAMOBJ': 'Hidden',
    'FGGPDK': 'Hidden',
    'REMARK': 'Hidden',
    'LCODE': 'Hidden',
    'JJGPDF': 'Hidden',
    'Objek': 'WebView',
    'Sumber': 'WebView',
});
lyr_lokasi_sarana_pendidikan.set('fieldLabels', {
    'Objek': 'inline label',
    'Sumber': 'inline label',
});

// Data POI Sarana Kesehatan
lyr_lokasi_sarana_kesehatan.set('fieldAliases', {
    'NAMOBJ': 'NAMOBJ',
    'REMARK': 'REMARK',
    'TIPSHT': 'TIPSHT',
    'LCODE': 'LCODE',
    'Objek': 'Landmark',
    'Sumber': 'Sumber',
});
lyr_lokasi_sarana_kesehatan.set('fieldImages', {
    'NAMOBJ': 'Hidden',
    'REMARK': 'Hidden',
    'TIPSHT': 'Hidden',
    'LCODE': 'Hidden',
    'Objek': 'WebView',
    'Sumber': 'WebView',
});
lyr_lokasi_sarana_kesehatan.set('fieldLabels', {
    'Objek': 'inline label',
    'Sumber': 'inline label',
});

// Data POI Hasil Survey Lapangan
lyr_hasil_survey_lapangan.set('fieldAliases', {
    'No.': 'No.',
    'Latitude': 'Latitude',
    'Longitude': 'Longitude',
    'Altitude': 'Altitude',
    'Zone': 'Zone',
    'Tanggal': 'Tanggal',
    'Jam': 'Jam',
    'Kecamatan': 'Kecamatan',
    'Landmark': 'Kategori',
    'Info Lokas': 'Landmark',
    'Sumber': 'Sumber',
});
lyr_hasil_survey_lapangan.set('fieldImages', {
    'No.': 'Hidden',
    'Latitude': 'Hidden',
    'Longitude': 'Hidden',
    'Altitude': 'Hidden',
    'Zone': 'Hidden',
    'Tanggal': 'WebView',
    'Jam': 'WebView',
    'Kecamatan': 'WebView',
    'Landmark': 'WebView',
    'Info Lokas': 'WebView',
    'Sumber': 'WebView',
});
lyr_hasil_survey_lapangan.set('fieldLabels', {
    'Tanggal': 'inline label',
    'Jam': 'inline label',
    'Kecamatan': 'inline label',
    'Landmark': 'inline label',
    'Info Lokas': 'inline label',
    'Sumber': 'inline label',
});

// Data Peta Jaringan Sungai
lyr_jaringan_sungai.set('fieldAliases', {
    'NAMOBJ': 'Sungai',
    'JNSSNG': 'JNSSNG',
    'KLSSNG': 'KLSSNG',
    'REMARK': 'REMARK',
    'LCODE': 'LCODE',
    'SHAPE_Leng': 'SHAPE_Leng',
    'SHAPE_Area': 'SHAPE_Area',
    'Nilai': 'Nilai',
    'Sumber': 'Sumber',
});
lyr_jaringan_sungai.set('fieldImages', {
    'NAMOBJ': 'WebView',
    'JNSSNG': 'Hidden',
    'KLSSNG': 'Hidden',
    'REMARK': 'Hidden',
    'LCODE': 'Hidden',
    'SHAPE_Leng': 'Hidden',
    'SHAPE_Area': 'Hidden',
    'Nilai': 'Hidden',
    'Sumber': 'WebView',
});
lyr_jaringan_sungai.set('fieldLabels', {
    'NAMOBJ': 'inline label',
    'Sumber': 'inline label',
});

// Data Peta Batas Desa
lyr_batas_desa.set('fieldAliases', {
    'NAMOBJ': 'Desa',
    'REMARK': 'REMARK',
    'WADMKC': 'Kecamatan',
    'WADMKK': 'Kab/Kota',
    'WADMPR': 'Provinsi',
    'Sumber': 'Sumber',
});
lyr_batas_desa.set('fieldImages', {
    'NAMOBJ': 'WebView',
    'REMARK': 'Hidden',
    'WADMKC': 'WebView',
    'WADMKK': 'WebView',
    'WADMPR': 'WebView',
    'Sumber': 'WebView',
});
lyr_batas_desa.set('fieldLabels', {
    'NAMOBJ': 'inline label',
    'WADMKC': 'inline label',
    'WADMKK': 'inline label',
    'WADMPR': 'inline label',
    'Sumber': 'inline label',
});

// Data Peta Batas Kecamatan
lyr_batas_kecamatan.set('fieldAliases', {
    'KODE': 'Kode Adm',
    'WADMPR': 'WADMPR',
    'WADMKK': 'WADMKK',
    'WADMKC': 'Kecamatan',
    'REMARK': 'REMARK',
    'JKELURAHAN': 'Jml. Kelurahan',
    'JDESA': 'Jml. Desa',
    'JPENDUDUK': 'Jml. Penduduk',
    'LPPENDUDUK': 'LPPENDUDUK',
    'JFS_SD': 'SD',
    'JFS_SMP': 'SMP',
    'JFS_SMA': 'SMA',
    'JFS_SMK': 'SMK',
    'JFS_PT': 'PT',
    'SRN_Pendidikan': 'Sarana Pendidikan',
    'JFK_RS': 'RS',
    'JFK_RSBer': 'JFK_RSBer',
    'JFK_POLI': 'Poliklinik',
    'JFK_PUSK': 'Puskesmas',
    'JFK_PUSK_P': 'JFK_PUSK_P',
    'JFK_APOTEK': 'JFK_APOTEK',
    'SRN_Kesehatan': 'Sarana Kesehatan',
    'JFP_MASJID': 'Masjid',
    'JFP_PURA': 'Pura',
    'SRN_Peribadatan': 'Sarana Peribadatan',
    'JBA_BANJIR': 'Laporan Banjir',
    'LUAS_KM2': 'Luas (km2)',
    'SUMBER': 'Sumber'
});
lyr_batas_kecamatan.set('fieldImages', {
    'KODE': 'WebView',
    'WADMPR': 'Hidden',
    'WADMKK': 'Hidden',
    'WADMKC': 'WebView',
    'REMARK': 'Hidden',
    'JKELURAHAN': 'WebView',
    'JDESA': 'WebView',
    'JPENDUDUK': 'WebView',
    'LPPENDUDUK': 'Hidden',
    'JFS_SD': 'Hidden',
    'JFS_SMP': 'Hidden',
    'JFS_SMA': 'Hidden',
    'JFS_SMK': 'Hidden',
    'JFS_PT': 'Hidden',
    'SRN_Pendidikan': 'WebView',
    'JFK_RS': 'Hidden',
    'JFK_RSBer': 'Hidden',
    'JFK_POLI': 'Hidden',
    'JFK_PUSK': 'Hidden',
    'JFK_PUSK_P': 'Hidden',
    'JFK_APOTEK': 'Hidden',
    'SRN_Kesehatan': 'WebView',
    'JFP_MASJID': 'Hidden',
    'JFP_PURA': 'Hidden',
    'SRN_Peribadatan': 'WebView',
    'JBA_BANJIR': 'WebView',
    'LUAS_KM2': 'WebView',
    'SUMBER': 'WebView'
});
lyr_batas_kecamatan.set('fieldLabels', {
    'KODE': 'inline label',
    'WADMKC': 'inline label',
    'JKELURAHAN': 'inline label',
    'JDESA': 'inline label',
    'JPENDUDUK': 'inline label',
    'SRN_Pendidikan': 'inline label',
    'SRN_Kesehatan': 'inline label',
    'SRN_Peribadatan': 'inline label',
    'JBA_BANJIR': 'inline label',
    'LUAS_KM2': 'inline label',
    'SUMBER': 'header label'
});
lyr_batas_kecamatan.on('precompose', function (evt) {
    evt.context.globalCompositeOperation = 'normal';
});