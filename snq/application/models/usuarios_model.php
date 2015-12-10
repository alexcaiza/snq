<?php

class usuarios_model extends CI_Model {

    // table name
    private $tbl_person = 'usuarios';

    function __construct() {
        parent::__construct();
    }

    public function logueo($login, $pass) {
        $filtros = array('login' => $login, 'pass' => $pass);

        $query = $this->db
                ->select("id, login, pass, nombre, correo")
                ->from("usuarios")
                ->where($filtros)
                ->count_all_results();

        return $query;
    }

}
