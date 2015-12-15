<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Index extends CI_Controller {

    public function __construct() {
        parent::__construct();
        $this->layout->setLayout('template1');
    }

    public function index() {
        $datos["var1"] = "Mi titulo desde el controlador CI";
        $datos["var2"] = "Datos de bajada";

        //$this->load->view('hola', $datos);
        $this->layout->setTitle('SNQ');
        $this->layout->view('index', $datos);
    }

    public function index2() {
        $this->load->view('index');
    }

}
