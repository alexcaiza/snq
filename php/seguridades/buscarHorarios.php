<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$params = json_decode(stripslashes($_POST['filtros']));

$codigocontrato = null;
if (isset($_POST['codigocontrato'])) {
	$codigocontrato = $_POST['codigocontrato'];
}

// Consulta sql
$sql = "";
$sql .= "SELECT HD.* FROM HORARIODETALLE HD ";
$sql .= "INNER JOIN HORARIO H ON (HD.CODIGOHORARIO = H.CODIGOHORARIO) ";
if (!is_null($codigocontrato)) {
$sql .= "INNER JOIN CONTRATO C ON (C.CODIGOHORARIO = H.CODIGOHORARIO) ";
}
$sql .= "WHERE ";
$sql .= "1=1 ";
if (!is_null($codigocontrato)) {
$sql .= "AND C.CODIGOCONTRATO = '$codigocontrato' ";
}
$sql .= "ORDER BY HD.CODIGODIA ";
	
$rs = mysql_query($sql);

$horarios = array();
while ($row = mysql_fetch_assoc($rs)) {
   $horarios[] = $row;
}

$data = array();

$data['sql'] = $sql;

$data['horarios'] = $horarios;

$data['mensaje'] = mysql_errno() == 0 ? 'OK': 'ERROR';

$data['success'] = mysql_errno() == 0;

$data['method'] = $method;

echo json_encode($data);

?>