<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");
include_once("../consultas.php");

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_REQUEST['params']));

$page = $_REQUEST['page'];
$start = $_REQUEST['start'];
$limit = $_REQUEST['limit'];

$data = array();

$data['params'] = $params;
$data['page'] = $page;
$data['start'] = $start;
$data['limit'] = $limit;

class DynamicProperties {};

//arma los filtros para contar los tipos del tipo de nota del nivel2
$searchTipoNota = new DynamicProperties;
$searchTipoNota->codigotiponotapadre = $params->nivel2;

$countTipoNota = contarTipoNotaByParams($searchTipoNota);

//armar los filtros para buscar los tipos de notas del tipo de nota de nivel 2
$searchTipoNota = new DynamicProperties;
if ($countTipoNota > 0) {
	$searchTipoNota->codigotiponotapadre = $params->nivel2;
} else {
	$searchTipoNota->codigotiponota = $params->nivel2;
	$searchTipoNota->codigotiponotapadre = $params->nivel1;
}

$sqlNotas = armarSQLNotas($searchTipoNota);

$notas = null;
if (isset($params->codigotiponotapadre)) {
	$notas = consultarNotas($searchTipoNota);
}
$data['notas'] = $notas;
$data['sqlNotas'] = $sqlNotas;
$data['totalCount'] = 1000;
$data['countTipoNota'] = $countTipoNota;
$data['mensaje'] = mysql_errno() == 0 ? 'success': mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>