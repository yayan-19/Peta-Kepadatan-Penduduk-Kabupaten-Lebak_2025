ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([103.232873, -7.582404, 108.943773, -5.493152]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KepadatanPendudukKabupatenLebakTahun2025_2 = new ol.format.GeoJSON();
var features_KepadatanPendudukKabupatenLebakTahun2025_2 = format_KepadatanPendudukKabupatenLebakTahun2025_2.readFeatures(json_KepadatanPendudukKabupatenLebakTahun2025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KepadatanPendudukKabupatenLebakTahun2025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KepadatanPendudukKabupatenLebakTahun2025_2.addFeatures(features_KepadatanPendudukKabupatenLebakTahun2025_2);
var lyr_KepadatanPendudukKabupatenLebakTahun2025_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KepadatanPendudukKabupatenLebakTahun2025_2, 
                style: style_KepadatanPendudukKabupatenLebakTahun2025_2,
                popuplayertitle: 'Kepadatan Penduduk Kabupaten Lebak Tahun 2025',
                interactive: true,
    title: 'Kepadatan Penduduk Kabupaten Lebak Tahun 2025<br />\
    <img src="styles/legend/KepadatanPendudukKabupatenLebakTahun2025_2_0.png" /> < 500 Jiwa/km²<br />\
    <img src="styles/legend/KepadatanPendudukKabupatenLebakTahun2025_2_1.png" /> 500 - 1000 Jiwa/km²<br />\
    <img src="styles/legend/KepadatanPendudukKabupatenLebakTahun2025_2_2.png" /> 1000 - 1500 Jiwa/km²<br />\
    <img src="styles/legend/KepadatanPendudukKabupatenLebakTahun2025_2_3.png" /> 1500 - 2000 Jiwa/km²<br />\
    <img src="styles/legend/KepadatanPendudukKabupatenLebakTahun2025_2_4.png" /> > 2000 Jiwa/km²<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_KepadatanPendudukKabupatenLebakTahun2025_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_GoogleSatellite_1,lyr_KepadatanPendudukKabupatenLebakTahun2025_2];
lyr_KepadatanPendudukKabupatenLebakTahun2025_2.set('fieldAliases', {'fid': 'fid', 'Kecamatan': 'Kecamatan', 'jml_pend': 'jml_pend', 'kepadatan_': 'kepadatan_', 'SexRatio_': 'SexRatio_', 'Laju_Pert': 'Laju_Pert', 'Sumber': 'Sumber', });
lyr_KepadatanPendudukKabupatenLebakTahun2025_2.set('fieldImages', {'fid': 'TextEdit', 'Kecamatan': 'TextEdit', 'jml_pend': 'Range', 'kepadatan_': 'TextEdit', 'SexRatio_': 'TextEdit', 'Laju_Pert': 'TextEdit', 'Sumber': '', });
lyr_KepadatanPendudukKabupatenLebakTahun2025_2.set('fieldLabels', {'fid': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'jml_pend': 'inline label - visible with data', 'kepadatan_': 'inline label - visible with data', 'SexRatio_': 'inline label - visible with data', 'Laju_Pert': 'inline label - visible with data', 'Sumber': 'no label', });
lyr_KepadatanPendudukKabupatenLebakTahun2025_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});