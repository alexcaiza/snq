<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$data = array();

$params = json_decode(stripslashes($_POST['params']));

$sqlInsertRol = null;
$sqlUpdateRol = null;
$sqlDeleteRolOpcion = null;
$sqlInsertRolOpcion = null;
$codigorol = null;
$rol = null;
$rolOpciones = null;

if($params->accion == 'save') {

	$rol = json_decode(stripslashes($_POST['rol']));
	$rolOpciones = json_decode(stripslashes($_POST['rolOpciones']));

	$sqlInsertRol = "INSERT INTO ROL(nombre, descripcion, estado) VALUES ('".$rol->nombre."','".$rol->descripcion."','1')";
	$rs = mysql_query($sqlInsertRol);
	
	$codigorol = mysql_insert_id();
	
	if (!is_null($rolOpciones)) {
		foreach ($rolOpciones as $ro) {
			if (!is_null($ro)) {
				$sqlInsertRolOpcion = sprintf("INSERT INTO rol_opcion (codigorol,codigoopcion,estado) VALUES ('%s','%s','%s')", 
					mysql_real_escape_string($codigorol),
					mysql_real_escape_string($ro->codigoopcion),
					mysql_real_escape_string('1')
				);
				$rs = mysql_query($sqlInsertRolOpcion);
			}
		}
	}
	
} else if($params->accion == 'update') {

	$rol = json_decode(stripslashes($_POST['rol']));
	$rolOpciones = json_decode(stripslashes($_POST['rolOpciones']));

	if(isset($rol->codigorol) && isset($rolOpciones)){
	
		$codigorol = $rol->codigorol;
		
		if ($codigorol != null && $codigorol != '') {
			//actualiza los campos del rol
			$sqlUpdateRol = "UPDATE ROL SET nombre ='".$rol->nombre."', descripcion = '".$rol->descripcion."' WHERE codigorol = '".$codigorol."'";
			$rs = mysql_query($sqlUpdateRol);
			
			//elimina primero los opciones anteriores del rol
			$sqlDeleteRolOpcion = "DELETE FROM rol_opcion WHERE CODIGOROL = '".$codigorol."'";
			$rs = mysql_query($sqlDeleteRolOpcion);
			
			if (!is_null($rolOpciones)) {
				foreach ($rolOpciones as $ro) {
					if (!is_null($ro)) {
						$sqlInsertRolOpcion = sprintf("INSERT INTO rol_opcion (codigorol,codigoopcion,estado) VALUES ('%s','%s','%s')", 
							mysql_real_escape_string($codigorol),
							mysql_real_escape_string($ro->codigoopcion),
							mysql_real_escape_string('1')
						);
						$rs = mysql_query($sqlInsertRolOpcion);
					}
				}
			}
		}
	}
	
} else if($params->accion == 'disabled') {

	$codigorol = $params->codigorol;
	
	//actualiza los campos del rol
	$sqlUpdateRol = "UPDATE ROL SET estado = '".$params->estado."' WHERE codigorol = '".$codigorol."'";
	$rs = mysql_query($sqlUpdateRol);
}

$data['sqlInsertRol'] = $sqlInsertRol;
$data['sqlUpdateRol'] = $sqlUpdateRol;
$data['sqlDeleteRolOpcion'] = $sqlDeleteRolOpcion;
$data['sqlInsertRolOpcion'] = $sqlInsertRolOpcion;
$data['codigorol'] = $codigorol;
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['error'] = mysql_error();
$data['rol'] = $rol;
$data['params'] = $params;
$data['method'] = $method;

echo json_encode($data);

?>