<?php

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('America/Bogota');

//You are getting "22 Jan 2011 4:53:59 pm" because those are the rules you format your date with :
//d (day) : 22
//M (Month) : Jan
//Y (Year) : 2011
//g (12-hour format) : 4	1 through 12
//G	24-hour format of an hour without leading zeros	0 through 23
//h	12-hour format of an hour with leading zeros	01 through 12
//H	24-hour format of an hour with leading zeros	00 through 23
//i (minutes): 53
//s (seconds): 59
//a (am/pm): pm


function obtenerAnio($fecha) {
	$anio = date("Y", strtotime("".$fecha));
	//$anio = date("Y", $fecha);
	return $anio;
}

function obtenerCodigoMes($fecha) {
	$mes = date("m", strtotime("".$fecha));
	return $mes;
}

function obtenerMes($fecha) {
	$mes = date("M", strtotime("".$fecha));
	return $mes;
}

function obtenerDia($fecha) {
	$dia = date("d", strtotime("".$fecha));
	return $dia;
}

function obtenerDiaSemana($fecha) {
	return date("w", strtotime($fecha));
}

function fechaStringToDate ($dateString) {
	$newDateString = date_format(date_create_from_format('Y-m-d', $dateString), 'Y-m-d');
	return $newDateString;
}

function obtenerNombreMes($mes) {
	$meses = array("", "Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
	return $meses[intval($mes)];
}

function obtenerNombreDiaSemana($fecha) {
	$dias = array("DOMINGO","LUNES","MARTES","MIERCOLES","JUEVES","VIERNES","SABADO");
	return $dias[date("w", strtotime($fecha))];
}

function obtenerCodigoNombreDiaSemana($fecha) {
	$dias = array("DOM","LUN","MAR","MIE","JUE","VIE","SAB");
	return $dias[date("w", strtotime($fecha))];
}

function sumarDiasFecha($dateString, $num) {
	$datetime = DateTime::createFromFormat('Y-m-d', $dateString);
	$datetime->modify("+$num day");
	return $datetime->format('Y-m-d');
}

function obtenerUltimoDiaMes($elAnio,$elMes) {
  return date("d",(mktime(0,0,0,$elMes+1,1,$elAnio)-1));
}

function tiempo_transcurridos($fecha_inicio, $fecha_fin, $tipo)
{
	$fecha1 = new DateTime($fecha_inicio);
	$fecha2 = new DateTime($fecha_fin);
	$fecha = $fecha1->diff($fecha2);
	
	$diff = null;
	
	if ($tipo == 'y') {
		$diff = $fecha->y;
	} else if ($tipo == 'm') {
		$diff = $fecha->m;
	} else if ($tipo == 'd') {
		$diff = $fecha->d;
	} else if ($tipo == 'h') {
		$diff = $fecha->h;
	} else if ($tipo == 'H') {
		$diff = $fecha->H;
	} else if ($tipo == 'i') {
		$diff = $fecha->i;
	}
	//printf('%d años, %d meses, %d días, %d horas, %d minutos', $fecha->y, $fecha->m, $fecha->d, $fecha->h, $fecha->i);
	
	//return $fecha;
	return $diff;
}

function check_in_range($start_date, $end_date, $evaluame) {
    $start_ts = strtotime($start_date);
    $end_ts = strtotime($end_date);
    $user_ts = strtotime($evaluame);
    return (($user_ts >= $start_ts) && ($user_ts <= $end_ts));
}

function check_fecha_asistencia($start_date, $end_date, $evaluame) {
	$band = true;
	
    if (isset($start_date) && $start_date != '' && isset($end_date) && $end_date != '')  {
		$start_ts = strtotime($start_date);
		$end_ts = strtotime($end_date);
		$user_ts = strtotime($evaluame);
		return (($user_ts >= $start_ts) && ($user_ts <= $end_ts));
	} else if (isset($start_date) && $start_date != '' && (!isset($end_date) || $end_date == ''))  {
		$start_ts = strtotime($start_date);
		$user_ts = strtotime($evaluame);
		return ($user_ts >= $start_ts);
	} else if (!isset($start_date) || $start_date == '' && (isset($end_date) && $end_date != ''))  {
		$end_ts = strtotime($end_date);
		$user_ts = strtotime($evaluame);
		return ($user_ts <= $end_ts);
	}
	return $band;
}

function sumar_tiempo_fecha($fecha, $tiempo, $tipo)
{	
	$nuevafecha = $fecha;
	
	if ($tipo == 'Y') {
		$nuevafecha = strtotime ( '+'.$tiempo.' year' , strtotime ( $fecha ) ) ;
		$nuevafecha = date ( 'Y-m-d' , $nuevafecha );
	} else if ($tipo == 'M') {
		$nuevafecha = strtotime ( '+'.$tiempo.' month' , strtotime ( $fecha ) ) ;
		$nuevafecha = date ( 'Y-m-d' , $nuevafecha );
	} else if ($tipo == 'D') {
		$nuevafecha = strtotime ( '+'.$tiempo.' day' , strtotime ( $fecha ) ) ;
		$nuevafecha = date ( 'Y-m-d' , $nuevafecha );
	}
	
	//return ''.$fecha.' '.$tiempo.' '.$tipo;
	return $nuevafecha;
}

function restar_tiempo_fecha($fecha, $tiempo, $tipo)
{	
	$nuevafecha = $fecha;
	
	if ($tipo == 'Y') {
		$nuevafecha = strtotime ( '-'.$tiempo.' year' , strtotime ( $fecha ) ) ;
		$nuevafecha = date ( 'Y-m-d' , $nuevafecha );
	} else if ($tipo == 'M') {
		$nuevafecha = strtotime ( '-'.$tiempo.' month' , strtotime ( $fecha ) ) ;
		$nuevafecha = date ( 'Y-m-d' , $nuevafecha );
	} else if ($tipo == 'D') {
		$nuevafecha = strtotime ( '-'.$tiempo.' day' , strtotime ( $fecha ) ) ;
		$nuevafecha = date ( 'Y-m-d' , $nuevafecha );
	}
	
	//return ''.$fecha.' '.$tiempo.' '.$tipo;
	return $nuevafecha;
}

function compararFechas($fecha1, $fecha2)
{	
	$date1 = new DateTime($fecha1);
	$date2 = new DateTime($fecha2);
	
	if ($date1 == $date2) {
		return 0;
	} else if ($date1 < $date2) {
		return -1;
	} else if ($date1 > $date2) {
		return 1;
	}
	return -100;
}

function obtenerRangoFechasSemana($fecha)
{
	$numdia = date("w", strtotime($fecha));
	$tiempo= intval($numdia);
	if ($tiempo == 0) { //es domingo
		$tiempo = 6;
	} else {
		$tiempo = $tiempo - 1;
	}
	
	$fechainicio = restar_tiempo_fecha($fecha, $tiempo, 'D');
	
	//desde el primer dia de la semana 'lunes'se suman 7 dias hasta el domingo 
	$tiempo = 6;
	$fechafin = sumar_tiempo_fecha($fechainicio, $tiempo, 'D');
	
	$vec = array();
	$vec['fechainicio'] = $fechainicio;
	$vec['fechafin'] = $fechafin;
	
	return $vec;
}

function obtenerRangoFechasMes($fecha)
{
	$anio = obtenerAnio($fecha);
	$mes = obtenerCodigoMes($fecha);
	$diaInicio = '01';
	$diaFin = obtenerUltimoDiaMes($anio, $mes);
	
	$fechainicio = "$anio-$mes-$diaInicio";
	$fechafin = "$anio-$mes-$diaFin";
	
	$vec = array();
	$vec['fechainicio'] = $fechainicio;
	$vec['fechafin'] = $fechafin;
	
	return $vec;
}


?>
