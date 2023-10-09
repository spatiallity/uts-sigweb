let map, basemap, geojsonLayer, basemapControl

map = L.map('map').setView([-7.7639847, 110.3704093], 13)
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

var marker2 = L.marker([-7.782677302052341, 110.36711861074859]).bindPopup(
    '<p>Tugu Yogyakarta</P><a href="https://maps.app.goo.gl/4KVXf6AsehrhZxFL6"><p>Link Gmaps</p></a><img src="https://media.suara.com/pictures/970x544/2019/10/07/31636-tugu-yogyakarta.jpg"  width=200 height=200 />'
    ).addTo(map);

var marker3 = L.marker([-7.770723098982331, 110.37708782247991]).bindPopup(
    '<p>Balairung UGM</P><a href="https://maps.app.goo.gl/TwjXSDX6jDPLVQvFA"><p>Link Gmaps</p></a><img src="https://lpkm.psikologi.ugm.ac.id/wp-content/uploads/2016/05/balairung-ugm.jpg"  width=200 height=200 />'
    ).addTo(map);

var marker4 = L.marker([-7.807757245974184, 110.35904242246777]).bindPopup(
    '<p>Taman Sari</P><a href="https://maps.app.goo.gl/MbHQ7FnkbdRUdbm18"><p>Link Gmaps</p></a><img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/Jogjakarta%2C_January_2007.jpg"  width=200 height=200 />'
    ).addTo(map);

var marker5 = L.marker([-7.746396259715203, 110.36901425115529]).bindPopup(
    '<p>Monumen Jogja Kembali</P><a href="https://maps.app.goo.gl/CeXbHdxtAPNJ8NDq7"><p>Link Gmaps</p></a><img src="https://upload.wikimedia.org/wikipedia/id/4/4a/Monumen_Yogya_Kembali.JPG" width=200 height=200 />'
    ).addTo(map);


L.control.layers(baseMaps, overlayMaps).addTo(map);
