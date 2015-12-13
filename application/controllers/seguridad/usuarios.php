<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Usuarios extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->layout->setLayout('template1');
    }

    public function buscarUsuarios() {
		
		$method = $_SERVER['REQUEST_METHOD'];
		
		$data = array();
		$data['method'] = $method;
		$data['aaa'] = $method;
		$data['bbb'] = $method;

	    //add the header here
		header('Content-Type: application/json');
		echo json_encode($data);
    }
	
	public function buscarRoles() {
		
		$method = $_SERVER['REQUEST_METHOD'];
		
		$data = array();
		$data['method'] = $method;

	    //add the header here
		header('Content-Type: application/json');
		echo json_encode($data);
    }

}
