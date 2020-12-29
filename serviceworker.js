// Import Workbox CDN
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log('Workbox berhasil dimuat!.');

    // Precaching App Shell
    workbox.precaching.precacheAndRoute([{
            url: '/',
            revision: '1'
        },
        {
            url: '/index.html',
            revision: '1'
        },
        {
            url: '/manifest.json',
            revision: '1'
        },
        {
            url: '/serviceworker.js',
            revision: '1'
        },

        // Folder styles
        {
            url: '/styles/index.css',
            revision: '1'
        },
        {
            url: '/styles/libs/materialize.min.css',
            revision: '1'
        },
        {
            url: '/styles/libs/ol.css',
            revision: '1'
        },
        {
            url: '/styles/libs/ol3-layerswitcher.css',
            revision: '1'
        },
        {
            url: '/styles/libs/qgis2web.css',
            revision: '1'
        },
        {
            url: '/styles/pages/beranda.css',
            revision: '1'
        },
        {
            url: '/styles/pages/grafik.css',
            revision: '2'
        },
        {
            url: '/styles/pages/peta.css',
            revision: '1'
        },

        // Folder scripts > data
        {
            url: '/scripts/data/bar-chart.js',
            revision: '1'
        },
        {
            url: '/scripts/data/pie-chart.js',
            revision: '1'
        },

        // Folder scripts > libs
        {
            url: '/scripts/libs/materialize.min.js',
            revision: '1'
        },
        {
            url: '/scripts/libs/Chart.min.js',
            revision: '1'
        },
        {
            url: '/scripts/libs/chartjs-plugin-datalabels.min.js',
            revision: '1'
        },

        // Folder scripts > peta
        {
            url: '/scripts/peta/qgis2web.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/qgis2web_expressions.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/functions.js',
            revision: '1'
        },

        // Folder scripts > peta > layers
        {
            url: '/scripts/peta/layers/layers.js',
            revision: '1'
        },

        // Folder scripts > peta > layers > geoJSON
        {
            url: '/scripts/peta/layers/geoJSON/BatasDesa.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/BatasKecamatan.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/LokasiSaranaKesehatan.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/LokasiSaranaPendidikan.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/LokasiStasiunKA.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/LokasiSurveyLapangan.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/LokasiTerminalBus.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/geoJSON/JaringanSungai.js',
            revision: '1'
        },

        // Folder scripts > peta > layers > styles
        {
            url: '/scripts/peta/layers/styles/BatasDesa_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/BatasKecamatan_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/LokasiSaranaKesehatan_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/LokasiSaranaPendidikan_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/LokasiStasiunKA_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/LokasiSurveyLapangan_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/LokasiTerminalBus_style.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/layers/styles/JaringanSungai_style.js',
            revision: '1'
        },

        // Folder scripts > peta > libs
        {
            url: '/scripts/peta/libs/Autolinker.min.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/libs/ol.js',
            revision: '1'
        },
        {
            url: '/scripts/peta/libs/ol3-layerswitcher.js',
            revision: '1'
        },

        // Folder scripts > peta > utils
        {
            url: '/scripts/peta/utils/polyfills.js',
            revision: '1'
        },

        // Folder scripts > utils
        {
            url: '/scripts/utils/event-elems.js',
            revision: '1'
        },
        {
            url: '/scripts/utils/register-sw.js',
            revision: '1'
        },

        // Folder pages
        {
            url: '/pages/beranda.html',
            revision: '1'
        },
        {
            url: '/pages/grafik.html',
            revision: '2'
        },
        {
            url: '/pages/peta.html',
            revision: '1'
        },

        // Folder images
        {
            url: '/images/Raster_Kesesuaian_Lahan.png',
            revision: '1'
        },

        // Folder images > basemaps
        {
            url: '/images/basemaps/danau.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/hasil-survey-lapangan.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/jaringan-jalan.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/jaringan-sungai.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/kemiringan-lahan.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/sarana-kesehatan.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/sarana-pendidikan.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/sarana-stasiun-ka.jpg',
            revision: '1'
        },
        {
            url: '/images/basemaps/sarana-terminal-bis.jpg',
            revision: '1'
        },

        // Folder images > icons
        {
            url: '/images/icons/android-chrome-192x192.png',
            revision: '1'
        },
        {
            url: '/images/icons/android-chrome-512x512.png',
            revision: '1'
        },
        {
            url: '/images/icons/apple-touch-icon-180x180.png',
            revision: '1'
        },
        {
            url: '/images/icons/browserconfig.xml',
            revision: '1'
        },
        {
            url: '/images/icons/favicon-16x16.png',
            revision: '1'
        },
        {
            url: '/images/icons/favicon-32x32.png',
            revision: '1'
        },
        {
            url: '/images/icons/favicon-192x192.png',
            revision: '1'
        },
        {
            url: '/images/icons/favicon.ico',
            revision: '1'
        },
        {
            url: '/images/icons/logo-header-200x70.png',
            revision: '1'
        },
        {
            url: '/images/icons/marker-geolocate.png',
            revision: '1'
        },
        {
            url: '/images/icons/mstile-large.png',
            revision: '1'
        },
        {
            url: '/images/icons/mstile-medium.png',
            revision: '1'
        },
        {
            url: '/images/icons/mstile-small.png',
            revision: '1'
        },
        {
            url: '/images/icons/mstile-wide.png',
            revision: '1'
        },
        {
            url: '/images/icons/safari-pinned-tab.svg',
            revision: '1'
        },

        // Folder images > legends
        {
            url: '/images/legends/legend-blue-suitability.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-education-marker.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-green-suitability.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-health-marker.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-orange-suitability.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-red-suitability.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-river.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-sarana-kesehatan.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-sarana-pendidikan.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-stasiun-ka.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-terminal-bus.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-transportation-marker.png',
            revision: '1'
        },
        {
            url: '/images/legends/legend-yellow-suitability.png',
            revision: '1'
        },

        // Folder images > markers
        {
            url: '/images/markers/marker-bus-station.svg',
            revision: '1'
        },
        {
            url: '/images/markers/marker-edu-facility.svg',
            revision: '1'
        },
        {
            url: '/images/markers/marker-education.svg',
            revision: '1'
        },
        {
            url: '/images/markers/marker-health-facility.svg',
            revision: '1'
        },
        {
            url: '/images/markers/marker-health.svg',
            revision: '1'
        },
        {
            url: '/images/markers/marker-railway-station.svg',
            revision: '1'
        },
        {
            url: '/images/markers/marker-transportation.svg',
            revision: '1'
        },

        // Folder images > regions
        {
            url: '/images/regions/1-kec-tarik.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/2-kec-prambon.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/3-kec-krembung.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/4-kec-porong.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/5-kec-jabon.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/6-kec-tanggulangin.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/7-kec-candi.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/8-kec-sidoarjo.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/9-kec-tulangan.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/10-kec-wonoayu.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/11-kec-krian.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/12-kec-balongbendo.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/13-kec-taman.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/14-kec-sukodono.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/15-kec-buduran.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/16-kec-gedangan.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/17-kec-sedati.jpg',
            revision: '1'
        },
        {
            url: '/images/regions/18-kec-waru.jpg',
            revision: '1'
        },

        // Folder images > sliders
        {
            url: '/images/sliders/slide-1.jpg',
            revision: '1'
        },
        {
            url: '/images/sliders/slide-2.jpg',
            revision: '1'
        },
        {
            url: '/images/sliders/slide-3.jpg',
            revision: '1'
        },

        // Folder files > peta-batas-wilayag
        {
            url: '/files/peta-batas-wilayah/1-kec-tarik.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/2-kec-prambon.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/3-kec-krembung.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/4-kec-porong.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/5-kec-jabon.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/6-kec-tanggulangin.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/7-kec-candi.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/8-kec-sidoarjo.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/9-kec-tulangan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/10-kec-wonoayu.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/11-kec-krian.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/12-kec-balongbendo.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/13-kec-taman.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/14-kec-sukodono.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/15-kec-buduran.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/16-kec-gedangan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/17-kec-sedati.rar',
            revision: '1'
        },
        {
            url: '/files/peta-batas-wilayah/18-kec-waru.rar',
            revision: '1'
        },

        // Folder files > peta-dasar
        {
            url: '/files/peta-dasar/danau.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/hasil-survey-lapangan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/jaringan-jalan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/jaringan-sungai.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/kemiringan-lahan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/sarana-kesehatan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/sarana-pendidikan.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/sarana-stasiun-ka.rar',
            revision: '1'
        },
        {
            url: '/files/peta-dasar/sarana-terminal-bis.rar',
            revision: '1'
        }
    ]);

    // Cache the google fonts data storage in browser
    workbox.routing.registerRoute(
        /^https:\/\/fonts\.gstatic\.com/,
        workbox.strategies.staleWhileRevalidate({
            cacheName: 'caching-api-google-fonts',
            plugins: [
                new workbox.cacheableResponse.Plugin({
                    statuses: [200]
                }),
                new workbox.expiration.Plugin({
                    maxAgeSeconds: 60 * 60 * 24 * 365,
                    maxEntries: 30
                }),
            ]
        })
    );

} else {
    console.log('Workbox gagal dimuat!');
}