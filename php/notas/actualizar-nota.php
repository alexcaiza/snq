<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");
include_once("../consultas.php");

$method = $_SERVER['REQUEST_METHOD'];
$params = json_decode(stripslashes($_REQUEST['params']));
$notasestudiante = json_decode(stripslashes($_REQUEST['notasestudiante']));
$columna = $_REQUEST['columna'];
$valornota = json_decode(stripslashes($_REQUEST['valornota']));

$request_body = file_get_contents('php://input');
$nota = json_decode($request_body);

$periodo = consultarPeriodo();
$estudiante = consultarEstudiante($params->cedula);

class DynamicProperties { };

//Filtros para buscar el tipo de nota a ingresar
$searchTipoNota = new DynamicProperties;
$searchTipoNota->codigotiponotapadre = $params->nivel2;

$countTipoNota = contarTipoNotaByParams($searchTipoNota);

$searchTipoNota = new DynamicProperties;
if ($countTipoNota > 0) {
	$searchTipoNota->codigotiponotapadre = $params->nivel2;
	$searchTipoNota->columna = $columna;
} else {
	$searchTipoNota->codigotiponota = $params->nivel2;
	$searchTipoNota->codigotiponotapadre = $params->nivel1;
	$searchTipoNota->columna = $columna;
}

$tiponota = consultarTipoNotaByParams($searchTipoNota);

//Filtros para buscar el curso
$searchCurso = new DynamicProperties;
$searchCurso->codigotipocurso = $params->codigotipocurso;
$searchCurso->codigomateria = $params->codigomateria;
$searchCurso->codigoparalelo = $params->codigoparalelo;
$searchCurso->codigoperiodo = $periodo['codigoperiodo'];
$searchCurso->codigoestudiante = $estudiante['codigoestudiante'];

$curso = consultarCursoByParams($searchCurso);

//Filtros para buscar un cursoestudiante
$searchCursoEstudiante = new DynamicProperties;
$searchCursoEstudiante->codigocurso = $curso['codigocurso'];
$searchCursoEstudiante->codigoestudiante = $estudiante['codigoestudiante'];

$cursoestudiante = consultarCursoEstudianteByParams($searchCursoEstudiante);

$accion = "";

if(isset($tiponota)) {
	//Filtros para buscar un cursoestudiantenota
	$searchCursoEstudianteNota = new DynamicProperties;
	$searchCursoEstudianteNota->codigocurso = $curso['codigocurso'];
	$searchCursoEstudianteNota->codigoestudiante = $estudiante['codigoestudiante'];
	$searchCursoEstudianteNota->codigotiponota = $tiponota['codigotiponota'];
	$searchCursoEstudianteNota->valornota = $valornota;

	$cursoestudiantenota = consultarCursoEstudianteNotaByParams($searchCursoEstudianteNota);

	$codigocursoestudiantenotas = $cursoestudiantenota['codigocursoestudiantenotas'];
	$searchCursoEstudianteNota->codigocursoestudiantenotas = $codigocursoestudiantenotas;

	if ($cursoestudiantenota == null) {
		$codigocursoestudiantenotas = insertCursoEstudianteNota($searchCursoEstudianteNota);
		$accion = "I";
	} else {
		if ($valornota != null && $valornota != '') {
			$codigocursoestudiantenotas = updateCursoEstudianteNota($searchCursoEstudianteNota);
			$accion = "U";
		} else {
			$codigocursoestudiantenotas = deleteCursoEstudianteNota($searchCursoEstudianteNota);
			$accion = "D";
		}
	}
}

$data = array();
if ($accion != "") {
	$data['nota'] = $nota;
}
$data['accion'] = $accion;
$data['params'] = $params;
//$data['notasestudiante'] = $notasestudiante;
$data['tiponota'] = $tiponota;
//$data['estudiante'] = $estudiante;
//$data['periodo'] = $periodo;
//$data['columna'] = $columna;
//$data['valornota'] = $valornota;
//$data['method'] = $method;
//$data['searchCurso'] = $searchCurso;
//$data['curso'] = $curso;
//$data['cursoestudiante'] = $cursoestudiante;
//$data['cursoestudiantenota'] = $cursoestudiantenota;
//$data['codigocursoestudiantenotas'] = $codigocursoestudiantenotas;

echo json_encode($data);

?>