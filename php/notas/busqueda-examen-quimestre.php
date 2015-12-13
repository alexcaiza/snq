<?php
header('Content-type: application/json; charset=ISO-8859-1');
date_default_timezone_set('America/Bogota');

include_once("../conectar.php");

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

$sql = "";
$sql .= " select a.*, tnp.valornota ";
$sql .= " from ";
$sql .= " (select e.codigoestudiante, e.cedula, e.nombre, e.apellido, lower(p.codigoreferencia) codigoreferencia, p.codigoparcial, p.orden from estudiante e, parcial p) as a ";
$sql .= " left join tiponotaparcial tnp on tnp.codigoparcial = a.codigoparcial ";
$sql .= " WHERE 1=1 ";
$sql .= " ORDER BY a.cedula, a.orden ";

$data['sql'] = $sql;

$rs = mysql_query($sql); // or die (mysql_error());
$numrow = 1;

$estudiantesNotas = array();

while ($row = mysql_fetch_array($rs)) {
	if (isset($estudiantesNotas[$row['cedula']])) {
		$items = $estudiantesNotas[$row['cedula']];
		$items[$row['codigoreferencia']] = $row['valornota'];
		
		$estudiantesNotas[$row['cedula']] = $items;
	} else {
		$items = array();
		
		$items['numrow'] = ($start + $numrow);
		$items['cedula'] = $row['cedula'];
		$items['nombrecompleto'] = $row['nombre'].' '.$row['apellido'];
		
		$items[$row['codigoreferencia']] = $row['valornota'];
		
		$estudiantesNotas[$row['cedula']] = $items;
		
		$numrow++;
	}
}

$estudiantes = array();
foreach($estudiantesNotas as $key=>$value)
{
	$estudiantes[] = $value;
}

$data['estudiantes'] = $estudiantes;

$sql  = " ";
$sql .= " SELECT COUNT(*) AS TOTAL FROM ESTUDIANTE E ";
$sql .= " WHERE 1=1 ";
$sql .= " AND E.ESTADO = '1' ";

$rsTotal = mysql_query($sql);
$rowTotal = mysql_fetch_row($rsTotal);
//$totalCount = $rowTotal[0];
$totalCount = 1000;

$data['sqlCount'] = $sql;
$data['totalCount'] = $totalCount;
$data['mensaje'] = mysql_errno() == 0 ? 'success': mysql_error();
$data['success'] = mysql_errno() == 0;

echo json_encode($data);

?>