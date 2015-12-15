<?php
class vacaciones_model extends CI_Model {

    // table name
    private $tbl_vacaciones = 'vacaciones';

    function __construct() {
        parent::__construct();
    }

    public function getVacaciones() {
        $query = $this->db
                ->select("*")
                ->from("vacaciones")
                ->order_by("id", "asc")
                ->get();
        $vacaciones = $query->result();
        return $vacaciones;
    }

    public function getVacacionesConDireccion() {
        $query = $this->db
                ->select("*")
                ->from("vacaciones as p")
                ->join("vacaciones_direccion as d", "p.id = d.id_vacacion", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $vacaciones = $query->result();
        return $vacaciones;
    }

    public function getVacaciones2() {
        $query = $this->db
                ->select("*")
                ->from("vacaciones")
                ->order_by("id", "asc")
                ->get();
        $vacaciones = $query->result_array();
        return $vacaciones;
    }

    public function getVacacionesPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("vacaciones")
                ->where($filtros)
                ->get();
        $vacaciones = $query->row();
        return $vacaciones;
    }

    // get vacacion by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_vacaciones);
    }

    // add new vacacion
    function save_vacacion($vacacion = array()) {
        $this->db->insert($this->tbl_vacaciones, $vacacion);
        return $this->db->insert_id();
    }

    // update new vacacion
    function update_vacacion($id, $vacacion) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_vacaciones, $vacacion);
        return true;
    }
    
    // update new vacacion
    function delete_vacacion($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_vacaciones);
        return true;
    }

    // add new vacacion
    function save($vacacion) {
        $this->db->insert($this->tbl_vacaciones, $vacacion);
        return $this->db->insert_id();
    }

    // update vacacion by id
    function update($id, $vacacion) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_vacaciones, $vacacion);
    }

    // delete vacacion by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_vacaciones);
    }

    // get number of persons in database
    function count_all() {
        return $this->db->count_all($this->tbl_vacaciones);
    }

    // get persons with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_vacaciones, $limit, $offset);
    }

}
