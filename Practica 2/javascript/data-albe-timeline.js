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
$(document).ready(function () {

	$('#TimeLineCasa').albeTimeline(dataCasa);

});
$(document).ready(function () {

	$('#TimeLineMuseo').albeTimeline(dataMuseo);

});