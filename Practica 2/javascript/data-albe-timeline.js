//Json Object
var dataCasa = [
    {
        time: '1939-03-15',
        body: [{
            tag: 'h3',
            content: 'Banco de España',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'Hasta años 80',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'El edificio, diseñado en la década de los años treinta, albergó la sede del Banco de España en Vigo desde 1939 hasta mediados de la década de los ochenta. '
            }]
    },
    {
        time: '1985-04-23',
        body: [{
            tag: 'h3',
            content: 'Ministerio de Economía y Hacienda',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'Nuevo proyecto',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'Tras el cierre de todas las sucursales del banco emiso que no estuvieran en capitales de provinica, se dió un nuevo uso al Banco de España: El nuevo Minsiterio de Economía y Hacienda'
            }]
    },
    {
        time: '1990-05-28',
        body: [{
            tag: 'h3',
            content: '' +
                'Área cultural',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'Expsiciones',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'La Casa de las Artes, es desde 1990 la sede principal de la programación cultural del área de Cultura del Ayuntamiento de Vigo. Cada año, se exponen en sus diversas salas exposiciones de pintura, escultura, fotografía, así como ciencia o historia entre otros.'
            }]
    }];
var dataMuseo = [
    {
        time: '2020-10-04',
        body: [{
            tag: 'h3',
            content: 'Historia Do Cinema',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'Clásicos del cine',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'A partir del 4 de octubre MARCO inicia una nueva actividad de la mano del cine club Sunset Boulevard. Un ciclo de proyecciones de grandes clásicos de la historia del cine, una vez al mes, con un total de diez sesiones repartidas entre octubre de 2019 y junio de 2020.\n' +
                    '\n '
            }]
    },
    {
        time: '2020-12-01',
        body: [{
            tag: 'h3',
            content: 'Día internacional contra el SIDA',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'PVLSE Vigo',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'En el marco de las actividades organizadas por PVLSE Vigo el 1 de diciembre con motivo del Día Internacional del Sida, MARCO presenta en la sala principal del vestíbulo la obra Carrying, de Pepe Espaliú, acompañada de una exposición bibliográfica y documental sobre el artista.\n' +
                    '\n'
            }]
    },
    {
        time: '2020-11-12',
        body: [{
            tag: 'h3',
            content: '' +
                'Curso de cine',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'Eutopías',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'Número total de sesiones: 12 por cada turno.</br>  PLAZAS LIMITADAS a 34 participantes por turno. </br> Inscripciones e inscripciones a partir del <strong>8 de octubre</strong> en taquilla del MARCO </br> recepcion.marco@gmail.com 986 113900 Ext. 100'
            }]
    }];
var dataMirador = [
    {
        time: '0500-01-01',
        body: [{
            tag: 'h3',
            content: 'Creación',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'SIGLO VI',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'El castro de Vigo está datado entre el siglo VI antes de Cristo al II después de Cristo. El mundo castreño coincide con la llamada Edad de Hierro en Galicia y la romanización en sus albores.' +
                    '\n '
            }]
    },
    {
        time: '0600-01-01',
        body: [{
            tag: 'h3',
            content: 'Restos Fortificación',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: '',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'En el parque también se pueden contemplar los restos de una de las fortificaciones del siglo XVII que formaban parte -junto con el próximo castillo de San Sebastián y las murallas que rodeaban la ciudad antigua- de la estructura defensiva de Vigo.' +
                    '\n'
            }]
    },
    {
        time: '1934-01-01',
        body: [{
            tag: 'h3',
            content: '' +
                'Cesión',
            attr: {
                cssclass: 'group-title'
            }
        },
            {
                tag: 'span',
                content: 'Parque de Vigo',
                attr: {
                    cssclass: 'group-sub-title'
                }
            },
            {
                tag: 'p',
                content: 'En 1934 el monte fue cedido a la ciudad Vigo por el Ministerio de Guerra. Se decidió convertir en parque por lo que se plantaron especies arbóreas ornamentales y exóticas. En ese momento se excava el castro.'
            }]
    },
	{
		time: '2000-01-01',
		body: [{
			tag: 'h3',
			content: '' +
				'Restauración y Museo',
			attr: {
				cssclass: 'group-title'
			}
		},
			{
				tag: 'span',
				content: 'Actualidad',
				attr: {
					cssclass: 'group-sub-title'
				}
			},
			{
				tag: 'p',
				content: 'En los primeros años del siglo XXI la excavación arqueológica es restaurada y convertida en un museo a cielo abierto'
			}]
	}
];

$(document).ready(function () {

    $('#TimeLineMuseo').albeTimeline(dataMuseo);
    $('#TimeLineMirador').albeTimeline(dataMirador);
    $('#TimeLineCasa').albeTimeline(dataCasa);

});
