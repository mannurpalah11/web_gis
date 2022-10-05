var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_batas_desa_kab_ciamis_1 = new ol.format.GeoJSON();
var features_batas_desa_kab_ciamis_1 = format_batas_desa_kab_ciamis_1.readFeatures(json_batas_desa_kab_ciamis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batas_desa_kab_ciamis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batas_desa_kab_ciamis_1.addFeatures(features_batas_desa_kab_ciamis_1);
var lyr_batas_desa_kab_ciamis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batas_desa_kab_ciamis_1, 
                style: style_batas_desa_kab_ciamis_1,
                interactive: true,
                title: '<img src="styles/legend/batas_desa_kab_ciamis_1.png" /> batas_desa_kab_ciamis'
            });
var format_area_rawan_banjir_2 = new ol.format.GeoJSON();
var features_area_rawan_banjir_2 = format_area_rawan_banjir_2.readFeatures(json_area_rawan_banjir_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_rawan_banjir_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_rawan_banjir_2.addFeatures(features_area_rawan_banjir_2);
var lyr_area_rawan_banjir_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_rawan_banjir_2, 
                style: style_area_rawan_banjir_2,
                interactive: true,
                title: '<img src="styles/legend/area_rawan_banjir_2.png" /> area_rawan_banjir'
            });
var format_area_rawan_longsor_3 = new ol.format.GeoJSON();
var features_area_rawan_longsor_3 = format_area_rawan_longsor_3.readFeatures(json_area_rawan_longsor_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_rawan_longsor_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_rawan_longsor_3.addFeatures(features_area_rawan_longsor_3);
var lyr_area_rawan_longsor_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_rawan_longsor_3, 
                style: style_area_rawan_longsor_3,
                interactive: true,
                title: '<img src="styles/legend/area_rawan_longsor_3.png" /> area_rawan_longsor'
            });
var format_area_hijau_4 = new ol.format.GeoJSON();
var features_area_hijau_4 = format_area_hijau_4.readFeatures(json_area_hijau_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_area_hijau_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_area_hijau_4.addFeatures(features_area_hijau_4);
var lyr_area_hijau_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_area_hijau_4, 
                style: style_area_hijau_4,
                interactive: true,
                title: '<img src="styles/legend/area_hijau_4.png" /> area_hijau'
            });
var format_sungai_5 = new ol.format.GeoJSON();
var features_sungai_5 = format_sungai_5.readFeatures(json_sungai_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sungai_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sungai_5.addFeatures(features_sungai_5);
var lyr_sungai_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sungai_5, 
                style: style_sungai_5,
                interactive: true,
                title: '<img src="styles/legend/sungai_5.png" /> sungai'
            });
var format_jalan_ciamis_6 = new ol.format.GeoJSON();
var features_jalan_ciamis_6 = format_jalan_ciamis_6.readFeatures(json_jalan_ciamis_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_ciamis_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_ciamis_6.addFeatures(features_jalan_ciamis_6);
var lyr_jalan_ciamis_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_jalan_ciamis_6, 
                style: style_jalan_ciamis_6,
                interactive: true,
    title: 'jalan_ciamis<br />\
    <img src="styles/legend/jalan_ciamis_6_0.png" /> jalan_kab<br />\
    <img src="styles/legend/jalan_ciamis_6_1.png" /> jalan_utama<br />\
    <img src="styles/legend/jalan_ciamis_6_2.png" /> jalan_desa<br />'
        });
var format_pemerintahan_7 = new ol.format.GeoJSON();
var features_pemerintahan_7 = format_pemerintahan_7.readFeatures(json_pemerintahan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemerintahan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pemerintahan_7.addFeatures(features_pemerintahan_7);
var lyr_pemerintahan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemerintahan_7, 
                style: style_pemerintahan_7,
                interactive: true,
    title: 'pemerintahan<br />\
    <img src="styles/legend/pemerintahan_7_0.png" /> Kantor DPRD<br />\
    <img src="styles/legend/pemerintahan_7_1.png" /> kantor kecamatan<br />\
    <img src="styles/legend/pemerintahan_7_2.png" /> Kantor_Bupati<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_batas_desa_kab_ciamis_1.setVisible(true);lyr_area_rawan_banjir_2.setVisible(true);lyr_area_rawan_longsor_3.setVisible(true);lyr_area_hijau_4.setVisible(true);lyr_sungai_5.setVisible(true);lyr_jalan_ciamis_6.setVisible(true);lyr_pemerintahan_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_batas_desa_kab_ciamis_1,lyr_area_rawan_banjir_2,lyr_area_rawan_longsor_3,lyr_area_hijau_4,lyr_sungai_5,lyr_jalan_ciamis_6,lyr_pemerintahan_7];
lyr_batas_desa_kab_ciamis_1.set('fieldAliases', {'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_area_rawan_banjir_2.set('fieldAliases', {'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_area_rawan_longsor_3.set('fieldAliases', {'kdppum': 'kdppum', 'namobj': 'namobj', 'remark': 'remark', 'kdpbps': 'kdpbps', 'fcode': 'fcode', 'luaswh': 'luaswh', 'uupp': 'uupp', 'srs_id': 'srs_id', 'lcode': 'lcode', 'metadata': 'metadata', 'kdebps': 'kdebps', 'kdepum': 'kdepum', 'kdcbps': 'kdcbps', 'kdcpum': 'kdcpum', 'kdbbps': 'kdbbps', 'kdbpum': 'kdbpum', 'wadmkd': 'wadmkd', 'wiadkd': 'wiadkd', 'wadmkc': 'wadmkc', 'wiadkc': 'wiadkc', 'wadmkk': 'wadmkk', 'wiadkk': 'wiadkk', 'wadmpr': 'wadmpr', 'wiadpr': 'wiadpr', 'tipadm': 'tipadm', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_area_hijau_4.set('fieldAliases', {'id': 'id', });
lyr_sungai_5.set('fieldAliases', {'id': 'id', });
lyr_jalan_ciamis_6.set('fieldAliases', {'id': 'id', 'jenis_jln': 'jenis_jln', });
lyr_pemerintahan_7.set('fieldAliases', {'id': 'id', 'jenis_pem': 'jenis_pem', 'nama_pem': 'nama_pem', });
lyr_batas_desa_kab_ciamis_1.set('fieldImages', {'kdppum': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'kdpbps': 'TextEdit', 'fcode': 'TextEdit', 'luaswh': 'TextEdit', 'uupp': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdbbps': 'TextEdit', 'kdbpum': 'TextEdit', 'wadmkd': 'TextEdit', 'wiadkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wiadkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wiadkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadpr': 'TextEdit', 'tipadm': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_area_rawan_banjir_2.set('fieldImages', {'kdppum': '', 'namobj': '', 'remark': '', 'kdpbps': '', 'fcode': '', 'luaswh': '', 'uupp': '', 'srs_id': '', 'lcode': '', 'metadata': '', 'kdebps': '', 'kdepum': '', 'kdcbps': '', 'kdcpum': '', 'kdbbps': '', 'kdbpum': '', 'wadmkd': '', 'wiadkd': '', 'wadmkc': '', 'wiadkc': '', 'wadmkk': '', 'wiadkk': '', 'wadmpr': '', 'wiadpr': '', 'tipadm': '', 'shape_leng': '', 'shape_area': '', });
lyr_area_rawan_longsor_3.set('fieldImages', {'kdppum': 'TextEdit', 'namobj': 'TextEdit', 'remark': 'TextEdit', 'kdpbps': 'TextEdit', 'fcode': 'TextEdit', 'luaswh': 'TextEdit', 'uupp': 'TextEdit', 'srs_id': 'TextEdit', 'lcode': 'TextEdit', 'metadata': 'TextEdit', 'kdebps': 'TextEdit', 'kdepum': 'TextEdit', 'kdcbps': 'TextEdit', 'kdcpum': 'TextEdit', 'kdbbps': 'TextEdit', 'kdbpum': 'TextEdit', 'wadmkd': 'TextEdit', 'wiadkd': 'TextEdit', 'wadmkc': 'TextEdit', 'wiadkc': 'TextEdit', 'wadmkk': 'TextEdit', 'wiadkk': 'TextEdit', 'wadmpr': 'TextEdit', 'wiadpr': 'TextEdit', 'tipadm': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_area_hijau_4.set('fieldImages', {'id': 'TextEdit', });
lyr_sungai_5.set('fieldImages', {'id': 'TextEdit', });
lyr_jalan_ciamis_6.set('fieldImages', {'id': 'TextEdit', 'jenis_jln': 'TextEdit', });
lyr_pemerintahan_7.set('fieldImages', {'id': 'TextEdit', 'jenis_pem': 'TextEdit', 'nama_pem': 'TextEdit', });
lyr_batas_desa_kab_ciamis_1.set('fieldLabels', {'kdppum': 'no label', 'namobj': 'inline label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'inline label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_area_rawan_banjir_2.set('fieldLabels', {'kdppum': 'no label', 'namobj': 'inline label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'inline label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_area_rawan_longsor_3.set('fieldLabels', {'kdppum': 'no label', 'namobj': 'inline label', 'remark': 'no label', 'kdpbps': 'no label', 'fcode': 'no label', 'luaswh': 'no label', 'uupp': 'no label', 'srs_id': 'no label', 'lcode': 'no label', 'metadata': 'no label', 'kdebps': 'no label', 'kdepum': 'no label', 'kdcbps': 'no label', 'kdcpum': 'no label', 'kdbbps': 'no label', 'kdbpum': 'no label', 'wadmkd': 'no label', 'wiadkd': 'no label', 'wadmkc': 'inline label', 'wiadkc': 'no label', 'wadmkk': 'no label', 'wiadkk': 'no label', 'wadmpr': 'no label', 'wiadpr': 'no label', 'tipadm': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_area_hijau_4.set('fieldLabels', {'id': 'no label', });
lyr_sungai_5.set('fieldLabels', {'id': 'no label', });
lyr_jalan_ciamis_6.set('fieldLabels', {'id': 'no label', 'jenis_jln': 'inline label', });
lyr_pemerintahan_7.set('fieldLabels', {'id': 'no label', 'jenis_pem': 'inline label', 'nama_pem': 'inline label', });
lyr_pemerintahan_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});