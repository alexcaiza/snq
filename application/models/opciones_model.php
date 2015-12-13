<?php
class opciones_model extends CI_Model {

    // table name
    private $tbl_opciones = 'opciones';

    function __construct() {
        parent::__construct();
    }

    public function getOpciones() {
        $query = $this->db
                ->select("*")
                ->from("opciones")
                ->order_by("id", "asc")
                ->get();
        $opciones = $query->result();
        return $opciones;
    }

    public function getOpcionesConDireccion() {
        $query = $this->db
                ->select("*")
                ->from("opciones as p")
                ->join("opciones_direccion as d", "p.id = d.id_opcion", "inner")
                ->order_by("p.id", "asc")
                ->get();
        $opciones = $query->result();
        return $opciones;
    }

    public function getOpciones2() {
        $query = $this->db
                ->select("*")
                ->from("opciones")
                ->order_by("id", "asc")
                ->get();
        $opciones = $query->result_array();
        return $opciones;
    }

    public function getOpcionesPorID($id) {
        $filtros = array('id' => $id);
        $query = $this->db
                ->select("*")
                ->from("opciones")
                ->where($filtros)
                ->get();
        $opciones = $query->row();
        return $opciones;
    }

    // get opcion by id
    function get_by_id($id) {
        $this->db->where('id', $id);
        return $this->db->get($this->tbl_opciones);
    }

    // add new opcion
    function save_opcion($opcion = array()) {
        $this->db->insert($this->tbl_opciones, $opcion);
        return $this->db->insert_id();
    }

    // update new opcion
    function update_opcion($id, $opcion) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_opciones, $opcion);
        return true;
    }
    
    // update new opcion
    function delete_opcion($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_opciones);
        return true;
    }

    // add new opcion
    function save($opcion) {
        $this->db->insert($this->tbl_opciones, $opcion);
        return $this->db->insert_id();
    }

    // update opcion by id
    function update($id, $opcion) {
        $this->db->where('id', $id);
        $this->db->update($this->tbl_opciones, $opcion);
    }

    // delete opcion by id
    function delete($id) {
        $this->db->where('id', $id);
        $this->db->delete($this->tbl_opciones);
    }

    // get number of persons in database
    function count_all() {
        return $this->db->count_all($this->tbl_opciones);
    }

    // get persons with paging
    function get_paged_list($limit = 10, $offset = 0) {
        $this->db->order_by('id', 'asc');
        return $this->db->get($this->tbl_opciones, $limit, $offset);
    }

}
