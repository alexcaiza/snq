<?php
include_once("../conectar.php");
include_once("../consultas.php");
include_once("../inserts.php");
include_once("../fechas.php");

header('Content-Type: text/html; charset=utf-8');
date_default_timezone_set('America/Bogota');

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_POST['params']));

$data = array();
$data['params'] = $params;

class DynamicProperties {};

if ($params->accion == 'consultarTipoNota') {
	$tiponota = null;
	if (isset($params->codigotiponota) && $params->codigotiponota != '') {
		$tiponota = consultarTipoNota($params->codigotiponota);
	}
	$data['tiponota'] = $tiponota;
}

else if ($params->accion == 'consultarTiposNota') {
	$tiposnota = null;
	if (isset($params->codigotiponotapadre) && $params->codigotiponotapadre != '') {
		$searchTipoNota = new DynamicProperties;
		$searchTipoNota->codigotiponotapadre = $params->nivel2;
		$countTipoNota = contarTipoNotaByParams($searchTipoNota);
		$tiposnota = array();
		if ($countTipoNota > 0) {
			$tiposnota = consultarTiposNotaByPadre($params->codigotiponotapadre);
		} else {
			$tiponota = consultarTipoNota($params->codigotiponotapadre);
			$tiposnota[] = $tiponota;
		}
	}
	$data['tiposnota'] = $tiposnota;
}

else if ($params->accion == 'consultarNotas') {
	$notas = null;
	if (isset($params->codigotiponotapadre) && $params->codigotiponotapadre != '') {
		$notas = consultarNotas($params->codigotiponotapadre);
	}
	$data['notas'] = $notas;
}

else if ($params->accion == 'consultarTipoParcial') {
	$tipoparcial = null;
	if (isset($params->codigotipoparcial) && $params->codigotipoparcial != '') {
		$tipoparcial = consultarTipoParcial($params->codigotipoparcial);
	}
	$data['tipoparcial'] = $tipoparcial;
}

else if ($params->accion == 'buscarDatosBusqueda') {
	$tiponota = null;
	if (isset($params->codigotiponota) && $params->codigotiponota != '') {
		$tiponota = consultarTipoNota($params->codigotiponota);
	}
	$data['tiponota'] = $tiponota;

	$parcial = null;
	if (isset($params->codigoparcial) && $params->codigoparcial != '') {
		$parcial = consultarParcial($params->codigoparcial);
	}
	$data['parcial'] = $parcial;
}




echo json_encode($data);

?>