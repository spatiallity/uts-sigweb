let map, basemap, geojsonLayer, basemapControl

map = L.map('map').setView([-7.770723098982331, 110.37708782247991], 15)
basemap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

basemapControl = L.control.layers({
    'OpenStreetMap': basemap,
    'Google Satellite': L.tileLayer('http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}&s=Ga'),
    'Google Terrain': L.tileLayer('http://mt0.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'),
    'Google Street': L.tileLayer('http://mt0.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'),
    'OpenStreetMap Topo': L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png'),
}, null, { position: 'topright' }).addTo(map);


var marker = L.marker([-7.7639847, 110.3704093]).bindPopup(
    '<p>Teknik Geodesi UGM</P><a href="https://maps.app.goo.gl/o2nHBfVms1ay9zA18"><p>Link Gmaps</p></a><img src="https://geodesi.ugm.ac.id/wp-content/uploads/sites/695/2017/08/SAVE_20170829_134406.jpeg"  width=200 height=200 />'
    ).addTo(map);

var marker2 = L.marker([-7.7701080915235465, 110.38196152238335]).bindPopup(
    '<p>Wisdom Park</P><a href="https://maps.app.goo.gl/gSt7ky65DpNBVmP16"><p>Link Gmaps</p></a><img src="https://cdn.wisata.app/diary/30332e5a-13a6-4399-a9c7-91c3a63cc840.jpg"  width=200 height=200 />'
    ).addTo(map);

var marker3 = L.marker([-7.770723098982331, 110.37708782247991]).bindPopup(
    '<p>Balairung UGM</P><a href="https://maps.app.goo.gl/TwjXSDX6jDPLVQvFA"><p>Link Gmaps</p></a><img src="https://lpkm.psikologi.ugm.ac.id/wp-content/uploads/2016/05/balairung-ugm.jpg"  width=200 height=200 />'
    ).addTo(map);

var marker4 = L.marker([-7.76900142269477, 110.37817603747862]).bindPopup(
    '<p>Perpustakaan Pusat UGM</P><a href="https://maps.app.goo.gl/WY3Yqu1fYLtMGuqH8"><p>Link Gmaps</p></a><img src="https://lib.ugm.ac.id/wp-content/uploads/sites/1681/2022/08/2022agu23_depan.png"  width=200 height=200 />'
    ).addTo(map);

var marker5 = L.marker([-7.775495835666594, 110.37615863298564]).bindPopup(
    '<p>Bundaran UGM</P><a href="https://maps.app.goo.gl/btMNmN6wikJTq1Fd6"><p>Link Gmaps</p></a><img src="https://cdn-brilio-net.akamaized.net/webp/news/2015/11/11/26768/1200xauto-selain-mbak-yayuk-ini-mitos-horor-di-ugm-sejak-puluhan-tahun-silam-1511110-rev1.jpg" width=200 height=200 />'
    ).addTo(map);


L.control.layers(baseMaps, overlayMaps).addTo(map);
