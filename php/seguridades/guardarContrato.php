<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$empleado = json_decode(stripslashes($_POST['empleado']));
$contrato = json_decode(stripslashes($_POST['contrato']));
$horarios = json_decode(stripslashes($_POST['horarios']));

$codigoContrato = null;
$codigoHorario = null;

if(isset($horarios)){
	if (!is_null($horarios)) {
		$sqlH = sprintf("INSERT INTO HORARIO (estado) VALUES ('%s')", '1');
		$rs = mysql_query($sqlH);
		if (!$rs) {
			die('Error en la consulta: $sqlH ' . mysql_error());
		}
		$codigoHorario = mysql_insert_id();
		foreach ($horarios as $horario) {
			if (!is_null($horario)) {
				$sqlHD = sprintf("INSERT INTO HORARIODETALLE (codigohorario,codigodia,nombredia,numerohoras,horainicio,horafin) VALUES ('%s','%s','%s','%s','%s','%s')", 
					$codigoHorario,
					mysql_real_escape_string($horario->codigodia),
					mysql_real_escape_string($horario->nombredia),
					mysql_real_escape_string($horario->numerohoras),
					mysql_real_escape_string($horario->horainicio),
					mysql_real_escape_string($horario->horafin)
				);
				$rs = mysql_query($sqlHD);
				if (!$rs) {
					die('Error en la consulta: $sqlHD ' . mysql_error());
				}
			}
		}
	}
}

$codigoPeriodo = null;
$sqlP = sprintf("SELECT codigoperiodo, anio FROM periodo WHERE estado = '1'");
$rs = mysql_query($sqlP);
while ($fila = mysql_fetch_assoc($rs)) {
    $codigoPeriodo =  $fila['codigoperiodo'];
}

$sqlC = sprintf("INSERT INTO CONTRATO (codigoperiodo,codigoempleado,codigohorario,fechainicio,fechafin,estado,valorHora) VALUES ('%s','%s','%s','%s','%s','%s','%s')", 
	$codigoPeriodo,
	mysql_real_escape_string($empleado->codigoempleado), 
	$codigoHorario,
	mysql_real_escape_string($contrato->fechainicio),
	mysql_real_escape_string($contrato->fechafin),
	mysql_real_escape_string($contrato->estado),
	mysql_real_escape_string($contrato->valorhora)
	);
	
$rs = mysql_query($sqlC);
if (!$rs) {
	die("Error en la consulta: $sqlC " . mysql_error());
}

$codigoContrato = mysql_insert_id();

$data = array();
$data['sql'] = $sqlC;
$data['codigocontrato'] = $codigoContrato;
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['error'] = mysql_error();
$data['method'] = $method;

echo json_encode($data);

?>