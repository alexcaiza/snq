<?php
include("../conectar.php");

$method = $_SERVER['REQUEST_METHOD'];

$usuario = json_decode(stripslashes($_POST['usuario']));
$usuarioRoles = json_decode(stripslashes($_POST['usuarioRoles']));

$sqlDeleteUsuarioRol = null;
$sqlInsertUsuarioRol = null;
$sqlInsertUsuario = null;
$sqlUpdateUsuario = null;

$codigousuario = null;

if(isset($usuario->codigousuario) && isset($usuarioRoles)){
	//registra los datos del usuario al empleado si todavia no tiene usuario
	if ($usuario->codigousuario == '') {
		if ($usuario->username != '') {
			$sqlInsertUsuario = "";
			$sqlInsertUsuario .= "INSERT INTO usuario(username, estado)";
			$sqlInsertUsuario .= "VALUES ('".$usuario->username."', '1')";
			
			$rs = mysql_query($sqlInsertUsuario);
			
			$codigousuario = mysql_insert_id();
			
			if ($codigousuario != null && $usuario->codigoempleado != '') {
				$sqlUpdateUsuario = "UPDATE empleado SET codigousuario = '".$codigousuario."' WHERE codigoempleado = '".$usuario->codigoempleado."'";
				$rs = mysql_query($sqlUpdateUsuario);
			}
		}
	} else {
		$codigousuario = $usuario->codigousuario;
	}

	if ($codigousuario != null) {
		//elimina primero los roles anteriores del usuario
		$sqlDeleteUsuarioRol = "DELETE FROM usuario_rol WHERE CODIGOUSUARIO = '".$codigousuario."'";
		$rs = mysql_query($sqlDeleteUsuarioRol);
		
		if (!is_null($usuarioRoles)) {
			foreach ($usuarioRoles as $ur) {
				if (!is_null($ur)) {
					$sqlInsertUsuarioRol = sprintf("INSERT INTO usuario_rol (codigousuario,codigorol,estado) VALUES ('%s','%s','%s')", 
						mysql_real_escape_string($codigousuario),
						mysql_real_escape_string($ur->codigorol),
						mysql_real_escape_string('1')
					);
					$rs = mysql_query($sqlInsertUsuarioRol);
				}
			}
		}
	}
}

$data = array();
$data['sqlDeleteUsuarioRol'] = $sqlDeleteUsuarioRol;
$data['sqlInsertUsuarioRol'] = $sqlInsertUsuarioRol;
$data['sqlInsertUsuario'] = $sqlInsertUsuario;
$data['sqlUpdateUsuario'] = $sqlUpdateUsuario;
$data['codigousuario'] = $codigousuario;
$data['mensaje'] = mysql_errno() == 0 ? 'OK': mysql_error();
$data['success'] = mysql_errno() == 0;
$data['error'] = mysql_error();
$data['method'] = $method;

echo json_encode($data);

?>