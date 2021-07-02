var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamentos_2 = new ol.format.GeoJSON();
var features_Departamentos_2 = format_Departamentos_2.readFeatures(json_Departamentos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamentos_2.addFeatures(features_Departamentos_2);
var lyr_Departamentos_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2, 
                style: style_Departamentos_2,
                interactive: true,
                title: '<img src="styles/legend/Departamentos_2.png" /> Departamentos'
            });
var format_PoblacinpordeptoINDEC_3 = new ol.format.GeoJSON();
var features_PoblacinpordeptoINDEC_3 = format_PoblacinpordeptoINDEC_3.readFeatures(json_PoblacinpordeptoINDEC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PoblacinpordeptoINDEC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PoblacinpordeptoINDEC_3.addFeatures(features_PoblacinpordeptoINDEC_3);
var lyr_PoblacinpordeptoINDEC_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PoblacinpordeptoINDEC_3, 
                style: style_PoblacinpordeptoINDEC_3,
                interactive: true,
    title: 'Población por depto (INDEC)<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_0.png" /> 775 - 6.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_1.png" /> 6.001 - 43.075<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_2.png" /> 43.076 - 130.000<br />\
    <img src="styles/legend/PoblacinpordeptoINDEC_3_3.png" /> 130.001 - 186.585<br />'
        });
var format_PEAINDEC_4 = new ol.format.GeoJSON();
var features_PEAINDEC_4 = format_PEAINDEC_4.readFeatures(json_PEAINDEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEAINDEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEAINDEC_4.addFeatures(features_PEAINDEC_4);
var lyr_PEAINDEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PEAINDEC_4, 
                style: style_PEAINDEC_4,
                interactive: true,
    title: 'PEA (INDEC)<br />\
    <img src="styles/legend/PEAINDEC_4_0.png" /> 500 - 4.000<br />\
    <img src="styles/legend/PEAINDEC_4_1.png" /> 4.001 - 27.500<br />\
    <img src="styles/legend/PEAINDEC_4_2.png" /> 27.501 - 85.000<br />\
    <img src="styles/legend/PEAINDEC_4_3.png" /> 85.001 - 130.000<br />'
        });
var format_ViviendasenreasruralesINDEC_5 = new ol.format.GeoJSON();
var features_ViviendasenreasruralesINDEC_5 = format_ViviendasenreasruralesINDEC_5.readFeatures(json_ViviendasenreasruralesINDEC_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ViviendasenreasruralesINDEC_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ViviendasenreasruralesINDEC_5.addFeatures(features_ViviendasenreasruralesINDEC_5);
var lyr_ViviendasenreasruralesINDEC_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ViviendasenreasruralesINDEC_5, 
                style: style_ViviendasenreasruralesINDEC_5,
                interactive: true,
    title: 'Viviendas en áreas rurales (INDEC)<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_0.png" /> 300 - 400<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_1.png" /> 401 - 1.000<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_2.png" /> 1.001 - 2.500<br />\
    <img src="styles/legend/ViviendasenreasruralesINDEC_5_3.png" /> 2.501 o más<br />'
        });
var format_CabezasdeporcinosMAGyP_6 = new ol.format.GeoJSON();
var features_CabezasdeporcinosMAGyP_6 = format_CabezasdeporcinosMAGyP_6.readFeatures(json_CabezasdeporcinosMAGyP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeporcinosMAGyP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeporcinosMAGyP_6.addFeatures(features_CabezasdeporcinosMAGyP_6);
var lyr_CabezasdeporcinosMAGyP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeporcinosMAGyP_6, 
                style: style_CabezasdeporcinosMAGyP_6,
                interactive: true,
    title: 'Cabezas de porcinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_0.png" /> 0<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_1.png" /> 1 - 500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_2.png" /> 501 - 2.500<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_3.png" /> 2.501 - 4.750<br />\
    <img src="styles/legend/CabezasdeporcinosMAGyP_6_4.png" /> 4.751 o más<br />'
        });
var format_CabezasdeovinosMAGyP_7 = new ol.format.GeoJSON();
var features_CabezasdeovinosMAGyP_7 = format_CabezasdeovinosMAGyP_7.readFeatures(json_CabezasdeovinosMAGyP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdeovinosMAGyP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdeovinosMAGyP_7.addFeatures(features_CabezasdeovinosMAGyP_7);
var lyr_CabezasdeovinosMAGyP_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdeovinosMAGyP_7, 
                style: style_CabezasdeovinosMAGyP_7,
                interactive: true,
    title: 'Cabezas de ovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_0.png" /> 115.000 - 180.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_1.png" /> 180.001 - 240.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_2.png" /> 240.001 - 450.000<br />\
    <img src="styles/legend/CabezasdeovinosMAGyP_7_3.png" /> 450.001 - 800.000<br />'
        });
var format_CabezasdecaprinosMAGyP_8 = new ol.format.GeoJSON();
var features_CabezasdecaprinosMAGyP_8 = format_CabezasdecaprinosMAGyP_8.readFeatures(json_CabezasdecaprinosMAGyP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdecaprinosMAGyP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdecaprinosMAGyP_8.addFeatures(features_CabezasdecaprinosMAGyP_8);
var lyr_CabezasdecaprinosMAGyP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdecaprinosMAGyP_8, 
                style: style_CabezasdecaprinosMAGyP_8,
                interactive: true,
    title: 'Cabezas de caprinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_0.png" /> 125 - 1.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_1.png" /> 1.501 - 5.000<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_2.png" /> 5.001 - 27.500<br />\
    <img src="styles/legend/CabezasdecaprinosMAGyP_8_3.png" /> 27.501 o más<br />'
        });
var format_CabezasdebovinosMAGyP_9 = new ol.format.GeoJSON();
var features_CabezasdebovinosMAGyP_9 = format_CabezasdebovinosMAGyP_9.readFeatures(json_CabezasdebovinosMAGyP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CabezasdebovinosMAGyP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CabezasdebovinosMAGyP_9.addFeatures(features_CabezasdebovinosMAGyP_9);
var lyr_CabezasdebovinosMAGyP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CabezasdebovinosMAGyP_9, 
                style: style_CabezasdebovinosMAGyP_9,
                interactive: true,
    title: 'Cabezas de bovinos (MAGyP)<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_0.png" /> 25 - 2.500<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_1.png" /> 2.501 - 17.500<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_2.png" /> 17.501 - 35.000<br />\
    <img src="styles/legend/CabezasdebovinosMAGyP_9_3.png" /> 35.001 o más<br />'
        });
var format_HectreasdecerezosINDEC_10 = new ol.format.GeoJSON();
var features_HectreasdecerezosINDEC_10 = format_HectreasdecerezosINDEC_10.readFeatures(json_HectreasdecerezosINDEC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdecerezosINDEC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdecerezosINDEC_10.addFeatures(features_HectreasdecerezosINDEC_10);
var lyr_HectreasdecerezosINDEC_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdecerezosINDEC_10, 
                style: style_HectreasdecerezosINDEC_10,
                interactive: true,
    title: 'Hectáreas de cerezos (INDEC)<br />\
    <img src="styles/legend/HectreasdecerezosINDEC_10_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdecerezosINDEC_10_1.png" /> 1 - 100<br />\
    <img src="styles/legend/HectreasdecerezosINDEC_10_2.png" /> 101 o más<br />'
        });
var format_HectreasdehortalizasINDEC_11 = new ol.format.GeoJSON();
var features_HectreasdehortalizasINDEC_11 = format_HectreasdehortalizasINDEC_11.readFeatures(json_HectreasdehortalizasINDEC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HectreasdehortalizasINDEC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HectreasdehortalizasINDEC_11.addFeatures(features_HectreasdehortalizasINDEC_11);
var lyr_HectreasdehortalizasINDEC_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HectreasdehortalizasINDEC_11, 
                style: style_HectreasdehortalizasINDEC_11,
                interactive: true,
    title: 'Hectáreas de hortalizas (INDEC)<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_0.png" /> 0<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_1.png" /> 1 - 20<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_2.png" /> 21 - 75<br />\
    <img src="styles/legend/HectreasdehortalizasINDEC_11_3.png" /> 76 o más<br />'
        });
var format_LocalidadesChubut_12 = new ol.format.GeoJSON();
var features_LocalidadesChubut_12 = format_LocalidadesChubut_12.readFeatures(json_LocalidadesChubut_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LocalidadesChubut_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LocalidadesChubut_12.addFeatures(features_LocalidadesChubut_12);
var lyr_LocalidadesChubut_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LocalidadesChubut_12, 
                style: style_LocalidadesChubut_12,
                interactive: true,
                title: '<img src="styles/legend/LocalidadesChubut_12.png" /> Localidades Chubut'
            });
var format_Capacitaciones2019tcnicas_13 = new ol.format.GeoJSON();
var features_Capacitaciones2019tcnicas_13 = format_Capacitaciones2019tcnicas_13.readFeatures(json_Capacitaciones2019tcnicas_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2019tcnicas_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2019tcnicas_13.addFeatures(features_Capacitaciones2019tcnicas_13);
var lyr_Capacitaciones2019tcnicas_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2019tcnicas_13, 
                style: style_Capacitaciones2019tcnicas_13,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2019tcnicas_13.png" /> Capacitaciones 2019 (técnicas)'
            });
var format_Capacitaciones2018tcnicas_14 = new ol.format.GeoJSON();
var features_Capacitaciones2018tcnicas_14 = format_Capacitaciones2018tcnicas_14.readFeatures(json_Capacitaciones2018tcnicas_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2018tcnicas_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2018tcnicas_14.addFeatures(features_Capacitaciones2018tcnicas_14);
var lyr_Capacitaciones2018tcnicas_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2018tcnicas_14, 
                style: style_Capacitaciones2018tcnicas_14,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2018tcnicas_14.png" /> Capacitaciones 2018 (técnicas)'
            });
var format_Capacitaciones2017tcnicas_15 = new ol.format.GeoJSON();
var features_Capacitaciones2017tcnicas_15 = format_Capacitaciones2017tcnicas_15.readFeatures(json_Capacitaciones2017tcnicas_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capacitaciones2017tcnicas_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capacitaciones2017tcnicas_15.addFeatures(features_Capacitaciones2017tcnicas_15);
var lyr_Capacitaciones2017tcnicas_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Capacitaciones2017tcnicas_15, 
                style: style_Capacitaciones2017tcnicas_15,
                interactive: true,
                title: '<img src="styles/legend/Capacitaciones2017tcnicas_15.png" /> Capacitaciones 2017 (técnicas)'
            });
var format_CAIRChubut_16 = new ol.format.GeoJSON();
var features_CAIRChubut_16 = format_CAIRChubut_16.readFeatures(json_CAIRChubut_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CAIRChubut_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAIRChubut_16.addFeatures(features_CAIRChubut_16);
var lyr_CAIRChubut_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CAIRChubut_16, 
                style: style_CAIRChubut_16,
                interactive: true,
                title: '<img src="styles/legend/CAIRChubut_16.png" /> CAIR Chubut'
            });
var format_BERChubut_17 = new ol.format.GeoJSON();
var features_BERChubut_17 = format_BERChubut_17.readFeatures(json_BERChubut_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERChubut_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERChubut_17.addFeatures(features_BERChubut_17);
var lyr_BERChubut_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERChubut_17, 
                style: style_BERChubut_17,
                interactive: true,
                title: '<img src="styles/legend/BERChubut_17.png" /> BER Chubut'
            });
var format_BERChubut_18 = new ol.format.GeoJSON();
var features_BERChubut_18 = format_BERChubut_18.readFeatures(json_BERChubut_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BERChubut_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BERChubut_18.addFeatures(features_BERChubut_18);
var lyr_BERChubut_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BERChubut_18, 
                style: style_BERChubut_18,
                interactive: true,
                title: '<img src="styles/legend/BERChubut_18.png" /> BER Chubut'
            });
var format_Delegacin_19 = new ol.format.GeoJSON();
var features_Delegacin_19 = format_Delegacin_19.readFeatures(json_Delegacin_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Delegacin_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Delegacin_19.addFeatures(features_Delegacin_19);
var lyr_Delegacin_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Delegacin_19, 
                style: style_Delegacin_19,
                interactive: true,
                title: '<img src="styles/legend/Delegacin_19.png" /> Delegación'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleHybrid_1.setVisible(true);lyr_Departamentos_2.setVisible(true);lyr_PoblacinpordeptoINDEC_3.setVisible(true);lyr_PEAINDEC_4.setVisible(true);lyr_ViviendasenreasruralesINDEC_5.setVisible(true);lyr_CabezasdeporcinosMAGyP_6.setVisible(true);lyr_CabezasdeovinosMAGyP_7.setVisible(true);lyr_CabezasdecaprinosMAGyP_8.setVisible(true);lyr_CabezasdebovinosMAGyP_9.setVisible(true);lyr_HectreasdecerezosINDEC_10.setVisible(true);lyr_HectreasdehortalizasINDEC_11.setVisible(true);lyr_LocalidadesChubut_12.setVisible(true);lyr_Capacitaciones2019tcnicas_13.setVisible(true);lyr_Capacitaciones2018tcnicas_14.setVisible(true);lyr_Capacitaciones2017tcnicas_15.setVisible(true);lyr_CAIRChubut_16.setVisible(true);lyr_BERChubut_17.setVisible(true);lyr_BERChubut_18.setVisible(true);lyr_Delegacin_19.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_Departamentos_2,lyr_PoblacinpordeptoINDEC_3,lyr_PEAINDEC_4,lyr_ViviendasenreasruralesINDEC_5,lyr_CabezasdeporcinosMAGyP_6,lyr_CabezasdeovinosMAGyP_7,lyr_CabezasdecaprinosMAGyP_8,lyr_CabezasdebovinosMAGyP_9,lyr_HectreasdecerezosINDEC_10,lyr_HectreasdehortalizasINDEC_11,lyr_LocalidadesChubut_12,lyr_Capacitaciones2019tcnicas_13,lyr_Capacitaciones2018tcnicas_14,lyr_Capacitaciones2017tcnicas_15,lyr_CAIRChubut_16,lyr_BERChubut_17,lyr_BERChubut_18,lyr_Delegacin_19];
lyr_Departamentos_2.set('fieldAliases', {'Depto': 'Depto', });
lyr_PoblacinpordeptoINDEC_3.set('fieldAliases', {'poblacion': 'poblacion', });
lyr_PEAINDEC_4.set('fieldAliases', {'pea': 'pea', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldAliases', {'viv. rur': 'viv. rur', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldAliases', {'porcinos': 'porcinos', });
lyr_CabezasdeovinosMAGyP_7.set('fieldAliases', {'ovinos': 'ovinos', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldAliases', {'caprinos': 'caprinos', });
lyr_CabezasdebovinosMAGyP_9.set('fieldAliases', {'bovinos': 'bovinos', });
lyr_HectreasdecerezosINDEC_10.set('fieldAliases', {'cerezos': 'cerezos', });
lyr_HectreasdehortalizasINDEC_11.set('fieldAliases', {'hortalizas': 'hortalizas', });
lyr_LocalidadesChubut_12.set('fieldAliases', {'localidad': 'localidad', 'Poblacion': 'Poblacion', });
lyr_Capacitaciones2019tcnicas_13.set('fieldAliases', {'localidad': 'localidad', 'tipo capa.': 'tipo capa.', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2018tcnicas_14.set('fieldAliases', {'localidad': 'localidad', 'tipo capa.': 'tipo capa.', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_Capacitaciones2017tcnicas_15.set('fieldAliases', {'localidad': 'localidad', 'tipo capa.': 'tipo capa.', 'tematica': 'tematica', 'fechas': 'fechas', 'asistentes': 'asistentes', });
lyr_CAIRChubut_16.set('fieldAliases', {'ID': 'ID', 'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Admin': 'Admin', });
lyr_BERChubut_17.set('fieldAliases', {'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_BERChubut_18.set('fieldAliases', {'Delegacion': 'Delegacion', 'Localidad': 'Localidad', 'Entidad': 'Entidad', 'Direccion': 'Direccion', 'Numero': 'Numero', });
lyr_Delegacin_19.set('fieldAliases', {'Localidad': 'Localidad', 'Direccion': 'Direccion', 'Prest 2016': 'Prest 2016', 'Prest 2017': 'Prest 2017', 'Prest 2018': 'Prest 2018', 'Prest 2019': 'Prest 2019', 'Prest 2020': 'Prest 2020', });
lyr_Departamentos_2.set('fieldImages', {'Depto': '', });
lyr_PoblacinpordeptoINDEC_3.set('fieldImages', {'poblacion': 'TextEdit', });
lyr_PEAINDEC_4.set('fieldImages', {'pea': 'TextEdit', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldImages', {'viv. rur': 'TextEdit', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldImages', {'porcinos': 'TextEdit', });
lyr_CabezasdeovinosMAGyP_7.set('fieldImages', {'ovinos': 'TextEdit', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldImages', {'caprinos': 'TextEdit', });
lyr_CabezasdebovinosMAGyP_9.set('fieldImages', {'bovinos': 'TextEdit', });
lyr_HectreasdecerezosINDEC_10.set('fieldImages', {'cerezos': 'TextEdit', });
lyr_HectreasdehortalizasINDEC_11.set('fieldImages', {'hortalizas': 'TextEdit', });
lyr_LocalidadesChubut_12.set('fieldImages', {'localidad': 'TextEdit', 'Poblacion': 'TextEdit', });
lyr_Capacitaciones2019tcnicas_13.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa.': 'TextEdit', 'tematica': 'TextEdit', 'fechas': 'TextEdit', 'asistentes': 'Range', });
lyr_Capacitaciones2018tcnicas_14.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa.': '', 'tematica': '', 'fechas': '', 'asistentes': '', });
lyr_Capacitaciones2017tcnicas_15.set('fieldImages', {'localidad': 'TextEdit', 'tipo capa.': '', 'tematica': '', 'fechas': '', 'asistentes': '', });
lyr_CAIRChubut_16.set('fieldImages', {'ID': 'TextEdit', 'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Admin': '', });
lyr_BERChubut_17.set('fieldImages', {'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_BERChubut_18.set('fieldImages', {'Delegacion': 'TextEdit', 'Localidad': 'TextEdit', 'Entidad': 'TextEdit', 'Direccion': 'TextEdit', 'Numero': 'TextEdit', });
lyr_Delegacin_19.set('fieldImages', {'Localidad': 'TextEdit', 'Direccion': '', 'Prest 2016': '', 'Prest 2017': '', 'Prest 2018': '', 'Prest 2019': '', 'Prest 2020': '', });
lyr_Departamentos_2.set('fieldLabels', {'Depto': 'inline label', });
lyr_PoblacinpordeptoINDEC_3.set('fieldLabels', {'poblacion': 'inline label', });
lyr_PEAINDEC_4.set('fieldLabels', {'pea': 'inline label', });
lyr_ViviendasenreasruralesINDEC_5.set('fieldLabels', {'viv. rur': 'inline label', });
lyr_CabezasdeporcinosMAGyP_6.set('fieldLabels', {'porcinos': 'inline label', });
lyr_CabezasdeovinosMAGyP_7.set('fieldLabels', {'ovinos': 'inline label', });
lyr_CabezasdecaprinosMAGyP_8.set('fieldLabels', {'caprinos': 'inline label', });
lyr_CabezasdebovinosMAGyP_9.set('fieldLabels', {'bovinos': 'inline label', });
lyr_HectreasdecerezosINDEC_10.set('fieldLabels', {'cerezos': 'inline label', });
lyr_HectreasdehortalizasINDEC_11.set('fieldLabels', {'hortalizas': 'inline label', });
lyr_LocalidadesChubut_12.set('fieldLabels', {'localidad': 'inline label', 'Poblacion': 'inline label', });
lyr_Capacitaciones2019tcnicas_13.set('fieldLabels', {'localidad': 'inline label', 'tipo capa.': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2018tcnicas_14.set('fieldLabels', {'localidad': 'inline label', 'tipo capa.': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_Capacitaciones2017tcnicas_15.set('fieldLabels', {'localidad': 'inline label', 'tipo capa.': 'inline label', 'tematica': 'inline label', 'fechas': 'inline label', 'asistentes': 'inline label', });
lyr_CAIRChubut_16.set('fieldLabels', {'ID': 'inline label', 'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Admin': 'inline label', });
lyr_BERChubut_17.set('fieldLabels', {'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_BERChubut_18.set('fieldLabels', {'Delegacion': 'inline label', 'Localidad': 'inline label', 'Entidad': 'inline label', 'Direccion': 'inline label', 'Numero': 'inline label', });
lyr_Delegacin_19.set('fieldLabels', {'Localidad': 'inline label', 'Direccion': 'inline label', 'Prest 2016': 'inline label', 'Prest 2017': 'inline label', 'Prest 2018': 'inline label', 'Prest 2019': 'inline label', 'Prest 2020': 'inline label', });
lyr_Delegacin_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});