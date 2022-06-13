 $(document).ready(function(){
	aeropuertoMayorMovimiento();
	aerolineaMayorMovimiento();
	diaMayorMovimiento();
	aerolineasMasDosVuelos();
	vuelos();
	aerolineas();
	aeropuertos();
	
});

function aeropuertoMayorMovimiento(){
	var rutaWS = $('#ruta').val();
	var today = new Date();
	var year = today.getFullYear();
	$.ajax({
		type: 'GET',
		url: rutaWS + '/vuelos/aereopuerto/'+year
	}).done(function(e){
		$('#aeropuertoEstadistica').text(e.idAeropuertos.nombre);
	});
}

function aerolineaMayorMovimiento(){
	var rutaWS = $('#ruta').val();
	var today = new Date();
	var year = today.getFullYear();
	$.ajax({
		type: 'GET',
		url: rutaWS + '/vuelos/aerolinea/'+year
	}).done(function(e){
		$('#aerolineaEstadistica').text(e.idAerolinea.nombre);
	});
}

function diaMayorMovimiento(){
	var rutaWS = $('#ruta').val();
	$.ajax({
		type: 'GET',
		url: rutaWS + '/vuelos/mayor/dia'
	}).done(function(e){
		$('#diasEstadistica').text(e.dia.substr(0, 10));
	});
}

function aerolineasMasDosVuelos(){
	var rutaWS = $('#ruta').val();
	var today = new Date();
	var year = today.getFullYear();
	var month = today.getMonth();
	var day = today.getDate();
	var today1;
	if(month < 10)
		today1 = year + '-0'+month+'-'+day
	else
		today1 = year + '-'+month+'-'+day
	$.ajax({
		type: 'GET',
		url: rutaWS + '/vuelos/mas/aerolineas/'+today
	}).done(function(e){
		var aerolineas = '';
		if(e != undefined){
			for(var i=0;i<e.length;i++){
				aerolineas += e[i].idAerolinea.nombre;
				if(i < e.length -1)
					aerolineas += ' - ';
			}	
		}
		$('#masVuelosEstadisticas').text(aerolineas);
	});
}

function vuelos(){
	var rutaWS = $('#ruta').val();
	$.ajax({
		type: 'GET',
		url: rutaWS + '/vuelos'
	}).done(function(e){
		var vuelos = '';
		for(var i=0;i<e.length;i++){
			vuelos += e[i].idAerolinea.nombre;
			vuelos += '<tr style="height: 49px;">'
            vuelos += '    <td class="u-align-left u-border-2 u-border-white u-first-column u-table-cell">'+e[i].idAerolinea.nombre+'</td>';
            vuelos += '    <td class="u-border-2 u-border-white u-table-cell">'+e[i].idAeropuertos.nombre+'</td>';
            vuelos += '    <td class="u-border-2 u-border-white u-table-cell">'+e[i].idMovimieto.descripcion+'</td>';
            vuelos += '    <td class="u-border-2 u-border-white u-table-cell">'+e[i].dia.substr(0, 10)+'</td>';
            vuelos += '  </tr>'
		}
		$('#vuelosTable tbody').append(vuelos);
	});
}

function aerolineas(){
	var rutaWS = $('#ruta').val();
	$.ajax({
		type: 'GET',
		url: rutaWS + '/aerolineas'
	}).done(function(e){
		var aerolineas = '';
		for(var i=0;i<e.length;i++){
			aerolineas += e[i].nombre;
			if(i < e.length -1)
				aerolineas += ' - ';
		}
		$('#aerolineas').text(aerolineas);
	});
}

function aeropuertos(){
	var rutaWS = $('#ruta').val();
	$.ajax({
		type: 'GET',
		url: rutaWS + '/aeropuertos'
	}).done(function(e){
		var aeropuertos = '';
		for(var i=0;i<e.length;i++){
			aeropuertos += e[i].nombre;
			if(i < e.length -1)
				aeropuertos += ' - ';
		}
		$('#aeropuertos').text(aeropuertos);
	});
}